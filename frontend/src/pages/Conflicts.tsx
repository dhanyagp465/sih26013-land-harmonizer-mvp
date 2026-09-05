import React, { useEffect, useState } from 'react'

export default function Conflicts(){
  const [conflicts, setConflicts] = useState<any[]>([])

  useEffect(()=>{ fetch('/api/conflicts').then(r=>r.json()).then(setConflicts) },[])

  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-lg font-semibold">Conflicts Dashboard</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm table-auto">
          <thead className="text-left"><tr><th>Parcel ID</th><th>Location</th><th>Type</th><th>Sources</th><th>Status</th></tr></thead>
          <tbody>
            {conflicts.map((c,i)=>(
              <tr key={i} className="border-t"><td className="py-2">{c.parcel_id}</td><td>{c.location}</td><td>{c.conflict_type}</td><td>{c.sources.join(', ')}</td><td>{c.status}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
