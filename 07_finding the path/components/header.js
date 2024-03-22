import { LOGO } from '../utils/links'
import React, { useEffect, useState,useEffect } from 'react';
import {Link} from 'react-router-dom'


const Header = () => {
    const [BtnText, setBtnText] = useState('LogIn');


    const login_action = () => {
        setBtnText(BtnText === "LogIn" ? "Logout" : "LogIn")
        console.log("clicked")
    }



    return (
        <div className='header'>
            <div className='Logo-div'>
            <Link to="/">  <img className='logo' src={LOGO} /></Link>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to='/' className='nav-item' >Home</Link></li>
                    <li><Link to='/about'className='nav-item'  >About Us</Link></li>
                    <li><Link to='/contact' className='nav-item' >Contact Us</Link></li>
                    <li className='nav-item' >Cart</li>
                    <li className={BtnText === "LogIn" ? "login-btn" : "logout-btn"} onClick={login_action}><button>{BtnText}</button></li>
                </ul>
            </div>
        </div>
    )
}
'login-btn'
export default Header;