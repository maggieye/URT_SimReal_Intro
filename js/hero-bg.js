// hero-bg.js — Dynamic rail transit + wireless signal canvas animation

(function() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, centerX, centerY;
  let particles = [];
  let waves = [];
  let lightStreaks = [];
  let trainLights = [];
  let frameCount = 0;

  // Resize handler
  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    W = canvas.width = rect.width;
    H = canvas.height = rect.height;
    centerX = W * 0.5;
    centerY = H * 0.45;
  }
  window.addEventListener('resize', resize);
  resize();

  // --- Color palette ---
  const signalBlue = 'rgba(64, 180, 255, alpha)';
  const signalCyan = 'rgba(0, 220, 240, alpha)';
  const warmWhite = 'rgba(255, 250, 240, alpha)';
  const softGreen = 'rgba(80, 220, 140, alpha)';
  const deepBlue = 'rgba(20, 60, 130, alpha)';

  // === Light Streak (train passing by) ===
  class LightStreak {
    constructor() {
      this.reset();
    }
    reset() {
      this.y = Math.random() * H * 0.6 + H * 0.15;
      this.x = -200 - Math.random() * 600;
      this.speed = 3 + Math.random() * 6;
      this.length = 30 + Math.random() * 80;
      this.width = 1 + Math.random() * 2;
      this.alpha = 0.3 + Math.random() * 0.5;
      this.hue = Math.random() < 0.6 ? 200 : 40; // blue or warm
    }
    update() {
      this.x += this.speed;
      if (this.x > W + 300) this.reset();
    }
    draw(ctx) {
      const gradient = ctx.createLinearGradient(this.x, 0, this.x - this.length, 0);
      const color = this.hue === 200
        ? `hsla(${this.hue}, 90%, 65%, ${this.alpha})`
        : `hsla(${this.hue}, 80%, 70%, ${this.alpha})`;
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, 'transparent');
      ctx.strokeStyle = gradient;
      ctx.lineWidth = this.width;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x - this.length, this.y);
      ctx.stroke();
    }
  }

  // === Signal Wave Pulse ===
  class SignalWave {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = W * 0.2 + Math.random() * W * 0.6;
      this.y = H * 0.2 + Math.random() * H * 0.5;
      this.radius = 5 + Math.random() * 15;
      this.maxRadius = 60 + Math.random() * 120;
      this.speed = 0.5 + Math.random() * 1.5;
      this.alpha = 0.5 + Math.random() * 0.5;
      this.lineWidth = 0.5 + Math.random() * 1.5;
    }
    update() {
      this.radius += this.speed;
      if (this.radius > this.maxRadius) this.reset();
    }
    draw(ctx) {
      const progress = this.radius / this.maxRadius;
      const a = this.alpha * (1 - progress);
      ctx.strokeStyle = `rgba(64, 200, 255, ${a})`;
      ctx.lineWidth = this.lineWidth * (1 - progress * 0.5);
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.stroke();

      // Inner glow ring
      if (progress < 0.3) {
        const ga = a * 0.6;
        ctx.strokeStyle = `rgba(100, 230, 255, ${ga})`;
        ctx.lineWidth = this.lineWidth * 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.7, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  }

  // === Floating Particle (CSI data) ===
  class Particle {
    constructor() {
      this.reset(true);
    }
    reset(initial) {
      this.x = Math.random() * W;
      this.y = initial ? Math.random() * H : H + 10;
      this.size = 0.5 + Math.random() * 1.8;
      this.speedY = 0.2 + Math.random() * 0.6;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.wobbleAmp = Math.random() * 0.4;
      this.wobbleFreq = 0.01 + Math.random() * 0.03;
      this.alpha = 0.2 + Math.random() * 0.5;
      this.hue = [200, 190, 210, 40][Math.floor(Math.random() * 4)];
      this.life = frameCount;
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(frameCount * this.wobbleFreq) * this.wobbleAmp;
      if (this.y < -10) { this.y = H + 10; this.x = Math.random() * W; this.life = frameCount; }
    }
    draw(ctx) {
      const age = (frameCount - this.life) * 0.003;
      const flicker = 0.6 + 0.4 * Math.sin(frameCount * 0.05 + this.x * 0.1);
      const a = this.alpha * flicker;
      ctx.fillStyle = `hsla(${this.hue}, 80%, 65%, ${a})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();

      // Glow
      if (this.size > 1.2) {
        ctx.fillStyle = `hsla(${this.hue}, 90%, 75%, ${a * 0.25})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // === Train Light (moving headlight) ===
  class TrainLight {
    constructor() {
      this.reset();
    }
    reset() {
      this.goingRight = Math.random() > 0.5;
      this.x = this.goingRight ? -100 : W + 100;
      this.y = H * 0.35 + Math.random() * H * 0.2;
      this.speed = (2 + Math.random() * 3) * (this.goingRight ? 1 : -1);
      this.glowRadius = 20 + Math.random() * 35;
    }
    update() {
      this.x += this.speed;
      if ((this.goingRight && this.x > W + 150) || (!this.goingRight && this.x < -150)) {
        this.reset();
      }
    }
    draw(ctx) {
      const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.glowRadius);
      gradient.addColorStop(0, 'rgba(255, 250, 235, 0.7)');
      gradient.addColorStop(0.3, 'rgba(255, 230, 180, 0.3)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.glowRadius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // === Initialize ===
  function init() {
    // Light streaks
    for (let i = 0; i < 12; i++) {
      const s = new LightStreak();
      s.x = Math.random() * W; // spread across screen initially
      lightStreaks.push(s);
    }
    // Signal waves
    for (let i = 0; i < 5; i++) {
      const w = new SignalWave();
      w.radius = Math.random() * w.maxRadius; // stagger phases
      waves.push(w);
    }
    // Particles
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }
    // Train lights
    for (let i = 0; i < 2; i++) {
      trainLights.push(new TrainLight());
    }
  }
  init();

  // === Draw tunnel perspective grid ===
  function drawTunnelGrid() {
    const vpX = centerX;
    const vpY = centerY * 0.6;
    const timeShift = Math.sin(frameCount * 0.003) * 0.02;

    ctx.strokeStyle = 'rgba(50, 120, 200, 0.10)';
    ctx.lineWidth = 1;

    // Horizontal lines (ties / cross-beams) — receding with perspective
    const numH = 20;
    for (let i = 0; i < numH; i++) {
      const t = i / numH;
      const z = 0.05 + t * 0.95;
      const y = vpY + (H - vpY) * (1 - 1 / (z + 0.1)) * 1.5;
      const spread = W * 0.3 * (1 - t) + W * 1.2 * t;
      const alpha = 0.04 + t * 0.06;

      ctx.strokeStyle = `rgba(60, 140, 220, ${alpha})`;
      ctx.beginPath();
      ctx.moveTo(vpX - spread * 0.5, y);
      ctx.lineTo(vpX + spread * 0.5, y);

      // Subtle wave
      for (let j = 0; j < 5; j++) {
        const sx = vpX - spread * 0.5 + spread * 0.2 * j;
        const sy = y + Math.sin(frameCount * 0.01 + j * 2 + i * 0.5) * 2;
        if (j > 0) ctx.lineTo(sx, sy);
      }
      ctx.stroke();
    }

    // Vertical converging lines (walls / rails)
    const numV = 12;
    for (let i = 0; i < numV; i++) {
      const spread = (i / (numV - 1) - 0.5) * 2; // -1 to 1
      const startX = vpX + spread * W * 0.6;
      const endX = vpX + spread * W * 0.04;
      const alpha = 0.03 + Math.abs(spread) < 0.3 ? 0.08 : 0.04;

      ctx.strokeStyle = `rgba(50, 120, 200, ${alpha})`;
      ctx.lineWidth = Math.abs(spread) < 0.15 ? 1.5 : 0.7;
      ctx.beginPath();
      ctx.moveTo(startX, H);
      ctx.lineTo(endX, vpY);
      ctx.stroke();

      // Rail tracks (two thick parallel lines near center)
      if (Math.abs(spread) < 0.08 && Math.abs(spread) > 0.01) {
        ctx.strokeStyle = `rgba(80, 160, 230, ${alpha + 0.03})`;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(startX, H);
        ctx.lineTo(endX, vpY);
        ctx.stroke();
      }
    }

    // Center rail highlight
    ctx.strokeStyle = 'rgba(100, 180, 240, 0.06)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(vpX, H);
    ctx.lineTo(vpX, vpY);
    ctx.stroke();
  }

  // === Draw subtle signal frequency bands ===
  function drawSignalBands() {
    const baseY = H * 0.85;
    for (let i = 0; i < 3; i++) {
      const y = baseY - i * 18;
      const alpha = 0.03 + i * 0.01;
      const waveAmp = 8 + i * 5;
      const freq = 0.02 + i * 0.005;

      ctx.strokeStyle = `rgba(64, 180, 255, ${alpha})`;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      for (let x = 0; x < W; x += 3) {
        const yOff = Math.sin(x * freq + frameCount * 0.02 + i) * waveAmp;
        if (x === 0) ctx.moveTo(x, y + yOff);
        else ctx.lineTo(x, y + yOff);
      }
      ctx.stroke();
    }
  }

  // === Main render loop ===
  function animate() {
    frameCount++;
    ctx.clearRect(0, 0, W, H);

    // Semi-transparent dark overlay — lets background.png show through
    const vignette = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(W, H) * 0.8);
    vignette.addColorStop(0, 'rgba(10, 22, 40, 0.15)');
    vignette.addColorStop(0.5, 'rgba(8, 16, 30, 0.35)');
    vignette.addColorStop(1, 'rgba(4, 8, 18, 0.7)');
    ctx.fillStyle = 'rgba(10, 22, 40, 0.4)';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, W, H);

    // Draw tunnel perspective
    drawTunnelGrid();

    // Draw signal bands at bottom
    drawSignalBands();

    // Update & draw light streaks
    for (const s of lightStreaks) { s.update(); s.draw(ctx); }

    // Update & draw train lights
    for (const t of trainLights) { t.update(); t.draw(ctx); }

    // Update & draw signal waves
    for (const w of waves) { w.update(); w.draw(ctx); }

    // Update & draw particles
    for (const p of particles) { p.update(); p.draw(ctx); }

    // Pulsing signal source nodes (fixed positions)
    const nodes = [
      { x: W * 0.15, y: H * 0.7 },
      { x: W * 0.85, y: H * 0.65 },
      { x: W * 0.5, y: H * 0.25 },
    ];
    for (const n of nodes) {
      const pulse = 0.4 + 0.3 * Math.sin(frameCount * 0.03 + n.x);
      const r = 2 + pulse * 3;
      ctx.fillStyle = `rgba(64, 200, 255, ${pulse})`;
      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = `rgba(100, 220, 255, ${pulse * 0.3})`;
      ctx.beginPath();
      ctx.arc(n.x, n.y, r * 3, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  animate();
})();
