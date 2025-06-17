import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams, Link } from "react-router-dom";
import { assets } from "../assets/assets";

const ProductDetails = () => {
  const { product,addToCart,navigate } = useContext(AppContext);
  const { id } = useParams();
  const [thumbnail, setThumbnail] = useState(null);

  const productt = product.find((item) => item._id === id);

  useEffect(() => {
    if (productt && productt.image && productt.image.length > 0) {
      setThumbnail(productt.image[0]);
    }
  }, [productt]);

  // FIX: If product not found yet
  if (!productt)
    return <p className="text-center mt-10">Loading Product Details...</p>;

  return (
    <div className="max-w-6xl w-full px-6 py-10 md:py-16">
      <p>
        <Link to="/">Home</Link> /<Link to="/products"> Products</Link> /
        <Link to={`/products/${productt.category.toLowerCase()}`}>
          {" "}
          {productt.category}
        </Link>{" "}
        /
        <Link
          to={`/product/${productt.category.toLowerCase()}/${productt._id}`}
          className="text-indigo-500"
        >
          {" "}
          {productt.name}
        </Link>
      </p>

      <div className="flex flex-col md:flex-row gap-16 mt-4">
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            {productt.image.map((image, index) => (
              <div
                key={index}
                onClick={() => setThumbnail(image)}
                className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
            <img src={thumbnail} alt="Selected product" />
          </div>
        </div>

        <div className="text-sm w-full md:w-1/2">
          <h1 className="text-3xl font-medium">{productt.name}</h1>

          <div className="flex items-center gap-0.5 mt-1">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  className="w-3.5 md:w-4"
                  src={
                    i < 4
                      ? assets.star_icon
                      : assets.star_dull_icon
                  }
                  alt={`star-${i}`}
                />
              ))}
            <p className="text-base ml-2">(4)</p>
          </div>

          <div className="mt-6">
            <p className="text-gray-500/70 line-through">
              MRP: ${productt.price}
            </p>
            <p className="text-2xl font-medium">MRP: ${productt.offerPrice}</p>
            <span className="text-gray-500/70">(inclusive of all taxes)</span>
          </div>

          <p className="text-base font-medium mt-6">About Product</p>
          <ul className="list-disc ml-4 text-gray-500/70">
            {productt.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          <div className="flex items-center mt-10 gap-4 text-base">
            <button onClick={()=>addToCart(productt._id)} className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
              Add to Cart
            </button>
            <button onClick={()=>{
              addToCart(productt._id);
               navigate("/cart");
            }} className="w-full py-3.5 cursor-pointer font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
