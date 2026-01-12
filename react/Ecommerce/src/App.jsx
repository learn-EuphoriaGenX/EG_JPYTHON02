import React from 'react'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'

function App() {
  return (
    <Routes>
      {/* parent route */}
      <Route path='/' element={<Layout />}>
        {/* child routes */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

      </Route>
    </Routes>
  )
}

export default App