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
    "paperStatus": "数据论文已于 2026 年 11 月 20 日被 Scientific Data 接收。"
  },
  "overview": {
    "title": "概述",
    "paragraphs": [
      "<strong>URT-SimReal</strong> 面向城市轨道交通研究，包含现场实测数据和确定性射线追踪仿真数据。数据集按 <strong>9 个场景标识</strong>发布 <strong>11 个实测或仿真实例</strong>，覆盖隧道、车站枢纽、高架结构和城市轨道环境。同一场景标识下的实测与仿真实例属于同一场景类别，各自保留自身的几何结构、坐标系和采样布局。",
      "核心轨道交通场景覆盖 <strong>1.8、3.5、5.6、28、39.5 和 60 GHz</strong>，受控实验另包含 <strong>1.5 和 3 GHz</strong>。",
      "数据集包含 <strong>209,376 条信道状态信息（CSI）记录</strong>，提供路径损耗、RMS 时延扩展、功率时延谱和多径分量参数，并包含三维点云、RGB 图像和环境语义标签。"
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
        "title": "11 个实测或仿真实例",
        "desc": "涵盖封闭隧道、高架车站、高架桥、城市平行段及受控实验环境，支持全面评估。"
      },
      {
        "icon": "🔄",
        "title": "实测与仿真数据",
        "desc": "实测与射线追踪仿真按场景类别组织，各实例保留自身的几何结构、坐标系和采样布局。"
      },
      {
        "icon": "📊",
        "title": "209,376 条 CSI 记录",
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
    "url": "https://doi.org/10.5281/zenodo.23464109",
    "size": "下载总大小：约 30.5 GB",
    "license": "许可证：CC BY 4.0"
  },
  "citation": {
    "title": "数据集引用",
    "description": "如在研究中使用 URT-SimReal，请引用下列 Zenodo 数据集记录。",
    "bibtex": "@misc{jiang2026urtsimreal,\n  title        = {URT-SimReal: A Hybrid Real and Simulated Multi-modal Dataset\n                   of 3D Spatial Environments and Multi-band Wireless Channels\n                   for Urban Rail Transit},\n  author       = {Jiang, Ye},\n  year         = {2026},\n  publisher    = {Zenodo},\n  doi          = {10.5281/zenodo.23464109},\n  url          = {https://doi.org/10.5281/zenodo.23464109},\n  note         = {V2.0}\n}",
    "apa": "Jiang, Y. (2026). URT-SimReal: A Hybrid Real and Simulated Multi-modal Dataset of 3D Spatial Environments and Multi-band Wireless Channels for Urban Rail Transit (V2.0) [Dataset]. Zenodo. https://doi.org/10.5281/zenodo.23464109"
  },
  "footer": {
    "maintainer": "维护者：YeJiang",
    "copyright": "© 2026 URT-SimReal. All rights reserved."
  }
};
