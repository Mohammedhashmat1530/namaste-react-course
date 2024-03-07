import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/data";


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
  
export default Body;