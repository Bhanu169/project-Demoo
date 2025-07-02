import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Topbar from './Topbar'


function Layout() {
  return (
    <>
    <Topbar/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout