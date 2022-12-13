import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css'
import img from './facebook.png';
function Navbar() {
 

  return (
    <>
      <div className="menu-bar">
        <ul>
            <li className="activeN"><a href="#">New Project</a>
            <div className="sub-menu-1">
                  <ul>
                  <li><a href="#">Ebook writing</a></li>
                  <li><a href="#">Article writing</a></li>
                  <li><a href="#">Facebook Ad</a></li>
                  <li><a href="#">Instagram caption</a></li>
                  <li><a href="#">Linkedln Shot post</a></li>
                  <li><a href="#">Google Ad Description</a></li>
                  <li><a href="#">Youtube Description</a></li>
                  <li><a href="#">Product Description</a></li>
                  <li><a href="#">Google Ad Titles</a></li>
                  </ul>  
                </div>
            </li>

            <li><a href="#">Publish</a>
                <div className="sub-menu-1">
                  <ul>
                  <li>convert to:</li>
                  <li><a href="#">PDF</a></li>
                  <li><a href="#">MS WORD</a></li>
                  </ul>  
                </div>
            
            </li>
            <li><a href="#">Draft</a></li>

            <li><a href="#">Translate</a>
            <div className="sub-menu-1">
                  <ul>
                  <li><a href="#">English</a></li>
                  <li><a href="#">French</a></li>
                  <li><a href="#">Spanish</a></li>
                  <li><a href="#">German</a></li>
                  </ul>  
                </div>
            </li>
            <li><a href="#">Collaborate</a></li>
            <li><a href="#"><img src={img} /></a>
            <div className="sub-menu-1">
                  <ul>
                  <li><a href="#">Mission</a></li>
                  <li><a href="#">Vision</a></li>
                  <li><a href="#">Aims</a></li>
                  <li><a href="#">Objectives</a></li>
                  </ul>  
                </div>
            </li>
        </ul>
   </div>
     
    </>
  );
}

export default Navbar;
