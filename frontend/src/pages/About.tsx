import React from 'react'

export default function About(){
  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-lg font-semibold">About</h2>
      <ul className="mt-3 list-disc ml-5 space-y-2 text-sm">
        <li>Problem: Fragmented parcel records across revenue, survey, municipal datasets leading to slow disaster response and legal ambiguity.</li>
        <li>Capabilities: Multi-format ingestion, automatic schema mapping, rule-based spatial conflation, conflict detection & review, unified queryable layer.</li>
        <li>Note: This is an MVP prototype built for SIH 2026 (36‑hour demo).</li>
      </ul>
      <div className="mt-4">
        <h3 className="font-medium">Team</h3>
        <p className="text-sm">Team Name — Institute — Member A, Member B</p>
      </div>
    </div>
  )
}
