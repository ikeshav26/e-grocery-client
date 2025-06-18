import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const {product,searchQuery}=useContext(AppContext)
  // const [filteredProducts, setfilteredProducts] = useState([])
  // useEffect(() => {
  
  // }, [products,searchQuery])
  
  return (
    <div className='mt-10'>
      <h1 className='text-3xl lg:text-4xl font-medium'>All Products</h1>
      <div className='my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
      {
        product.map((item,index)=>(
          <div key={index}><ProductCard product={item}/></div>
        ))
      }
      </div>
    </div>
  )
}

export default Products
