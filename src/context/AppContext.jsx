import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";

export const AppContext=React.createContext(null)

const AppContextProvider=({children})=>{
    const navigate=useNavigate()
    const [user, setuser] = useState(false)
    const [isSeller, setisSeller] = useState(null)
    const [showUserLogin, setshowUserLogin] = useState(false)
    const [product, setproduct] = useState([])

    const fetchProducts=async()=>{
        setproduct(dummyProducts)
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    const value={navigate,user,setuser,isSeller,setisSeller,showUserLogin,setshowUserLogin,product}
    return (
        <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider