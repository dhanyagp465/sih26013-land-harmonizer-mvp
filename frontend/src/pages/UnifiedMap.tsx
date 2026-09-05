import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function UnifiedMap(){
  const [mode, setMode] = useState<'before'|'after'>('before')
  const [geo, setGeo] = useState<any|null>(null)

  useEffect(()=>{
    fetch(`/api/parcels/${mode}`)
      .then(r=>r.json())
      .then(data=>setGeo(data))
  },[mode])

  return (
    <div className="bg-white rounded shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Unified Land Map</h2>
        <div className="space-x-2">
          <button onClick={()=>setMode('before')} className={`px-3 py-1 rounded ${mode==='before'?'bg-blue-600 text-white':'bg-gray-100'}`}>Before</button>
          <button onClick={()=>setMode('after')} className={`px-3 py-1 rounded ${mode==='after'?'bg-blue-600 text-white':'bg-gray-100'}`}>After</button>
        </div>
      </div>
      <div className="h-[60vh]">
        <MapContainer center={[12.9716,77.5946]} zoom={16} style={{height:'100%',width:'100%'}}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {geo && geo.features && geo.features.map((f:any, idx:number)=>{
            const conflict = f.properties.conflict
            const color = conflict ? '#f97316' : '#10b981'
            return (
              <GeoJSON key={idx} data={f} style={{color}} onEachFeature={(feature, layer)=>{
                const p = feature.properties
                let html = `<div class=\"p-2\"><b>${p.parcel_id}</b><br/>Owner: ${p.owner_name}<br/>Area: ${p.area_sqm} sqm<br/>Sources: ${p.sources?.join(', ') || p.source}</div>`
                if(p.conflict) html += `<div class=\"text-sm text-red-600\">Conflict detected</div>`
                layer.bindPopup(html)
              }} />
            )
          })}
        </MapContainer>
      </div>
    </div>
  )
}
