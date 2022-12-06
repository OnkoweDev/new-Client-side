import React from 'react'
import './styles.css'
import facebook from './facebook.png'

const Navbar = () => {
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
  return (
    <>
        <div className="topnav" id="myTopnav">
           
            <div className="dropdown">
                <button className="dropbtn">New Project
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Publish
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>

            <a href="#about">Draft</a>


            <div className="dropdown">
                <button className="dropbtn">Translate
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>

            <a href="#about">Collaborate</a>
            <a href="javascript:void(0);" className="icon" onclick={myFunction}>&#9776;</a>

            <div className="profileSide">
                <li>
                  <img src={facebook} className="profile"  />
                    <ul>
                        <li className="sub-item">
                        <p>Dashboard</p>
                        </li>
                        <li className="sub-item">
                        <p>My Orders</p>
                        </li>
                        <li className="sub-item">
                        <p>Update Profile</p>
                        </li>
                        <li className="sub-item">
                        <p>Logout</p>
                        </li>
                    </ul>
          </li>
    </div>
            
</div>
    </>
  )
}

export default Navbar