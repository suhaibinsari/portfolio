import React from 'react'
import Intro from './pages/home/page'
import Help from './pages/helpSection/page'
import Work from './pages/workExp/page'
import Latest from './pages/latestWork/page'
import Reviews from './pages/testmonials/page'
import AllSkill from './pages/allSkill/page'
import About from './pages/aboutMe/page'

export default function page() {
  return (
    <div className='mt-20 overflow-x-hidden'>
      <Intro />
      {/* <Help /> */}
      <AllSkill />
      <About />
      <Work />
      <Latest />
      {/* <Reviews /> */}

    </div>
  )
}
