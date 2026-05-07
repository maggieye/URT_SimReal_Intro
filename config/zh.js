// 中文配置 — 编辑此文件以修改页面上的中文内容
window.__I18N_ZH = {
  "nav": {
    "title": "URT-SimReal",
    "overview": "概述",
    "features": "特性",
    "scenarios": "场景",
    "structure": "结构",
    "download": "下载",
    "citation": "引用"
  },
  "hero": {
    "title": "URT-SimReal",
    "subtitle": "面向城市轨道交通的虚实混合多模态三维环境与多频段无线信道数据集",
    "doi": "https://doi.org/10.5281/zenodo.19920829",
    "doi_label": "DOI",
    "version": "v1.0.0"
  },
  "overview": {
    "title": "概述",
    "paragraphs": [
      "<strong>URT-SimReal</strong> 是一个高保真、多模态、测量校准的城市轨道交通（URT）专用数据集，实现了<strong>合成数据与真实测量数据（Sim-to-Real）</strong>的无缝融合。数据集涵盖<strong>11种典型URT场景</strong>，包括全封闭隧道、车站站台、高架桥及复杂城市轨道段。我们成功将运营线路上的珍贵实测数据与特定场景的确定性射线追踪（RT）仿真进行了深度融合。",
      "频谱覆盖范围从<strong>Sub-6 GHz（1.8、3.5 和 5.6 GHz）</strong>延伸到专用<strong>毫米波（mmWave）频段（28、39.5 和 60 GHz）</strong>。严格遵循ITU-R P.2040-3建议书和3GPP TR 38.901标准（0.5–100 GHz信道模型），我们对关键基础设施组件（如混凝土隧道壁、列车车体、钢轨、站台屏蔽门（PSD）和轨旁植被）赋予了精确的电磁（EM）特性。",
      "数据集包含跨多个频段和极化配置的<strong>316,026条信道状态信息（CSI）记录</strong>。它不仅提供<strong>路径损耗（PL）</strong>和<strong>RMS时延扩展</strong>等宏观信道参数，还提供<strong>功率时延谱（PDP）</strong>和<strong>多径分量（MPC）</strong>的细粒度几何属性。此外，同步采集的<strong>三维点云</strong>、<strong>RGB图像</strong>和<strong>语义标签</strong>为环境提供了强大的物理表征，显著丰富了数据集的多模态属性，支持先进的环境感知研究。"
    ]
  },
  "features": {
    "title": "核心特性",
    "items": [
      {
        "icon": "📡",
        "title": "多频段覆盖",
        "desc": "Sub-6 GHz（1.8、3.5、5.6 GHz）和毫米波频段（28、39.5、60 GHz），符合ITU-R P.2040-3和3GPP TR 38.901标准。"
      },
      {
        "icon": "🏙️",
        "title": "11种URT环境",
        "desc": "涵盖封闭隧道、高架车站、高架桥、城市平行段及受控实验环境，支持全面评估。"
      },
      {
        "icon": "🔄",
        "title": "Sim-to-Real融合",
        "desc": "运营线路实测数据与特定场景射线追踪仿真无缝集成，经精确校准确保准确性。"
      },
      {
        "icon": "📊",
        "title": "316,026条CSI记录",
        "desc": "跨多频段多极化的大规模信道数据，涵盖路径损耗、时延扩展、PDP和MPC。"
      },
      {
        "icon": "🎯",
        "title": "多模态感知",
        "desc": "同步提供3D点云、RGB图像、语义标签和无线信道测量，支持环境感知研究。"
      },
      {
        "icon": "📐",
        "title": "几何特定电磁参数",
        "desc": "依据国际标准为每个基础设施组件分配精确的电磁特性。"
      }
    ]
  },
  "scenarios": {
    "title": "场景类别",
    "items": [
      {
        "id": "TL",
        "name": "隧道线路场景 (TL)",
        "type": "封闭空间",
        "desc": "封闭隧道环境中的长距离传播。包括直线隧道 (TL_S)、曲线隧道 (TL_C) 和含车隧道 (TL_V)。",
        "data": "仿真 + 实测"
      },
      {
        "id": "SH",
        "name": "车站枢纽场景 (SH)",
        "type": "半开放空间",
        "desc": "具有复杂散射的半开放车站枢纽场景。包括高架车站 (SH_E)、地面车站 (SH_G) 和车辆停靠 (SH_V)。",
        "data": "仅仿真"
      },
      {
        "id": "HE",
        "name": "混合环境场景 (HE)",
        "type": "开放空间",
        "desc": "城市轨道交通混合开放空间场景。包括城市平行段 (HE_U) 等复杂地形。",
        "data": "仅仿真"
      },
      {
        "id": "CE",
        "name": "受控实验环境 (CE)",
        "type": "受控环境",
        "desc": "用于基准测试的受控实验环境。包括模拟隧道场景的走廊 (CE_C) 和高架曲线高架桥 (CE_E)。",
        "data": "仅实测"
      }
    ]
  },
  "structure": {
    "title": "数据集结构",
    "description": "每个场景按照一致的层级组织，包含物理环境感知数据和不同域（Real/Sim）的无线信道测量：",
    "tree": [
      "URT-SimReal/",
      "├── controlled_experimental_environments/  (受控实验环境)",
      "│   └── CE_{env}/",
      "│       └── {domain}/",
      "│           ├── physical_environmental_sensing/",
      "│           │   ├── point_cloud/",
      "│           │   ├── rgb_images/",
      "│           │   └── environment_semantics.json",
      "│           └── wireless_channel_propagation/",
      "│               └── {band}/",
      "│                   ├── pos_idx_{N}.h5",
      "│                   └── channel_labels.json",
      "├── hybrid_environment_scenarios/  (混合环境场景)",
      "│   └── HE_{env}/ ...",
      "├── station_hub_scenarios/  (车站枢纽场景)",
      "│   └── SH_{env}/ ...",
      "└── tunnel_line_scenarios/  (隧道线路场景)",
      "    └── TL_{env}/ ..."
    ]
  },
  "channelData": {
    "title": "信道数据格式",
    "description": "信道数据存储在 <code>.h5</code> 文件中。每个文件包含属性（rx_position、pos_idx）、发射机组、极化组和链路级统计参数。",
    "attributes": {
      "title": "链路级统计参数",
      "rows": [
        ["rx_power_dbm", "接收功率 (dBm)"],
        ["path_loss", "路径损耗 (dB)"],
        ["rms_delay_spread_ns", "RMS时延扩展 (ns)"],
        ["mean_excess_delay_ns", "平均超量时延 (ns)"],
        ["max_excess_delay_ns", "最大超量时延 (ns)"],
        ["k_factor_db", "Rician K因子 (dB)"],
        ["coherence_bw_mhz", "相干带宽 (MHz)"]
      ]
    },
    "datasets": {
      "title": "可用数据集",
      "rows": [
        ["raw_iq / raw_paths", "复数/表格", "原始I/Q基带信号或详细的射线轨迹与交互历史"],
        ["complex_cir", "复数数组", "复数基带信道冲激响应 (CIR)"],
        ["pdp_db_normalized", "浮点数组", "归一化功率时延谱 (PDP)，单位为dB"],
        ["multipath_params", "字符串", "包含多径分量参数的序列化JSON字符串"]
      ]
    }
  },
  "download": {
    "title": "下载",
    "description": "URT-SimReal数据集在Zenodo上公开发布。访问内容包括所有场景的点云、RGB图像、语义标签和信道测量数据。",
    "button": "从 Zenodo 下载",
    "url": "https://doi.org/10.5281/zenodo.19920829",
    "size": "数据集总大小：约 XXX GB（待更新）",
    "license": "许可证：CC BY 4.0"
  },
  "citation": {
    "title": "引用",
    "description": "如果您在研究中使用了URT-SimReal，请引用我们的论文：",
    "bibtex": "@misc{jiang2026urtsimreal,\n  title        = {URT-SimReal: A Hybrid Real and Simulated Multi-modal Dataset\n                   of 3D Spatial Environments and Multi-band Wireless Channels\n                   for Urban Rail Transit},\n  author       = {Jiang, Ye},\n  year         = {2026},\n  publisher    = {Zenodo},\n  doi          = {10.5281/zenodo.19920829},\n  url          = {https://doi.org/10.5281/zenodo.19920829},\n  note         = {Version 1.0.0}\n}",
    "apa": "Jiang, Y. (2026). URT-SimReal: A Hybrid Real and Simulated Multi-modal Dataset of 3D Spatial Environments and Multi-band Wireless Channels for Urban Rail Transit (Version 1.0.0) [Dataset]. Zenodo. https://doi.org/10.5281/zenodo.19920829"
  },
  "footer": {
    "maintainer": "维护者：YeJiang",
    "copyright": "© 2026 URT-SimReal. All rights reserved."
  }
};
