import React, { useState } from 'react'

import "./Sidebar.css"
import img from './facebook.png'
import { AiOutlineHome, AiOutlineLock, AiOutlineSetting, AiOutlineUsergroupAdd } from 'react-icons/Ai'
import { IoMdHelp } from 'react-icons/Io'
import { BsChatDots } from 'react-icons/Bs'
import { VscSignOut } from 'react-icons/Vsc'
import { NavLink } from 'react-router-dom'

const Sidebar = ({children}) => {
    const [isExpanded, setIsExpanded] = useState(false)
    
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
            icon:<VscSignOut/>    
        },

    ]
  return (
    <div className="containerW">
        <div className={isExpanded ?"side-nav-container":"side-nav-container side-nav-container-NX"}>
            <div className="nav-upper">
                <div className="nav-heading">
                   {isExpanded && ( <div className="nav-brand">
                        <img src={img} alt="nav-brand" />
                        <h2></h2>
                    </div>)}
                    <button className={isExpanded ?"handburger handburger-in" :"handburger handburger-out "} onClick={()=>setIsExpanded(!isExpanded)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="nav-menu">
                    {menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className={isExpanded?"menu-item":"menu-item menu-item-Nx"} >
                        <div className="icon">{item.icon}</div>
                        {isExpanded && <p>{item.name}</p>}{!isExpanded && <div className="tooltip">{item.name}</div>}
                    </NavLink>
                    ))}
                </div>
            </div>
           
        </div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Sidebar