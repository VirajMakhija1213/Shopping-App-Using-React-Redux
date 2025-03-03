import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Cart from './pages/Cart'

export default function App() {
  return (
    <div className="bg-slate-800">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}
