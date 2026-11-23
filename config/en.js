// English config — edit this file to change English content on the page
window.__I18N_EN = {
  "nav": {
    "title": "URT-SimReal",
    "overview": "Overview",
    "features": "Features",
    "scenarios": "Scenarios",
    "structure": "Structure",
    "download": "Download",
    "citation": "Citation"
  },
  "hero": {
    "title": "URT-SimReal",
    "subtitle": "A Hybrid Real and Simulated Multi-modal Dataset of 3D Spatial Environments and Multi-band Wireless Channels for Urban Rail Transit"
  },
  "overview": {
    "title": "Overview",
    "paragraphs": [
      "<strong>URT-SimReal</strong> combines field measurements and deterministic ray-tracing simulations for urban rail transit (URT) research. The release contains <strong>11 Real or Sim instances across nine scenario identifiers</strong>, spanning tunnels, station hubs, elevated structures, and urban rail environments. Real and Sim instances with the same identifier represent the same scenario category and retain their own geometry, coordinate system, and sampling layout.",
      "The core URT scenarios cover <strong>1.8, 3.5, 5.6, 28, 39.5, and 60 GHz</strong>. Controlled experiments extend coverage to <strong>1.5 and 3 GHz</strong>.",
      "The release contains <strong>209,376 channel state information (CSI) records</strong> and provides path loss, RMS delay spread, power delay profiles, and multipath component parameters, together with 3D point clouds, RGB images, and environmental semantic labels."
    ]
  },
  "features": {
    "title": "Key Features",
    "items": [
      {
        "icon": "📡",
        "title": "Multi- band Coverage",
        "desc": "Sub-6 GHz (1.8, 3.5, 5.6 GHz) and mmWave bands (28, 39.5, 60 GHz) for comprehensive channel characterization across URT-relevant frequencies."
      },
      {
        "icon": "🏙️",
        "title": "11 Real or Sim Instances",
        "desc": "Enclosed tunnels, elevated stations, viaducts, urban parallel sections, and controlled experimental settings for comprehensive evaluation."
      },
      {
        "icon": "🔄",
        "title": "Real and Sim Data",
        "desc": "Field measurements and ray-tracing simulations are organized by scenario category. Each instance retains its own geometry, coordinate system, and sampling layout."
      },
      {
        "icon": "📊",
        "title": "209,376 CSI Records",
        "desc": "Large-scale channel data across multiple bands and polarizations, covering Path Loss, Delay Spread, PDPs, and MPCs."
      },
      {
        "icon": "🎯",
        "title": "Multi-Modal Sensing",
        "desc": "Synchronized 3D point clouds, RGB images, semantic labels, and wireless channel measurements for environment-aware research."
      },
      {
        "icon": "📐",
        "title": "Geometry-Specific EM",
        "desc": "Precise electromagnetic properties assigned per infrastructure component following international standards."
      }
    ]
  },
  "scenarios": {
    "title": "Scenario Categories",
    "items": [
      {
        "id": "TL",
        "name": "Tunnel Line Scenarios (TL)",
        "type": "Enclosed Space",
        "desc": "Long-distance propagation in enclosed tunnel environments. Includes Straight Tunnel (TL_S), Curved Tunnel (TL_C), and Vehicle-filled Tunnel (TL_V).",
        "data": "Sim & Real"
      },
      {
        "id": "SH",
        "name": "Station Hub Scenarios (SH)",
        "type": "Half-Open Space",
        "desc": "Semi-open station hub scenarios with complex scattering. Includes Elevated Station hub (SH_E), Ground station (SH_G), and Vehicle-docked (SH_V).",
        "data": "Simulation Only"
      },
      {
        "id": "HE",
        "name": "Hybrid Environment Scenarios (HE)",
        "type": "Open Space",
        "desc": "Hybrid and open space urban rail transit scenarios. Includes Urban Parallel (HE_U) sections with complex terrain.",
        "data": "Simulation Only"
      },
      {
        "id": "CE",
        "name": "Controlled Experimental Environments (CE)",
        "type": "Controlled Environment",
        "desc": "Controlled experimental settings for benchmarking. Includes Corridor (CE_C) simulating tunnel scenarios and Elevated Curved Viaduct (CE_E).",
        "data": "Real Only"
      }
    ]
  },
  "structure": {
    "title": "Dataset Structure",
    "description": "Each scenario follows a consistent organization with physical environmental sensing data and wireless channel measurements per domain (Real/Sim):",
    "tree": [
      "URT-SimReal/",
      "├── controlled_experimental_environments/",
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
      "├── hybrid_environment_scenarios/",
      "│   └── HE_{env}/ ...",
      "├── station_hub_scenarios/",
      "│   └── SH_{env}/ ...",
      "└── tunnel_line_scenarios/",
      "    └── TL_{env}/ ..."
    ]
  },
  "channelData": {
    "title": "Channel Data Format",
    "description": "Channel data resides in <code>.h5</code> files. Each file contains attributes (rx_position, pos_idx), transmitter groups, polarization groups, and link-level statistical parameters.",
    "attributes": {
      "title": "Link-Level Statistical Parameters",
      "rows": [
        ["rx_power_dbm", "Received power (dBm)"],
        ["path_loss", "Path loss (dB)"],
        ["rms_delay_spread_ns", "RMS delay spread (ns)"],
        ["mean_excess_delay_ns", "Mean excess delay (ns)"],
        ["max_excess_delay_ns", "Maximum excess delay (ns)"],
        ["k_factor_db", "Rician K-factor (dB)"],
        ["coherence_bw_mhz", "Coherence bandwidth (MHz)"]
      ]
    },
    "datasets": {
      "title": "Available Datasets",
      "rows": [
        ["raw_iq / raw_paths", "Complex/Table", "Raw I/Q baseband signal or detailed ray trajectories and interaction history"],
        ["complex_cir", "Complex array", "Complex baseband Channel Impulse Response (CIR)"],
        ["pdp_db_normalized", "Float array", "Normalized Power Delay Profile (PDP) in dB"],
        ["multipath_params", "String", "Serialized JSON string containing multipath component parameters"]
      ]
    }
  },
  "download": {
    "title": "Download",
    "description": "The URT-SimReal dataset is publicly available on Zenodo. Access includes point clouds, RGB images, semantic labels, and channel measurements across all scenarios.",
    "button": "Download from Zenodo",
    "url": "https://doi.org/10.5281/zenodo.23464109",
    "size": "Total download size: approximately 30.5 GB",
    "license": "License: CC BY 4.0"
  },
  "citation": {
    "title": "Cite the Dataset Paper",
    "description": "If you use URT-SimReal, please cite the following dataset paper.",
    "bibtex": "@article{jiang2026urtsimreal,\n  title   = {A Hybrid Real and Simulated Multi-modal Dataset of 3D Spatial Environments and Multi-band Wireless Channels for Urban Rail Transit},\n  author  = {Jiang, Ye and Wang, Rui and Wang, Xiaoyong and Chen, Yunkuo and Wu, YaTing and Feng, Yichen and Zheng, Guoxin},\n  journal = {Scientific Data},\n  note    = {In press}\n}",
    "apa": "Jiang, Y., Wang, R., Wang, X., Chen, Y., Wu, Y., Feng, Y., & Zheng, G. (in press). A hybrid real and simulated multi-modal dataset of 3D spatial environments and multi-band wireless channels for urban rail transit. Scientific Data."
  },
  "footer": {
    "maintainer": "Maintained by YeJiang",
    "copyright": "© 2026 URT-SimReal. All rights reserved."
  }
};
