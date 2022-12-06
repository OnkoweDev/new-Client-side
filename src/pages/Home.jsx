import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/SideBar2/Sidebar'
import Cards from '../components/Cards/Cards'

const Home = () => {
  return (
    <Sidebar>
        <Navbar />
        <div className="cards">
            <Cards />
            <Cards />
        </div>
    </Sidebar>
  )
}

export default Home