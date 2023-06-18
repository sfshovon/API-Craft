import React from 'react'
import CategoryTabs from './CategoryTabs'
import HeroBg from '../../public/Hero-bg.png'

const Hero = () => {
  return ( 
    <div className="bg-cover bg-no-repeat bg-center bg-[url('../../public/Hero-bg.png')]" style={{ height: "700px"}}>
      <CategoryTabs></CategoryTabs>
      Hero
    </div>
  )
}

export default Hero