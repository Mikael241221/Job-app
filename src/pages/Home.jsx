import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Joblisting from '../components/Joblisting'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Joblisting/>
    </div>
  )
}

export default Home
