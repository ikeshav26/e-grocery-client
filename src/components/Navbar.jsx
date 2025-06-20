import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import {assets} from '../assets/assets'
import { toast } from 'react-hot-toast'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const {user,setuser,navigate,setshowUserLogin,cartCount,searchQuery,setsearchQuery}=useContext(AppContext)

    useEffect(() => {
        if (searchQuery.length>0){
        navigate('/products')
    }
    }, [searchQuery, navigate])
    return (
        <nav className="outfit-text flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <Link to='/'>
            <h1 className='text-green-700 font-bold text-3xl'>Grocery Shop</h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink className={({ isActive }) => (isActive ? 'border-b-2 border-green-600 ' : '')} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-2 border-green-600' : '')}
                 to='/products'>Products</NavLink>

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input  onChange={(e)=>setsearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                <div className="relative cursor-pointer">
                    <svg onClick={()=>navigate('/cart')} width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="green" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-green-600 w-[18px] h-[18px] rounded-full">{cartCount()}</button>
                </div>

                {user?( <div className='relative group'>
                    <img src={assets.profile_icon} className='w-10 cursor-pointer'/>
                    <ul className='dropdown hidden group-hover:block absolute top-10 right-0 bg-white shadow-md rounded-md w-48 text-sm border border-gray-200 text-gray-700 px-2 py-3 z-40'>
                        <li onClick={()=>{navigate('/my-orders')}} className=' p-1.5 cursor-pointer hover:bg-gray-100'>My Orders</li>
                        <li onClick={()=>{navigate('/seller-login')}} className=' p-1.5 cursor-pointer hover:bg-gray-100'>Seller Login</li>
                        <li onClick={()=>{setuser(null)
                        toast.success("Logout successfull")}
                        } className=' p-1.5 cursor-pointer hover:bg-gray-100'>Logout</li>
                    </ul>
                    </div>
            ):(<button onClick={()=>setshowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-green-700 hover:bg-green-600 transition text-white rounded-full">
                    Login
                </button>)}
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden ">
                {/* Menu Icon SVG */}
                <svg className='cursor-pointer' width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-99`}>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-2 border-green-600' : '')} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-2 border-green-600' : '')} to='/products'>Products</NavLink>
                {user?( <div className='relative group'>
                    <img src={assets.profile_icon} className='w-10 cursor-pointer'/>
                    <ul className=' hidden group-hover:block absolute top-10 left-0 bg-white shadow-md rounded-md w-48 text-sm border border-gray-200 text-gray-700 px-2 py-3 z-40'>
                        <li onClick={()=>{navigate('/my-orders')}} className=' p-1.5 cursor-pointer hover:bg-gray-100'>My Orders</li>
                        <li onClick={()=>{navigate('/seller-login')}} className=' p-1.5 cursor-pointer hover:bg-gray-100'>Seller Login</li>
                        <li onClick={()=>{setuser(null)
                            toast.success("Logout successfull")
                        }} className=' p-1.5 cursor-pointer hover:bg-gray-100'>Logout</li>
                    </ul>
                    </div>
            ):(<button onClick={()=>setshowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-green-700 hover:bg-green-600 transition text-white rounded-full">
                    Login
                </button>)}
            </div>

        </nav>
    )
}

export default Navbar
