// Restaurant.js
import React from "react";
import RestaurantCard from "../../components/restaurantCard/RestaurantCard";
import "./Restaurant.css";
import { useAppContext } from "../../Context/AppContext";
const Restaurant = () => {
  const { selectedno } = useAppContext();

  const restaurantData = [
    "Agra Restaurants",
    "Ahmedabad Restaurants",
    "Ajmer Restaurants",
    "Alappuzha Restaurants",
    "Allahabad Restaurants",
    "Amravati Restaurants",
    "Amritsar Restaurants",
    "Aurangabad Restaurants",
    "Bengaluru Restaurants",
    "Bhopal Restaurants",
    "Bhubaneswar Restaurants",
    "Chandigarh Restaurants",
    "Chennai Restaurants",
    "Coimbatore Restaurants",
    "Cuttack Restaurants",
    "Darjeeling Restaurants",
    "Dehradun Restaurants",
    "Delhi NCR Restaurants",
    "Dharamshala Restaurants",
    "Gangtok Restaurants",
    "Goa Restaurants",
    "Gorakhpur Restaurants",
    "Guntur Restaurants",
    "Guwahati Restaurants",
    "Gwalior Restaurants",
    "Haridwar Restaurants",
    "Hyderabad Restaurants",
    "Indore Restaurants",
    "Jabalpur Restaurants",
    "Jaipur Restaurants",
    "Jalandhar Restaurants",
    "Jammu Restaurants",
    "Jamnagar Restaurants",
    "Jamshedpur Restaurants",
    "Jhansi Restaurants",
    "Jodhpur Restaurants",
    "Junagadh Restaurants",
    "Kanpur Restaurants",
    "Khajuraho Restaurants",
    "Khamgaon Restaurants",
    "Kharagpur Restaurants",
    "Kochi Restaurants",
    "Kolhapur Restaurants",
    "Kolkata Restaurants",
    "Kota Restaurants",
    "Lucknow Restaurants",
    "Ludhiana Restaurants",
    "Madurai Restaurants",
    "Manali Restaurants",
    "Mangalore Restaurants",
    "Manipal Restaurants",
    "Meerut Restaurants",
    "Mumbai Restaurants",
    "Mussoorie Restaurants",
    "Mysore Restaurants",
    "Nagpur Restaurants",
    "Nainital Restaurants",
    "Nashik Restaurants",
    "Neemrana Restaurants",
    "Ooty Restaurants",
    "Palakkad Restaurants",
    "Patiala Restaurants",
    "Patna Restaurants",
    "Puducherry Restaurants",
    "Pune Restaurants",
    "Pushkar Restaurants",
    "Raipur Restaurants",
    "Rajkot Restaurants",
    "Ranchi Restaurants",
    "Rishikesh Restaurants",
    "Salem Restaurants",
    "Shimla Restaurants",
    "Siliguri Restaurants",
    "Srinagar Restaurants",
    "Surat Restaurants",
    "Thrissur Restaurants",
    "Tirupati Restaurants",
    "Trichy Restaurants",
    "Trivandrum Restaurants",
    "Udaipur Restaurants",
    "Vadodara Restaurants",
    "Varanasi Restaurants",
    "Vellore Restaurants",
    "Vijayawada Restaurants",
  ];
  const emirateRestaurants = [
    "Abu Dhabi Restaurants",
    "Ajman Restaurants",
    "Al Ain Restaurants",
    "Dubai Restaurants",
    "Fujairah Restaurants",
    "Ras al-Khaimah Restaurants",
    "Sharjah Restaurants",
    "Umm al Quwain Restaurants",
    "Ya al Tuwain Restaurants",
  ];
  const data = [
    {
      no: 1,
      name: "India",
      key: "in",
      url: "./images/india.png",
    },
    {
      no: 2,
      name: "UAE",
      key: "ae",
      url: "./images/uae.png",
    },
  ];
  let adjustedIndex = -3;
  return (
    <div className="Restro">
      <div className="headings">
        {" "}
        <h1 className="top">
          Popular locations in{" "}
          <img
            alt="india"
            src={data[selectedno - 1].url}
            style={{ height: "45px", width: "45px", borderRadius: "15px" }}
          />{" "}
          {data[selectedno - 1].name}
        </h1>
        <p className="top_p">
          From swanky upscale restaurants to the cosiest hidden gems serving the
          most incredible food, TomatoEats covers it all. Explore menus, and
          millions of restaurant photos and reviews from users just like you, to
          find your next great meal.
        </p>
      </div>
      {selectedno === 1 && (
        <div>
          {restaurantData?.map((restaurant, index) => {
            adjustedIndex += 3;
            if (adjustedIndex >= restaurantData.length) {
              return null;
            }
            return (
              <div className="restaurant-list" key={adjustedIndex}>
                <RestaurantCard
                  restaurantName={restaurantData[adjustedIndex]}
                />
                <RestaurantCard
                  restaurantName={restaurantData[adjustedIndex + 1]}
                />
                <RestaurantCard
                  restaurantName={restaurantData[adjustedIndex + 2]}
                />
              </div>
            );
          })}
        </div>
      )}
      {selectedno === 2 && (
        <div>
          {emirateRestaurants?.map((restaurant, index) => {
            adjustedIndex += 3;
            if (adjustedIndex >= emirateRestaurants.length) {
              return null;
            }
            return (
              <div className="restaurant-list" key={adjustedIndex}>
                <RestaurantCard
                  restaurantName={emirateRestaurants[adjustedIndex]}
                />
                <RestaurantCard
                  restaurantName={emirateRestaurants[adjustedIndex + 1]}
                />
                <RestaurantCard
                  restaurantName={emirateRestaurants[adjustedIndex + 2]}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Restaurant;
