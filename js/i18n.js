// i18n.js — Bilingual renderer (config loaded via config/*.js <script> tags)

const I18n = {
  currentLang: 'en',

  init() {
    const saved = localStorage.getItem('urt-simreal-lang');
    this.currentLang = saved || (navigator.language.startsWith('zh') ? 'zh' : 'en');
    this.render();
    this.bindEvents();
  },

  get config() {
    return this.currentLang === 'zh' ? window.__I18N_ZH : window.__I18N_EN;
  },

  applyLangAttr() {
    document.body.classList.toggle('lang-zh', this.currentLang === 'zh');
    document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';
  },

  render() {
    if (!window.__I18N_EN || !window.__I18N_ZH) {
      console.error('Config not loaded — check config/en.js and config/zh.js');
      return;
    }
    document.title = this.config.hero.title + ' Dataset';
    this.applyLangAttr();

    this.renderNav();
    this.renderHero();
    this.renderOverview();
    this.renderFeatures();
    this.renderScenarios();
    this.renderStructure();
    this.renderChannelData();
    this.renderDownload();
    this.renderCitation();
    this.renderFooter();
    this.updateLangToggle();

    this.bindCopyButtons();
  },

  // === Nav ===
  renderNav() {
    var n = this.config.nav;
    var links = document.getElementById('nav-links');
    if (!links) return;
    var anchors = links.querySelectorAll('a[href^="#"]');
    var keys = ['overview', 'features', 'scenarios', 'structure', 'download', 'citation'];
    anchors.forEach(function(a, i) {
      if (keys[i]) a.textContent = n[keys[i]];
    });
  },

  // === Hero ===
  renderHero() {
    var h = this.config.hero;
    var el;
    el = document.getElementById('hero-title'); if (el) el.textContent = h.title;
    el = document.getElementById('hero-subtitle'); if (el) el.textContent = h.subtitle;
    el = document.getElementById('hero-paper-status'); if (el) el.textContent = h.paperStatus;
  },

  // === Overview ===
  renderOverview() {
    var o = this.config.overview;
    var el;
    el = document.getElementById('overview-title'); if (el) el.textContent = o.title;
    // Render all paragraphs as plain <p> tags
    el = document.getElementById('overview-summary');
    if (el && o.paragraphs.length > 0) {
      el.innerHTML = o.paragraphs.map(function(p) {
        return '<p>' + p + '</p>';
      }).join('');
    }
    // Clear bullets list
    el = document.getElementById('overview-bullets');
    if (el) el.innerHTML = '';
  },

  // === Features ===
  renderFeatures() {
    var f = this.config.features;
    var el;
    el = document.getElementById('features-title'); if (el) el.textContent = f.title;
    var grid = document.getElementById('features-grid');
    if (!grid) return;
    grid.innerHTML = f.items.map(function(item) {
      return '<div class="modality-item">' +
        '<div class="modality-icon">' + item.icon + '</div>' +
        '<div class="modality-label">' + item.title + '</div>' +
        '<div class="modality-desc">' + item.desc + '</div>' +
        '</div>';
    }).join('');
  },

  // === Scenarios ===
  renderScenarios() {
    var s = this.config.scenarios;
    var el;
    el = document.getElementById('scenarios-title'); if (el) el.textContent = s.title;
    var container = document.getElementById('scenarios-cards');
    if (!container) return;
    container.innerHTML = s.items.map(function(item) {
      return '<div class="scenario-card">' +
        '<div class="scenario-id">' + item.id + '</div>' +
        '<div class="scenario-content">' +
          '<h3>' + item.name + '</h3>' +
          '<div class="scenario-type">' + item.type + '</div>' +
          '<p>' + item.desc + '</p>' +
        '</div>' +
        '<div class="scenario-domain">' + item.data + '</div>' +
        '</div>';
    }).join('');
  },

  // === Structure ===
  renderStructure() {
    var s = this.config.structure;
    var el;
    el = document.getElementById('structure-title'); if (el) el.textContent = s.title;
    el = document.getElementById('structure-desc'); if (el) el.textContent = s.description;
    el = document.getElementById('structure-tree');
    if (el) el.innerHTML = '<pre>' + s.tree.join('\n') + '</pre>';
  },

  // === Channel Data ===
  renderChannelData() {
    var c = this.config.channelData;
    var el;
    el = document.getElementById('channel-title'); if (el) el.textContent = c.title;
    el = document.getElementById('channel-desc'); if (el) el.innerHTML = c.description;

    el = document.getElementById('attr-title'); if (el) el.textContent = c.attributes.title;
    var attrBody = document.getElementById('attr-body');
    if (attrBody) {
      attrBody.innerHTML = c.attributes.rows.map(function(r) {
        return '<tr><td><code>' + r[0] + '</code></td><td>' + r[1] + '</td></tr>';
      }).join('');
    }

    el = document.getElementById('ds-title'); if (el) el.textContent = c.datasets.title;
    var dsBody = document.getElementById('ds-body');
    if (dsBody) {
      dsBody.innerHTML = c.datasets.rows.map(function(r) {
        return '<tr><td><code>' + r[0] + '</code></td><td>' + r[1] + '</td><td>' + r[2] + '</td></tr>';
      }).join('');
    }
  },

  // === Download ===
  renderDownload() {
    var d = this.config.download;
    var el;
    el = document.getElementById('download-title'); if (el) el.textContent = d.title;
    el = document.getElementById('download-desc'); if (el) el.textContent = d.description;
    var btn = document.getElementById('download-btn');
    if (btn) { btn.textContent = d.button; btn.href = d.url; }
    el = document.getElementById('download-size'); if (el) el.textContent = d.size;
    el = document.getElementById('download-license'); if (el) el.textContent = d.license;
  },

  // === Citation ===
  renderCitation() {
    var c = this.config.citation;
    var el;
    el = document.getElementById('citation-title'); if (el) el.textContent = c.title;
    el = document.getElementById('citation-desc'); if (el) el.textContent = c.description;
    el = document.getElementById('bibtex-content'); if (el) el.textContent = c.bibtex;
    el = document.getElementById('apa-content'); if (el) el.textContent = c.apa;
  },

  // === Footer ===
  renderFooter() {
    var f = this.config.footer;
    var el;
    el = document.getElementById('footer-maintainer'); if (el) el.textContent = f.maintainer;
    el = document.getElementById('footer-copyright');
    if (el) el.innerHTML = '&copy; 2026 URT-SimReal. All rights reserved.';
  },

  // === Language Toggle ===
  updateLangToggle() {
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = this.currentLang === 'zh' ? 'English' : '中文';
  },

  toggleLang() {
    this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('urt-simreal-lang', this.currentLang);
    this.render();
  },

  // === Copy Buttons ===
  bindCopyButtons() {
    document.querySelectorAll('.copy-btn').forEach(function(btn) {
      var clone = btn.cloneNode(true);
      btn.parentNode.replaceChild(clone, btn);
      clone.addEventListener('click', function() {
        var targetId = this.dataset.target;
        var targetEl = document.getElementById(targetId);
        if (!targetEl) return;
        navigator.clipboard.writeText(targetEl.textContent).then(function() {
          var orig = this.textContent;
          this.textContent = this.dataset.copied || 'Copied!';
          setTimeout(function() { this.textContent = orig; }.bind(this), 2000);
        }.bind(this));
      });
    });
  },

  // === Event Binding ===
  bindEvents() {
    var self = this;

    document.getElementById('lang-toggle').addEventListener('click', function() {
      self.toggleLang();
    });

    var navToggle = document.getElementById('nav-toggle');
    if (navToggle) {
      navToggle.addEventListener('click', function() {
        document.getElementById('nav-links').classList.toggle('open');
      });
    }

    document.querySelectorAll('#nav-links a').forEach(function(link) {
      link.addEventListener('click', function() {
        document.getElementById('nav-links').classList.remove('open');
        document.querySelectorAll('#nav-links a').forEach(function(l) { l.classList.remove('active'); });
        link.classList.add('active');
      });
    });

    this.bindCopyButtons();
  }
};

document.addEventListener('DOMContentLoaded', function() { I18n.init(); });
