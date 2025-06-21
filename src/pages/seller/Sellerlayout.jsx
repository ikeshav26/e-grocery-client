import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const SellerLayout = () => {
    const { setisSeller,navigate } = useContext(AppContext);
    

    const sidebarLinks = [
        { name: "Add Product", path: "/seller", icon: assets.add_icon },
        { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
        { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
    ];

    return (
        <div className="flex">
            {/* Topbar */}
            <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white z-10">
                <h1 className='text-2xl text-green-700'>Grocery Shop</h1>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button
                        onClick={() => {
                            setisSeller(false);
                            navigate('/');
                        }}
                        className='border cursor-pointer rounded-full text-sm px-4 py-1'
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-64 w-16 border-r h-screen pt-16 text-base border-gray-300 flex flex-col bg-white">
                {sidebarLinks.map((item, index) => (
                    <NavLink
                        to={item.path}
                        end={item.path === '/seller'} // Apply `end` only to the main route
                        key={index}
                        className={({ isActive }) =>
                            `flex items-center py-3 px-4 gap-3 ${
                                isActive
                                    ? 'border-r-4 md:border-r-[6px] border-green-600 text-green-700 bg-green-100'
                                    : 'hover:bg-gray-100 text-gray-600'
                            }`
                        }
                    >
                        <img src={item.icon} alt={item.name} className="w-6 h-6" />
                        <p className="hidden md:block">{item.name}</p>
                    </NavLink>
                ))}
            </div>

            {/* Main Content (Nested Routes Here) */}
            <div className="flex-1 p-4 pt-20">
                <Outlet/>
            </div>
        </div>
    );
};

export default SellerLayout;
