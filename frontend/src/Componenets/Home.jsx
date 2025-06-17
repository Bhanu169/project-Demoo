import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Services from './Services'
import About from './About'
import Facts from './Facts'
import Services2 from './Services2'
import Booking from './Booking'
import Team from './Team'
import Testimonial from './Testimonial'

function Home() {
  return (
    <>
    
    <Carousel/>
    <Services/>
    <About/>
    <Facts/>
    <Services2/>
    <Booking/>
    <Team/>
    <Testimonial/>
   
    </>
  )
}

export default Home