import React from 'react';
import ReactDOM from 'react-dom/client';

const Header =()=>{
    return (
        <div className='header'>
            <div className='Logo-div'>
            <img  className='logo' src='https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-by-simplepixelsl-brandcrowd.png'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <Header/>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<AppLayout />);
