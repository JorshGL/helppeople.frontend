import React from 'react'
import SideBar from '../components/SideBar'

function Layout({ children }) {
  return (
    <div className='grid grid-cols-5 w-screen h-screen overflow-y-scroll'>
      <SideBar />
      <div className='col-span-4'>
        {children}
      </div>
    </div>
  )
}

export default Layout
