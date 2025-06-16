import React, { useContext } from 'react'

import { AppContext } from '../context/AppContext'
import Hero from '../components/Hero'
import Category from '../components/Category'

const Home = () => {

  return (
    <div className='mt-10'>
      <Hero/>
      <Category/>
    </div>
  )
}

export default Home
