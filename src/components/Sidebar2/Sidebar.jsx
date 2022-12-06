import React, { useState } from 'react'
import {FaTh,FaBars,FaUserAlt,FaRegChartBar,FaCommentAlt,FaShoppingBag,FaThList} from 'react-icons/fa'
import './styles.css'
import {AiFillApple, AiOutlineMenu} from 'react-icons/Ai'
import {AiOutlineHome} from "react-icons/Ai"
import {AiOutlineLock} from "react-icons/Ai"
import {AiOutlineSetting} from "react-icons/Ai"
import {AiOutlineUsergroupAdd} from "react-icons/Ai"
import {BsChatDots} from "react-icons/Bs"
import {IoMdHelp} from "react-icons/Io"
import {VscSignOut} from "react-icons/Vsc"
import { NavLink } from 'react-router-dom'

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const menuItem = [
        {
            path:"/",
            name:"Home",
            icon: <AiOutlineHome />   
        },
        
        {
            path:"/setting",
            name:"Upload",
            icon: <AiOutlineSetting/>   
        },

        {
            path:"/customer",
            name:"Font",
            icon:<AiOutlineUsergroupAdd />    
        },

        {
            path:"/help",
            name:"Resources",
            icon:<IoMdHelp />    
        },
        {
            path:"/message",
            name:"Theme",
            icon:<BsChatDots />    
        },
        {
            path:"/password",
            name:"Password",
            icon: <AiOutlineLock />   
        },


        {
            path:"/signout",
            name:"Transcibe",
            icon:<VscSignOut />    
        },

    ]
  return (
    <div className='containerW'>
        <div style={{width: isOpen ? "300px" : "120px"}} className="sidebar">
            <div className="top_section">
                <h1  style={{display: isOpen ? "block" : "none"}} className="logo">Onkowe</h1>
                <div  style={{marginLeft: isOpen ? "50px" : "0"}} className="bars">
                    <AiOutlineMenu  onClick={toggle} />
                </div>
            </div>
            {
               menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassname="active">
                        <div className="icon">{item.icon}</div>
                        <div  style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
               ))    
            }  
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar;