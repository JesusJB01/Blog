import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'


const Layout = ({children}) => {
  return (
    <>
       <Navbar />
        <main className=''>
            {children}
        </main>
        
  <div className="border border-t-2 border-gray-200 bg-gray-50"></div> 

        <Footer />
    </>
  )
}

export default Layout