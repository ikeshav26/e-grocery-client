import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import { toast } from "react-hot-toast";

export const AppContext=React.createContext(null)

const AppContextProvider=({children})=>{
    const navigate=useNavigate()
    const [user, setuser] = useState(false)
    const [isSeller, setisSeller] = useState(null)
    const [showUserLogin, setshowUserLogin] = useState(false)
    const [product, setproduct] = useState([])
    const [cartItems, setcartItems] = useState({})
    const [searchQuery, setsearchQuery] = useState({})


    const fetchProducts=async()=>{
        setproduct(dummyProducts)
    }

    const addToCart=(productId)=>{
        let cartData=structuredClone(cartItems)
        if(cartData[productId]){
            cartData[productId] += 1
        }else{
            cartData[productId]=1
        }
        setcartItems(cartData)
        toast.success("Product added to cart")
    }

    const updateCartItem=(productId,quantity)=>{
        let cartData=structuredClone(cartItems)
        cartData[productId]=quantity
        setcartItems(cartData)
        toast.success("Cart updated successfully")
    }

    const cartCount=()=>{
        let count=0
        for(let product in cartItems){
            count += cartItems[product]
        }
        return count
    }

    const totalCartAmmount=()=>{
        let total=0
        for(let product in cartItems){
            const productData=product.find((item)=>item.id===product)
            if(productData){
                total += productData.offerPrice * cartItems[product]
            }
        }
        return total
    }

    const removeFromCart=(productId)=>{
        let cartData=structuredClone(cartItems)
        if(cartData[productId]){
            cartData[productId] -= 1
            setcartItems(cartData)
            toast.success("Product removed from cart")
        }
    }

    const clearCart=()=>{
        setcartItems({})
        toast.success("Cart cleared successfully")
    }


    useEffect(() => {
        fetchProducts()
    }, [])


    const value={navigate,user,setuser,isSeller,setisSeller,showUserLogin,setshowUserLogin,product,addToCart,updateCartItem,cartCount,removeFromCart,clearCart,totalCartAmmount,cartItems,searchQuery,setsearchQuery}
    return (
        <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider