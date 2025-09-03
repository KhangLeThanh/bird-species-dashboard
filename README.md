# Bird Acoustic Capture Dashboard

An interactive dashboard built with **React, Vite, Material UI, and Chart.js** to visualize bird species captured by AI acoustic monitoring.  
The app helps both technical and non-technical audiences explore species distributions and conservation statuses.

---

## Features

- **Two datasets (L1 & L3)** displayed in separate tabs:
  - **L1** – All species captured
  - **L3** – Species captured by 2+ models (unique species)
- **Summary cards** showing total, endangered, and critically endangered species
- **Pie chart** with clickable segments → opens a dialog to view details
- **Bar chart** with color-coded categories and data labels
- **Sortable table** (count & percentage) with highlighted endangered categories
- **Responsive design** – works on both large screens and mobile

---

## 🛠️ Tech Stack

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

### Install Dependencies

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

```
