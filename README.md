# SIH26013 — Automated Integration & Harmonization of Multi-source Geospatial Data (MVP demo)

This repository contains a 36-hour MVP demo for Smart India Hackathon 2026.

Overview
- Frontend: React + TypeScript + Vite + Tailwind CSS
- Map: Leaflet (react-leaflet)
- Mock backend: Express server serving static JSON mock APIs
- Mock data: /mock-server/data (GeoJSON / JSON)

How to run locally
1. Install dependencies at the root: npm install
2. Start dev servers: npm run dev
   - This runs both mock server and frontend concurrently
3. Open http://localhost:5173 in your browser (Vite default)

Project structure
- frontend/: React app
- mock-server/: Express mock API serving parcel/conflict data

Where mock data lives
- mock-server/data/parcels_before.geojson — multi-source parcels (Revenue, Survey, Municipal)
- mock-server/data/parcels_after.geojson — unified/harmonized parcels (some flagged as conflicts)
- mock-server/data/conflicts.json — precomputed conflict list
- mock-server/data/audit_logs.json — example audit logs

Conflation logic (simplified, for demo)
- The mock data demonstrates conflation rules: parcels are matched by a common parcel_id when present, otherwise spatial proximity (centroid distance < 5m) is used.
- Conflicts are flagged when attributes like owner_name or area_sqm differ between sources.

Notes for judges/demo
- The UI includes a "Before" and "After" toggle to show fragmented source layers vs unified layer with conflict highlighting.
- Data ingestion & mapping page shows detected schema differences and a read-only mapping rules table. "Run Ingestion" shows a demo progress and updates counts.
- Conflicts Dashboard allows filtering and opening a detail panel with side-by-side comparisons.


