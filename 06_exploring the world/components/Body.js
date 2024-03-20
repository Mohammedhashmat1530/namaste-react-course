import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantlist from "../utils/data";
import Shimmer from "./Shimmer";

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [restaurantList, updateList] = useState([]);
  const [initialized, setInitialized] = useState(false)

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option)
  }


  // one time useeffect when page reloads
  useEffect(() => {
    setTimeout(() => {
      updateList(restaurantlist);
      console.log("here")
      setInitialized(true)
    }, 2500)
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();

  }
  // for filtering 
  useEffect(() => {
    if (selectedOption == 0) {
      console.log('0')
      if (initialized) {
        updateList(restaurantlist);
      }
    }
    else if (selectedOption == 1) {
      console.log('1')
      const list = restaurantlist.filter(res => res.data.avgRating > "4.0")
      updateList(list);
      console.log(list)
    }
    else if (selectedOption == 2) {
      console.log('2')
      const list = restaurantlist.filter(res => res.data.avgRating <= "3.9")
      updateList(list);
      console.log(list)
    }
    else if (selectedOption == 3) {
      console.log('3')
      const list = restaurantlist.filter(res => res.data.lastMileTravelString < "6.5 kms")
      updateList(list);
      console.log(list)
    }
  }, [selectedOption]);



  return (<>
    
    <div className="options">
      <div className="custom-selecfilter" >
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="0" >Filter Resturants:</option>
          <option value="1" >Highest avg rating</option>
          <option value="2">Lowest avg rating</option>
          <option value="3">low delivery time</option>
        </select>
      </div>
    </div>

    
    {restaurantList.length === 0 && (
        <>
          
          <Shimmer />
        </>
      )}
    
   

      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>


    
  </>
  )
}

export default Body;