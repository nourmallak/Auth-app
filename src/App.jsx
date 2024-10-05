import React from 'react'
import Navbar from './component/Navbar'
import Login from './component/Login'
import Register from './component/Register'
import Home from './component/Home'
import { Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}