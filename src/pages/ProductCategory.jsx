import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductCategory = () => {
  const { product, navigate } = useContext(AppContext);
  const { category } = useParams();

  const categoryProducts = product.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  console.log("Category Products:", categoryProducts);

  return (
    <div className='py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 capitalize'>
        {category} Products
      </h1>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryProducts.map((item) => (
            <div key={item._id} className="flex justify-center">
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-sm md:text-base">
          No products found in this category.
        </p>
      )}
    </div>
  );
};

export default ProductCategory;
