import React, { useState } from 'react'
import './sidebarstyle.css'
import {AiFillApple, AiOutlineMenu} from 'react-icons/Ai'
import {AiOutlineHome} from "react-icons/Ai"
import {AiOutlineLock} from "react-icons/Ai"
import {AiOutlineSetting} from "react-icons/Ai"
import {AiOutlineUsergroupAdd} from "react-icons/Ai"
import {BsChatDots} from "react-icons/Bs"
import {IoMdHelp} from "react-icons/Io"
import {VscSignOut} from "react-icons/Vsc"
import {BiSearch} from "react-icons/Bi"
import apple from './macbook.jpg'




let list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item)=>
        item.classList.remove('hovered'));
        this.classList.add('hovered')
    }
    list.forEach((item)=>
    item.addEventListener('mouseover', activeLink))


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState()

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        <div className="container">
            <div style={{width: isOpen ? "300px" : "50px"}} className="navigation">
               <ul>
               <li>
                        <a href=''>
                            <span className="icon"><AiFillApple /></span>
                            <span className="title">Onkowe</span>
                        </a>
                    </li>

                    <li>
                        <a href=''>
                            <span className="icon"><AiOutlineHome /></span>
                            <span className="title">Dashboard</span>
                        </a>
                    </li>

                    <li>
                        <a href=''>
                            <span className="icon"><AiOutlineUsergroupAdd /></span>
                            <span className="title">Customer</span>
                        </a>
                    </li>

                    <li>
                        <a href=''>
                            <span className="icon"><BsChatDots /></span>
                            <span className="title">Message</span>
                        </a>
                    </li>

                    <li>
                        <a href=''>
                            <span className="icon"><IoMdHelp /></span>
                            <span className="title">Help</span>
                        </a>
                    </li>

                    <li>
                        <a href=''>
                            <span className="icon"><AiOutlineSetting /></span>
                            <span className="title">Setting</span>
                        </a>
                    </li>

                    <li>
                        <a href=''>
                            <span className="icon"><AiOutlineLock /></span>
                            <span className="title">Password</span>
                        </a>
                    </li>

                    <li>
                        <a href=''>
                            <span className="icon"><VscSignOut /></span>
                            <span className="title">Sign Out</span>
                        </a>
                    </li>

                    
                </ul> 
            </div>

           <div className="main">
                <div className="topbar">
                    <div style={{marginLeft: isOpen ? "20px" : "0"}} className="toggle">
                        <AiOutlineMenu onClick={toggle} />   
                    </div>
                    {/* Search  */}
                    <div className="search">
                        <label>
                            <input type="text" placeholder='Search' />
                            <div className="icon"><BiSearch /></div>
                        </label>
                    </div>
                    {/* User Image */}
                    <div className="user">
                         <img src={apple} />
                    </div>
                </div>
           </div>
        </div>
    </>
  )
}

export default Sidebar