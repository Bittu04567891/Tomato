import React from "react";
import "./RestaurantCard.css";

const RestaurantCard = ({ restaurantName }) => {
  return (
    <div className="restaurant-card">
      <h3>
        {restaurantName}

        <i
          style={{ paddingLeft: "28px" }}
          className="fa-solid fa-chevron-right"
        ></i>
      </h3>
    </div>
  );
};

export default RestaurantCard;
