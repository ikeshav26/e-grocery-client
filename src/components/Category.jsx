import React, { useContext } from 'react'
import {categories} from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Category = () => {
    const {navigate} = useContext(AppContext);
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Categories</p>
      <div className='my-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 items-center justify-center'>
        {
            categories.map((item,index)=>(
                <div onClick={()=>{
                    navigate(`/product/${item.path.toLowerCase()}`)
                    scrollTo(0,0)
                }}  key={index} className={`group cursor-pointer py-5 px-3 rounded-lg gap-2 flex flex-col items-center justify-center `} style={({backgroundColor: item.bgColor})}>
                    <img src={item.image} className='max-w-20 transition group-hover:scale-110'/>
                    <p className='text-sm font-medium'>{item.text}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Category
