import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext=React.createContext(null)

const AppContextProvider=({children})=>{
    const navigate=useNavigate()
    const [user, setuser] = useState(false)
    const [isSeller, setisSeller] = useState(null)
    const [showUserLogin, setshowUserLogin] = useState(false)
    const value={navigate,user,setuser,isSeller,setisSeller,showUserLogin,setshowUserLogin}
    return (
        <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider