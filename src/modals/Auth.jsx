import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { MdClose } from "react-icons/md";

const Auth = () => {
    const [state, setState] = useState("login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setshowUserLogin,setuser} = useContext(AppContext);

    const submitHandler=async(e)=>{
        e.preventDefault()
        if (state === "register") {
            console.log("Registering:", { name, email, password });
            setName('');
            setEmail('');
            setPassword('');
        } else {
            // Handle login logic here
            console.log("Logging in:", { email, password });
            setEmail('');
            setPassword('');
        }
    }

    return (
        <div onClick={()=>setshowUserLogin(false)}  className='fixed top-0 bottom-0 left-0 right-0 bg-gray-900/50 text-gray-600 flex items-center justify-center z-50'>
            
            <form onClick={(e)=>e.stopPropagation()} onSubmit={submitHandler} className="relative flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
                <div className='text-3xl absolute top-4 right-4 cursor-pointer' onClick={()=>setshowUserLogin(false)}>
                <MdClose />
            </div>
            <p className="text-2xl font-medium m-auto">
                <span className="text-green-700">User</span> {state === "login" ? "Login" : "Sign Up"}
            </p>
            {state === "register" && (
                <div className="w-full">
                    <p>Name</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="text" required />
                </div>
            )}
            <div className="w-full ">
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="password" required />
            </div>
            {state === "register" ? (
                <p>
                    Already have account? <span onClick={() => setState("login")} className="text-green-500 cursor-pointer">click here</span>
                </p>
            ) : (
                <p>
                    Create an account? <span onClick={() => setState("register")} className="text-green-500 cursor-pointer">click here</span>
                </p>
            )}
            <button onClick={()=>
               { setuser(true)
                setshowUserLogin(false)}} className="bg-green-700 hover:bg-green-500 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                {state === "register" ? "Create Account" : "Login"}
            </button>
        </form>
        </div>
    );
};

export default Auth
