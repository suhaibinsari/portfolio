import React from 'react'
import Intro from './pages/home/page'
import Help from './pages/helpSection/page'
import Work from './pages/workExp/page'
import Latest from './pages/latestWork/page'
import Reviews from './pages/testmonials/page'
import Footer from './components/footer/page'



export default function page() {
  return (
    <div className='mt-20 overflow-x-hidden'>
      <Intro />
      <Help />
      <Work />
      <Latest />
      <Reviews />
      {/* <Footer /> */}

    </div>
  )
}
