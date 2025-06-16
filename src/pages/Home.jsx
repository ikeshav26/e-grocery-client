import React, { useContext } from 'react'

import { AppContext } from '../context/AppContext'
import Hero from '../components/Hero'

const Home = () => {

  return (
    <div className='mt-10'>
      <Hero/>
    </div>
  )
}

export default Home
