import React from "react";
import "./RestaurantCard.css";

const RestaurantCard = ({ restaurantName }) => {
  return (
    <div className="restaurant-card">
      <h3>
        {restaurantName}
        <span className="right-arrow">
          <i class="fa-solid fa-chevron-right"></i>
        </span>
      </h3>
    </div>
  );
};

export default RestaurantCard;
