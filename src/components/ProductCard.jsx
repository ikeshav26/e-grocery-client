import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const ProductCard = ({ product }) => {
    const { navigate,addToCart,cartItems,removeFromCart } = useContext(AppContext);



    return (
        <div
            onClick={() => {
                navigate(`/product/${product.category.toLowerCase()}/${product.id}`);
            }}
            className="border border-gray-300 rounded-md px-3 py-2 bg-white min-w-[12rem] max-w-[14rem] w-full shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
        >
            <div className="group flex items-center justify-center">
                <img
                    className="group-hover:scale-105 transition-transform duration-300 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
                    src={product.image[0]}
                    alt={product.name}
                />
            </div>

            <div className="mt-2 space-y-1 text-gray-600 text-sm sm:text-base">
                <p className="capitalize">{product.category}</p>
                <p className="text-gray-800 font-medium text-base sm:text-lg truncate">{product.name}</p>

                <div className="flex items-center gap-1">
                    {Array(5).fill("").map((_, i) => (
                        <img
                            key={i}
                            src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                            alt="star"
                            className="w-3.5 sm:w-4"
                        />
                    ))}
                    <p className="text-xs sm:text-sm">(4)</p>
                </div>

                <div className="flex items-end justify-between mt-3">
                    <p className="text-indigo-500 font-semibold text-base sm:text-lg">
                        ${product.offerPrice}
                        <span className="text-gray-400 line-through ml-1 text-xs sm:text-sm">
                            ${product.price}
                        </span>
                    </p>

                    <div
                        className="text-indigo-500"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {!cartItems[product._id] ? (
                            <button
                                className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 w-16 sm:w-20 h-8 sm:h-9 rounded text-indigo-600 font-medium text-xs sm:text-sm"
                                onClick={() => addToCart(product._id)}
                            >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 bg-indigo-200 w-16 sm:w-20 h-8 sm:h-9 rounded select-none text-sm sm:text-base">
                                <button
                                    onClick={() =>removeFromCart(product._id)}
                                    className="px-2 h-full text-lg"
                                >
                                    -
                                </button>
                                <span className="w-5 text-center">{cartItems[product._id]}</span>
                                <button
                                    onClick={() => addToCart(product._id)}
                                    className="px-2 h-full text-lg"
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
