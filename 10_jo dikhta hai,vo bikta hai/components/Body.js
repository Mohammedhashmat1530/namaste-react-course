import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { SearchError } from "./SearchError";
import restaurantlist from "../utils/data";
import Shimmer from "./Shimmer";
import useFetchData from "../utils/useFetchData";

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [restaurantList, updateList] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [SearchTxt, setSearchTxt] = useState('');
  const [SearchList, setSearchList] = useState([]);

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option)
  }

  // one time useeffect when page reloads
  useEffect(() => {
    fetchdata1();
  }, []);



  const fetchdata1 = async () => {
    const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7440744&lng=83.24558979999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    const json = await useFetchData(url)
    updateList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setSearchList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setInitialized(true)
  }
  


  const searchAction = () => {

    let searchlist = restaurantList.filter((list) => list.info.name.toLowerCase().replace(/ /g, "").includes(SearchTxt.toLowerCase()));
    console.log(searchlist)
    setSearchList(searchlist)
  }


  // for filtering 
  useEffect(() => {
    if (selectedOption == 0) {
      console.log('0')
      if (initialized) {
        setSearchList(restaurantList)
      }
    }
    else if (selectedOption == 1) {
      console.log('1')
      const list = restaurantList.filter(res => res.info.avgRating > "4.2")
      setSearchList(list)
      console.log(list)
    }
    else if (selectedOption == 2) {
      console.log('2')
      const list = restaurantList.filter(res => res.info.avgRating <= "4.2")
      setSearchList(list)
      console.log(list)
    }
    else if (selectedOption == 3) {
      console.log('3')
      const list = restaurantList.filter(res => res.info.sla.lastMileTravelString < "6.5 kms")
      setSearchList(list)
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
      <div className="search" >
        <input type="text" placeholder="search Here..." onChange={(e) => setSearchTxt(e.target.value)} />
        <button className="search-btn" onClick={searchAction}>Search</button>
      </div>
    </div>

    {restaurantList.length === 0 && <Shimmer />}
    {SearchList.length === 0 && <SearchError />}

    <div className="restaurant-list">
      {SearchList.map((restaurant) => {
        return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />;
      })}
    </div>



  </>
  )
}

export default Body;