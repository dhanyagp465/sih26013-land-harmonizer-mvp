import React from 'react'

export default function Home(){
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold">Automated Integration & Harmonization of Multi‑source Geospatial Data</h1>
        <p className="text-sm text-gray-500">SIH26013 — Disaster Management | Ministry: Rural Development</p>
        <p className="mt-4">This demo shows how fragmented urban land/parcel data from multiple agencies can be ingested, harmonized, conflated, and exposed as a unified, queryable land record layer with conflict detection.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded">1. Ingest multi-source data</div>
          <div className="p-4 bg-gray-50 rounded">2. Auto schema detection & mapping</div>
          <div className="p-4 bg-gray-50 rounded">3. Spatial conflation & conflict detection</div>
          <div className="p-4 bg-gray-50 rounded">4. Unified API + UI for review</div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">Quick demo</h2>
          <p className="mt-2 text-sm">Open the Unified Land Map to toggle Before / After harmonization and inspect conflicts.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">Architecture</h2>
          <p className="mt-2 text-sm">Ingestion → Harmonization → Conflation → API / UI</p>
        </div>
      </section>

    </div>
  )
}
