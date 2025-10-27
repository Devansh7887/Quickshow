import { useState } from 'react'
import HeroSection from '../component/HeroSection'
import FeaturedSection from '../component/FeaturedSection'
import TrailerSection from '../component/TrailerSection'


function Home() {

  return (
    <>
     <HeroSection/>
     <FeaturedSection/> 
     <TrailerSection/>
    </>
  )
}

export default Home
