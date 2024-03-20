import { RES_IMG } from "../utils/links";


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
            src={RES_IMG + cloudinaryImageId}
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


export default RestaurantCard;