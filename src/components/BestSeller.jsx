import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ProductCard from './ProductCard';

const BestSeller = () => {
    const { navigate, product } = useContext(AppContext);

    return (
        <div className='mt-16 px-4 sm:px-6 md:px-8 lg:px-10'>
            <p className='text-2xl md:text-3xl font-semibold text-gray-800'>Best Seller</p>

            <div className='my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {product
                    .filter(item => item.inStock)
                    .slice(0, 5)
                    .map((item, index) => (
                        <ProductCard key={index} product={item} />
                    ))
                }
            </div>
        </div>
    );
};

export default BestSeller;
