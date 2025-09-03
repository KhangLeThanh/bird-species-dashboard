# Bird Acoustic Capture Dashboard

An interactive dashboard built with **React, Vite, Material UI, and Chart.js** to visualize bird species captured by AI acoustic monitoring.  
The app helps both technical and non-technical audiences explore species distributions and conservation statuses.

---

## **Features**

- **Two datasets (L1 & L3)** displayed in separate tabs:
  - **L1** – All species captured
  - **L3** – Species captured by 2+ models (unique species)
- **Summary cards** showing total species, endangered, and critically endangered counts
- **Interactive pie chart**:
  - Color-coded by IUCN status
  - Clickable segments open a dialog listing species in that category
- **Bar chart** with:
  - Color-coded categories matching threat levels
  - Counts displayed as data labels
- **Sortable table**:
  - Columns for count and percentage
  - Highlighted rows for endangered and critically endangered categories
- **Responsive design**:
  - Centers content on large screens
  - Full-width layout on smaller screens for mobile devices

---

## **Data**

- `L1` → All species aggregated counts per IUCN status
- `L1Species.json` → List of all species with `name` and `status`
- `L3` → Species captured by 2+ AI models (aggregated counts)
- `L3Species.json` → List of L3 species

## Tech Stack

- **Vite** – fast React bundler
- **React 18** – frontend framework
- **Material UI (MUI)** – UI components and theming
- **Chart.js + react-chartjs-2** – data visualizations
- **Vitest + React Testing Library** – unit testing

---

## ▶️ Getting Started / How to Run

### 1. Clone the repository

```bash
git clone https://github.com/KhangLeThanh/bird-species-dashboard
cd bird-species-dashboard

```

### 2 Clone the repository

```

npm install

```

### Running the application

```

npm run serve

```

### Run your unit tests

```

npm run test

```
