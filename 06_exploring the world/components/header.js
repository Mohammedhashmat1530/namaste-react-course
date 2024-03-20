import { LOGO } from '../utils/links'
import React, { useEffect, useState,useEffect } from 'react';


const Header = () => {
    const [BtnText, setBtnText] = useState('LogIn');


    const login_action = () => {
        setBtnText(BtnText === "LogIn" ? "Logout" : "LogIn")
        console.log("clicked")
    }



    return (
        <div className='header'>
            <div className='Logo-div'>
            <a href="/">  <img className='logo' src={LOGO} /></a>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li className={BtnText === "LogIn" ? "login-btn" : "logout-btn"} onClick={login_action}><button>{BtnText}</button></li>
                </ul>
            </div>
        </div>
    )
}
'login-btn'
export default Header;