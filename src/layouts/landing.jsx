import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../navs/landing-nav';
import Footer from '../components/footer';

const Landing = () => {
  return (
    <div>
      <div className='sticky top-0 z-50 w-full '>
      <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Landing