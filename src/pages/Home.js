import React from 'react'
import Header from '../components/Header/Header'
import Performance from '../components/Performance/Performance'
import AboutUs from '../components/AboutUs/AboutUs'

const Home = () => {
  return (
    <div>
      
      <Header activeLink='/' />

      <Performance />

      <AboutUs/>
      
    </div>
  )
}

export default Home
