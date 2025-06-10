import React from 'react'
import { Navbar, Home } from './AllComponents.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} key='home'/>
      </Routes>
    </BrowserRouter>
  )
}
