import React from 'react'
import { Route,Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Order from './pages/Order'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App