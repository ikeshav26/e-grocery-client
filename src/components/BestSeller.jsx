import React, { useContext } from 'react'
import {categories} from '../assets/assets'
import { AppContext } from '../context/AppContext'
import ProductCard from './ProductCard';

const Category = () => {
    const {navigate} = useContext(AppContext);
    const {product} = useContext(AppContext);
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Best Seller</p>
      <div className='my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-center'>
        {
            product.filter((product)=>product.inStock).slice(0,5).map((item,index)=>(
                <ProductCard key={index} product={item}/>
            ))
        }
      </div>
    </div>
  )
}

export default Category
