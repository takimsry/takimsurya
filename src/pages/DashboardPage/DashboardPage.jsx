import React from 'react'
import Navbar from '../../components/Common/Navbar'
import Hero from '../../components/Dashboard/Hero'
import About from '../../components/Dashboard/About'
import Projects from '../../components/Dashboard/Projects'
import Contacts from '../../components/Dashboard/Contacts'
import Footer from '../../components/Common/Footer'

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  )
}

export default DashboardPage