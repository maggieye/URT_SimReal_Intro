



**URT-SimReal: A Hybrid Real and Simulated Multi-modal dataset of 3D spatial environments and Multi-band wireless channels for Urban Rail Transit.**

## **1\. Overview**

**URT-SimReal** is a high-fidelity, multi-modal, and measurement-calibrated dataset specifically tailored for Urban Rail Transit (URT) scenarios, featuring a seamless fusion of **synthetic and real-world (sim-to-real)** channel data. The dataset encompasses 11 typical URT environments, including **fully enclosed tunnels, station platforms, viaducts, and complex urban track sections**. It achieves a robust integration of precious field measurement data from operational lines with site-specific deterministic ray-tracing (RT) simulations.

The spectral coverage spans from **Sub-6 GHz (1.8, 3.5, and 5.6 GHz)** to dedicated **millimeter-wave (mmWave) bands (28, 39.5, and 60 GHz)**. Adhering strictly to the ITU-R P.2040-3 recommendations and 3GPP TR 38.901 standards (0.5–100 GHz channel models), we have assigned precise electromagnetic (EM) properties to key infrastructure components, such as concrete tunnel walls, train bodies, rails, platform screen doors (PSDs), and trackside vegetation.

The dataset contains 316,026 Channel State Information (CSI) records across various frequency bands and polarization configurations. It provides not only macroscopic channel parameters, such as **Path Loss (PL)** and **RMS Delay Spread**, but also granular geometric attributes for **Power Delay Profiles (PDP)** and **Multi-path Components (MPCs)**. Furthermore, the inclusion of synchronized **3D point clouds**, **RGB images**, and **semantic labels** provides a powerful physical characterization of the environment, significantly enriching the multi-modal attributes of the dataset for advanced environment-aware research.


## ---

## **2\. Scenario Descriptions**

The dataset includes four representative urban rail topologies:
* **Enclosed Space : Tunnel Line Scenarios(TL)**
* **Half-Open Space: Station Hub Scenarios(SH)**
* **Open Space: Hybrid Environment Scenarios(HE)**
* **Controlled Experimental Environment(CE)**





## **3\. Dataset Structure**

```text
URT-SimReal/
├── controlled_experimental_environments/   
│   └── CE_{env}/
│       └── {domain}/                          
│           ├── physical_environmental_sensing/
│           │   ├── point_cloud/
│           │   ├── rgb_images/
│           │   └── environment_semantics.json 
│           └── wireless_channel_propagation/
│               └── {band}/ 
│                   ├── pos_idx_{N}.h5
│                   └── channel_labels.json               
│
├── hybrid_environment_scenarios/          
│   └── HE_{env}/
│       └── {domain}/                          
│           ├── physical_environmental_sensing/
│           │   ├── point_cloud/
│           │   ├── rgb_images/
│           │   └── environment_semantics.json 
│           └── wireless_channel_propagation/
│               └── {band}/ 
│                   ├── pos_idx_{N}.h5
│                   └── channel_labels.json    
│
├── station_hub_scenarios/                  
│   └── SH_{env}/                           
│       └── {domain}/                          
│           ├── physical_environmental_sensing/
│           │   ├── point_cloud/
│           │   ├── rgb_images/
│           │   └── environment_semantics.json 
│           └── wireless_channel_propagation/
│               └── {band}/ 
│                   ├── pos_idx_{N}.h5
│                   └── channel_labels.json    
│
└── tunnel_line_scenarios/                
    └── TL_{env}/                          
        └── {domain}/                          
            ├── physical_environmental_sensing/
            │   ├── point_cloud/
            │   ├── rgb_images/
            │   └── environment_semantics.json 
            └── wireless_channel_propagation/
                └── {band}/ 
                    ├── pos_idx_{N}.h5
                    └── channel_labels.json    
```
## ---

## **4\. Channel Data H5 File Structure**


Channel data resides in .h5 files. The internal structure follows:



## Overall File Hierarchy

```text
pos_idx_{N}.h5
├── Attributes
│   ├── pos_idx
│   └── rx_position
│
└── tx_groups/ (group)
    ├── Tx{X}/ (group)
    │   ├── Attributes
    │   │   ├── tx_position
    │   │   └── tx_type
    │   │
    │   ├── {polarization}/ (group)
    │   │   ├── Attributes
    │   │   │   ├── rx_power_dbm
    │   │   │   ├── path_loss
    │   │   │   ├── rms_delay_spread_ns
    │   │   │   ├── mean_excess_delay_ns
    │   │   │   ├── max_excess_delay_ns
    │   │   │   ├── k_factor_db
    │   │   │   └── coherence_bw_mhz
    │   │   │
    │   │   ├── raw_iq / raw_paths (dataset) 
    │   │   ├── complex_cir (dataset) 
    │   │   ├── pdp_db_normalized (dataset) 
    │   │   └── multipath_params (dataset) 
    │   │
    │   ├── {polarization}/ (group) 
    │   └── .../
    │
    ├── Tx{X}/ (group)
    ├── ...
    └── Tx{X}/ (group)

```
### Attributes — Link-Level Statistical Parameters

| Attribute | Description |
|-----------|-------------|
| `rx_power_dbm` | Received power (dBm) |
| `path_loss` | Path loss (dB) |
| `rms_delay_spread_ns` | RMS delay spread (ns) |
| `mean_excess_delay_ns` | Mean excess delay (ns) |
| `max_excess_delay_ns` | Maximum excess delay (ns) |
| `k_factor_db` | Rician K-factor (dB) |
| `coherence_bw_mhz` | Coherence bandwidth (MHz) |

### Datasets

| Dataset | Data Type | Description |
|---------|-----------|-------------|
| `raw_iq` / `raw_paths` | Complex/Table | Raw I/Q baseband signal or detailed ray trajectories and interaction history |
| `complex_cir` | Complex array | Complex baseband Channel Impulse Response (CIR) |
| `pdp_db_normalized` | Float array | Normalized Power Delay Profile (PDP) in dB |
| `multipath_params` | String | Serialized JSON string containing multipath component parameters |

### `multipath_params` Fields

| Field | Description |
|-------|-------------|
| `toa_ns` | Time of arrival for each multipath (ns) |
| `delay_ns` | Relative delay of each multipath (ns) |
| `amplitude_db` | Amplitude of each multipath (dB) |
| `phase_rad` | Phase of each multipath (radians) |
| `is_strongest` | Boolean flag indicating whether the path is the strongest |

---



**5\. Citation**

If you use this dataset in your research, please cite our paper:


