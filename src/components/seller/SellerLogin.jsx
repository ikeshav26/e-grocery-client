import React, { useContext, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { AppContext } from "../../context/AppContext";

const SellerLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const {isSeller,setisSeller,navigate}=useContext(AppContext)

    const submitHandler=(e)=>{
        e.preventDefault();
        const formdata={
            email,
            password
        }
        console.log(formdata);
        setEmail("");
        setPassword("");
        setisSeller(true);
    }

    

    useEffect(() => {
      if(isSeller){
        navigate('/seller')
      }
    }, [isSeller])
  return !isSeller && (
    <div>
      <div
        className="fixed top-0 bottom-0 left-0 right-0 bg-gray-900/50 text-gray-600 flex items-center justify-center z-50"
      >
        <form
          onClick={(e) => e.stopPropagation()}
           onSubmit={submitHandler}
          className="relative flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white"
        >
          <div
            className="text-3xl absolute top-4 right-4 cursor-pointer"
            onClick={() =>navigate('/')}
          >
            <MdClose />
          </div>
          <p className="text-2xl font-medium m-auto">
            <span className="text-green-700">Seller</span>
            Login
          </p>
         
          
          <div className="w-full ">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
              type="email"
              required
            />
          </div>
          <div className="w-full ">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
              type="password"
              required
            />
          </div>
          <button
            
            className="bg-green-700 hover:bg-green-500 transition-all text-white w-full py-2 rounded-md cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerLogin;
