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
    "subtitle": "A Hybrid Real and Simulated Multi-modal Dataset of 3D Spatial Environments and Multi-band Wireless Channels for Urban Rail Transit",
    "doi": "https://doi.org/10.5281/zenodo.19920829",
    "doi_label": "DOI",
    "version": "v1.0.0"
  },
  "overview": {
    "title": "Overview",
    "paragraphs": [
      "<strong>URT-SimReal</strong> is a high-fidelity, multi-modal, and measurement-calibrated hybrid dataset specifically tailored for Urban Rail Transit (URT) scenarios, featuring a seamless fusion of <strong>Simulated and Real-World (sim-to-real)</strong> channel data. The dataset encompasses 11 typical URT environments, including <strong>fully enclosed tunnels, station platforms, viaducts, and complex urban track sections</strong>, deeply integrating invaluable empirical data from operational lines with scenario-specific ray-tracing simulations.",
      "The spectral coverage spans from <strong>Sub-6 GHz (1.8, 3.5, and 5.6 GHz)</strong> to dedicated <strong>millimeter-wave (mmWave) bands (28, 39.5, and 60 GHz)</strong>. Adhering strictly to the ITU-R P.2040-3 recommendations and 3GPP TR 38.901 standards (0.5–100 GHz channel models), we have assigned precise electromagnetic (EM) properties to key infrastructure components, such as concrete tunnel walls, train bodies, rails, platform screen doors (PSDs), and trackside vegetation.",
      "The dataset contains <strong>316,026 Channel State Information (CSI) records</strong> across various frequency bands and polarization configurations. It provides not only macroscopic channel parameters, such as <strong>Path Loss (PL)</strong> and <strong>RMS Delay Spread</strong>, but also granular geometric attributes for <strong>Power Delay Profiles (PDP)</strong> and <strong>Multi-path Components (MPCs)</strong>. Furthermore, the inclusion of synchronized <strong>3D Point Clouds</strong>, <strong>RGB images</strong>, and <strong>Environmental Semantic Labels</strong> provides a powerful physical characterization of the environment, significantly enriching the multi-modal attributes of the dataset for advanced environment-aware research."
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
        "title": "11 URT Environments",
        "desc": "Enclosed tunnels, elevated stations, viaducts, urban parallel sections, and controlled experimental settings for comprehensive evaluation."
      },
      {
        "icon": "🔄",
        "title": "Sim-to-Real Fusion",
        "desc": "Seamless integration of field measurements from operational lines with site-specific ray-tracing simulations, calibrated for accuracy."
      },
      {
        "icon": "📊",
        "title": "316,026 CSI Records",
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
    "url": "https://doi.org/10.5281/zenodo.19920829",
    "size": "Total dataset size: ~XXX GB (to be updated)",
    "license": "License: CC BY 4.0"
  },
  "citation": {
    "title": "Citation",
    "description": "If you use URT-SimReal in your research, please cite our paper:",
    "bibtex": "@misc{jiang2026urtsimreal,\n  title        = {URT-SimReal: A Hybrid Real and Simulated Multi-modal Dataset\n                   of 3D Spatial Environments and Multi-band Wireless Channels\n                   for Urban Rail Transit},\n  author       = {Jiang, Ye},\n  year         = {2026},\n  publisher    = {Zenodo},\n  doi          = {10.5281/zenodo.19920829},\n  url          = {https://doi.org/10.5281/zenodo.19920829},\n  note         = {Version 1.0.0}\n}",
    "apa": "Jiang, Y. (2026). URT-SimReal: A Hybrid Real and Simulated Multi-modal Dataset of 3D Spatial Environments and Multi-band Wireless Channels for Urban Rail Transit (Version 1.0.0) [Dataset]. Zenodo. https://doi.org/10.5281/zenodo.19920829"
  },
  "footer": {
    "maintainer": "Maintained by YeJiang",
    "copyright": "© 2026 URT-SimReal. All rights reserved."
  }
};
