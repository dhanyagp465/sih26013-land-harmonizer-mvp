import React from 'react'

export default function APIs(){
  return (
    <div className="bg-white rounded shadow p-6 space-y-4">
      <h2 className="text-lg font-semibold">APIs (Mock)</h2>
      <div>
        <div className="font-medium">GET /api/parcels/before</div>
        <div className="text-sm text-gray-600 mt-1">Returns multi-source parcel features (for Before view)</div>
      </div>
      <div>
        <div className="font-medium">GET /api/parcels/after</div>
        <div className="text-sm text-gray-600 mt-1">Returns unified parcel features (After harmonization)</div>
      </div>
      <div>
        <div className="font-medium">GET /api/conflicts</div>
        <div className="text-sm text-gray-600 mt-1">Returns precomputed conflicts list</div>
      </div>
      <div>
        <div className="font-medium">GET /api/parcels/{`{id}`}</div>
        <div className="text-sm text-gray-600 mt-1">Returns unified parcel with audit log</div>
      </div>
    </div>
  )
}
