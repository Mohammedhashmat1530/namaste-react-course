import {LOGO} from '../utils/links'

const Header =()=>{
    return (
        <div className='header'>
            <div className='Logo-div'>
            <img  className='logo' src={LOGO}/>
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

export default Header;