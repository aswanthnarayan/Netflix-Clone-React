import React from 'react'
import Navbar from '../components/Navbar'
import MainCard from '../components/MainCard'
import TitleCard from '../components/TitleCard'
import Footer from '../components/Footer'
import GroupOfCards from '../components/GroupOfCards'

const HomePage = () => {
  return (
    <div className=' text-white bg-black'>
      <Navbar/>
      <MainCard/>
      <GroupOfCards/>
      <Footer/>
    </div>
  )
}

export default HomePage