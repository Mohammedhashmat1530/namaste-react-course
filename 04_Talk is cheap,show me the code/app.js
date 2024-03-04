import React from 'react';
import ReactDOM from 'react-dom/client';
import restaurantList from './data.js';

/*

header
    -logo
    -nav-items
body
    -Search
    -Resturant container
        -resturant card
            -img
            -name of res,rating,cusine,delivery time
footer
    -copyright
    -links
    -address
    -contact
    
    */

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

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
    return (
      <div className="card">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{area}</h4>
        <span>
          <h4>⭐<i class="fa-solid fa-star"></i>{avgRating}</h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
      </div>
    )
  }
  
  // Body Component for body section: It contain all restaurant cards
  // We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
  const Body = () => {
    return (
      <div className="restaurant-list">
        
        <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}
      </div>
        

      </div>
    );
  };
  
  // Footer component for footer section
  const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By 💓
        
        <a className='linkedin' href="https://www.linkedin.com/in/mohammed-hashmat/" target="_blank">
          Md Hashmat
        </a>
        ©️
        {year}
        <strong>
          Food<span>Express</span>
        </strong>
      </div>
    );
  };


const AppLayout = () => {
    return (
        <React.Fragment>
        <Header />
        <Body />
        <Footer />
      </React.Fragment>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<AppLayout />);

// 1:35:36
