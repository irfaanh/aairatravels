import React from 'react'
import UserNav from '../Pages/UserPage/UserNav'
import Hero from '../Pages/UserPage/Hero'
import Services from '../Pages/UserPage/Services'
import Footer from '../Pages/UserPage/Footer'
import Contact from '../Pages/UserPage/Contact'
import TopDestinations from '../Pages/UserPage/TopDestinations'

const UserHome = () => {
  return (
    <>
    <UserNav/>
    <Hero/>
    <Services/>
    <TopDestinations/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default UserHome