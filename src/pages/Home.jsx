import React from 'react';
import Cards from '../components/Cards/Cards';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  return (
     <>
        
            <Sidebar>
              <Navbar />
              <div className="row">
                <div className="col-md">
                     <Cards />
                </div>
              </div>
            </Sidebar>
       
       
    </>
  )
}

export default Home