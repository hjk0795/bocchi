import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";

function RestaurantList() {
  const params = useParams();
  const [restaurantList, setRestaurantList] = useState([]);

  React.useEffect(() => {
    const url = `http://localhost:8080/category/${params.categoryName}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setRestaurantList(json));
  }, [params]);

  return (
    restaurantList.map((restaurant, index)=>{
        return (
            <List
            key={index}
            brandImg={restaurant.brandImg}
            name={restaurant.name}
            star={restaurant.star}
            reviewStatement={restaurant.reviewStatement}
            foodImg={restaurant.foodImg}
            location={restaurant.location}
            menuImg={restaurant.menuImg}
            openingHours={restaurant.openingHours}
             />
        );
    })

  );
}

export default RestaurantList;
