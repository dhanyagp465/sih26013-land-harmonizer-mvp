import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <Link to="/" className="text-lg font-bold">Land Harmonizer — SIH26013</Link>
          <div className="text-sm text-gray-500">Disaster Management | Ministry: Rural Development</div>
        </div>
        <nav className="space-x-4">
          <Link to="/map" className="text-sm text-gray-600">Map</Link>
          <Link to="/datasources" className="text-sm text-gray-600">Data Sources</Link>
          <Link to="/conflicts" className="text-sm text-gray-600">Conflicts</Link>
          <Link to="/apis" className="text-sm text-gray-600">APIs</Link>
          <Link to="/about" className="text-sm text-gray-600">About</Link>
        </nav>
      </div>
    </header>
  )
}
