import React from 'react'
import { Routes, Route, useLocation, MemoryRouter } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import MyOrders from './pages/MyOrders'
import Auth from './modals/Auth'
import ProductCategory from './pages/ProductCategory'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import AddAddress from './components/AddAddress'
import SellerLayout from './pages/seller/Sellerlayout'
import SellerLogin from './components/seller/SellerLogin'
import AddProdduct from './pages/seller/AddProduct'
import ProductList from './pages/seller/ProductList'
import Orders from './pages/seller/Orders'

const App = () => {
  const {isSeller,showUserLogin} = useContext(AppContext)
  const isSellerPath=useLocation().pathname.includes('seller')
  return (
    <div className='min-h-screen outfit-text'>
     {isSellerPath ?null:<Navbar/>}
     {showUserLogin ?<Auth/>:null}
      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/product/:category/:id' element={<ProductDetails/>}/>
          <Route path='/products/:category' element={<ProductCategory/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/my-orders' element={<MyOrders/>}/>
          <Route path='/add/address' element={<AddAddress/>}/>
          <Route path='/seller' element={isSeller?<SellerLayout/>:<SellerLogin/>}/>
          <Route index path='/add/product' element={isSeller?<AddProdduct/>:null}/>
          <Route path='/prdoduct-list' element={isSeller?<ProductList/>:null}/>
          <Route path='/orders' element={isSeller?<Orders/>:null}/>
        </Routes>
      </div>
      {!isSellerPath && <Footer/>}
      <Toaster/>
    </div>
  )
}

export default App
