import React from 'react'

export const RestaurantMenuTitle = () => {
  return (
    <div className='restaurant-header'>
            <div className='res-img'>
                <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/3ed4c6caff2ea0b068032712f71420ab' />
            </div>
            <div className='res-details'>
                <h2 className='res-name'>MP Paratha and Omlet</h2>
                <h3 className='res-cui'>Mughlai, Biryani</h3>
                <div className='res-stats'>

                    <p>⭐4.3</p>
                    <p>4.3</p>
                    <p> 4.3</p>

                </div>
            </div>
        </div>
  )
}

