import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import UnifiedMap from './pages/UnifiedMap'
import DataSources from './pages/DataSources'
import Conflicts from './pages/Conflicts'
import APIs from './pages/APIs'
import About from './pages/About'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="p-4 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/map" element={<UnifiedMap/>} />
          <Route path="/datasources" element={<DataSources/>} />
          <Route path="/conflicts" element={<Conflicts/>} />
          <Route path="/apis" element={<APIs/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </main>
    </div>
  )
}
