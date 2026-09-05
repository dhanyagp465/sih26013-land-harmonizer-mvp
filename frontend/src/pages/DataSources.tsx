import React, { useState } from 'react'

export default function DataSources(){
  const [running, setRunning] = useState(false)
  const [progress, setProgress] = useState(0)

  function runIngestion(){
    setRunning(true)
    setProgress(0)
    const interval = setInterval(()=>{
      setProgress(p=>{
        if(p>=100){ clearInterval(interval); setRunning(false); return 100 }
        return p+10
      })
    },300)
  }

  return (
    <div className="bg-white rounded shadow p-6 space-y-6">
      <h2 className="text-lg font-semibold">Data Sources & Mapping</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <div className="font-medium">Revenue CSV</div>
          <div className="text-sm text-gray-600 mt-2">Fields: khasra_no, owner, area_sqft, village</div>
        </div>
        <div className="p-4 border rounded">
          <div className="font-medium">Survey Shapefile</div>
          <div className="text-sm text-gray-600 mt-2">Fields: plot_no, owner_name, area_sqm, tehsil</div>
        </div>
        <div className="p-4 border rounded">
          <div className="font-medium">Municipal GeoJSON</div>
          <div className="text-sm text-gray-600 mt-2">Fields: id, proprietor, area_m2, ward</div>
        </div>
      </div>

      <div>
        <div className="font-semibold">Detected Mapping Rules</div>
        <table className="w-full text-sm mt-2 table-auto">
          <thead><tr className="text-left"><th>Source Field</th><th>Target Field</th><th>Rule</th></tr></thead>
          <tbody>
            <tr><td>khasra_no</td><td>parcel_id</td><td>string</td></tr>
            <tr><td>plot_no</td><td>parcel_id</td><td>string</td></tr>
            <tr><td>area_sqft / area_m2</td><td>area_sqm</td><td>unit conversion</td></tr>
          </tbody>
        </table>
      </div>

      <div>
        <button onClick={runIngestion} className="px-4 py-2 bg-blue-600 text-white rounded">Run Ingestion</button>
        {running && (
          <div className="mt-4">
            <div className="w-full bg-gray-100 h-3 rounded overflow-hidden">
              <div style={{width:`${progress}%`}} className="h-3 bg-blue-500" />
            </div>
            <div className="text-sm text-gray-600 mt-1">Ingested: {Math.round(progress/10*5)} records from sources</div>
          </div>
        )}
      </div>
    </div>
  )
}
