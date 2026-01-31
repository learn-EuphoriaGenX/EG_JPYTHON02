import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import OrderSummery from './components/OrderSummery'
import Login from './components/Login'
import Products from './components/Products'
import Navbar from './components/Navbar'
function App() {

  let [user, setUser] = useState({
    email: "",
    password: "",
    isLoggedIn: false,
  })

  let [carts, setCarts] = useState([])

  return (
    <>
      <Navbar user={user} setUser={setUser} carts={carts} setCarts={setCarts} />
      <div className='pt-16'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart setCarts={setCarts} carts={carts} />} />
          <Route path='/order-sum' element={<OrderSummery />} />
          <Route path='/products' element={<Products setCarts={setCarts} carts={carts} />} />
          <Route path='/login' element={<Login user={user} setUser={setUser} />} />
        </Routes>
      </div>

    </>
  )
}

export default App