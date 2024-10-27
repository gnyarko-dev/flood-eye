import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import BannerDetails from './components/BannerDetails'
import JoinUs from './components/joinus'
import CardContainer from './components/CardContainer'

function Projects() {
  return (
    <div>

      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <BannerDetails />

      {/* Projects */}
      <CardContainer />

      {/* Join Us */}
      <JoinUs />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Projects