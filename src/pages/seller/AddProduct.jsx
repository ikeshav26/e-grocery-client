import React, { useState } from 'react';
import { assets } from '../../assets/assets';

const AddProduct = () => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [offerPrice, setOfferPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      files,
      name,
      price,
      description,
      category,
      offerPrice
    });
    // Here you can add your backend API call
  };

  const categoryOptions = [
    "Fruits & Vegetables",
    "Dairy Products",
    "Bakery Items",
    "Beverages",
    "Snacks",
    "Frozen Foods",
    "Household Essentials"
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Images */}
          <div>
            <p className="text-base font-medium">Product Images</p>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              {Array(4).fill('').map((_, index) => (
                <label key={index} htmlFor={`image${index}`}>
                  <input
                    onChange={(e) => {
                      const updatedFiles = [...files];
                      updatedFiles[index] = e.target.files[0];
                      setFiles(updatedFiles);
                    }}
                    accept="image/*"
                    type="file"
                    id={`image${index}`}
                    hidden
                  />
                  <img
                    className="w-24 h-24 object-cover border border-gray-300 rounded cursor-pointer"
                    src={files[index] ? URL.createObjectURL(files[index]) : assets.upload_area}
                    alt="uploadArea"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Product Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="product-name" className="font-medium">Product Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="product-name"
              type="text"
              placeholder="Type product name here"
              className="outline-none py-2 px-3 rounded border border-gray-300 w-full"
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <label htmlFor="product-description" className="font-medium">Product Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="product-description"
              rows={4}
              placeholder="Type description here"
              className="outline-none py-2 px-3 rounded border border-gray-300 w-full resize-none"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1">
            <label htmlFor="category" className="font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              className="outline-none py-2 px-3 rounded border border-gray-300 w-full"
              required
            >
              <option value="">Select Category</option>
              {categoryOptions.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Price and Offer Price */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="product-price" className="font-medium">Product Price</label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                id="product-price"
                type="number"
                placeholder="0"
                className="outline-none py-2 px-3 rounded border border-gray-300 w-full"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="offer-price" className="font-medium">Offer Price</label>
              <input
                value={offerPrice}
                onChange={(e) => setOfferPrice(e.target.value)}
                id="offer-price"
                type="number"
                placeholder="0"
                className="outline-none py-2 px-3 rounded border border-gray-300 w-full"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition duration-300"
          >
            ADD PRODUCT
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
