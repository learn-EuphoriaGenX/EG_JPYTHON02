import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import OrderSummery from './components/OrderSummery'
import Login from './components/Login'
import Products from './components/Products'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux'
import { setUser } from './components/store/slices/authSlice'
function App() {

  let [carts, setCarts] = useState([])

  let dispatch = useDispatch()



  useEffect(() => {
    let userData = localStorage.getItem("user")
    if (userData) {
      dispatch(setUser(JSON.parse(userData)))
    }
    let cartData = localStorage.getItem("carts")
    if (cartData) {
      setCarts(JSON.parse(cartData))
    }
  }, [])
  

  return (
    <>
      <Navbar carts={carts} setCarts={setCarts} />
      <div className='pt-16'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart setCarts={setCarts} carts={carts} />} />
          <Route path='/order-sum' element={<OrderSummery />} />
          <Route path='/products' element={<Products setCarts={setCarts} carts={carts} />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>

    </>
  )
}

export default App