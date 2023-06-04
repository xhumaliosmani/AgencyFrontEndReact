import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Features from '../Features/Features'
import Cards from '../Cards/Cards'
import CallToAction from '../Calltoaction/CallToAction'
import Testimonial from '../Testemonial/Testimonial'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Homepage = () => {
  return (
    <>
    <Navbar/>
      <HeroSection />
      <Features />
      <Cards />
      <CallToAction />
      <Testimonial />
      <Footer/>
      
    </>
  );
}

export default Homepage