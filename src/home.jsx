import React from 'react'
import Navbar from './components/navbar'
import Welcome from './components/welcome'
import OurStory from './components/ourstory'
import Mission from './components/mission'
import Team from './components/team'
import JoinUs from './components/joinus'
import Footer from './components/footer'


function Home() {
  return (
    <div>
        {/* Navbar */}
        <Navbar/>

        {/* Welcome Section */}
        <Welcome/>

        {/* Our Story Section */}
        <OurStory/>

        {/* Mission and Values */}
        <Mission/>

        {/* Teams */}
        <Team/>

        {/* Join Us*/}
        <JoinUs/>

        {/* Footer */}
        <Footer/>

    </div>
    
  )
}

export default Home