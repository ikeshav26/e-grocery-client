import React, { useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { AppContext } from './context/AppContext';
import MyOrders from './pages/MyOrders';
import Auth from './modals/Auth';
import ProductCategory from './pages/ProductCategory';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import AddAddress from './components/AddAddress';
import SellerLayout from './pages/seller/Sellerlayout';
import SellerLogin from './components/seller/SellerLogin';
import AddProduct from './pages/seller/AddProduct';
import ProductList from './pages/seller/ProductList';
import Orders from './pages/seller/Orders';

const App = () => {
  const { isSeller, showUserLogin } = useContext(AppContext);
  const isSellerPath = useLocation().pathname.includes('/seller');

  return (
    <div className='min-h-screen outfit-text'>
      {!isSellerPath && <Navbar />}
      {showUserLogin && <Auth />}
      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <Routes>
          {/* Normal User Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:category/:id' element={<ProductDetails />} />
          <Route path='/products/:category' element={<ProductCategory />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/my-orders' element={<MyOrders />} />
          <Route path='/add/address' element={<AddAddress />} />

          
          <Route path='/seller-login' element={<SellerLogin />} />

          
          {isSeller && (
            <Route path='/seller' element={<SellerLayout />}>
              <Route index element={<AddProduct />} />
              <Route path='product-list' element={<ProductList />} />
              <Route path='orders' element={<Orders />} />
            </Route>
          )}
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
      <Toaster />
    </div>
  );
};

export default App;
