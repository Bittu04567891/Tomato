import React from "react";
import "./Box.css";

const Box = () => {
  return (
    <div>
      <div className="white-box">
        <h2 className="box-heading">Get started with online ordering</h2>
        <h3> Please keep the documents ready for a smooth signup</h3>
        <ul className="box-list">
          <li className="box-list-item">
            <i
              style={{ color: "green" }}
              className="fa-solid fa-circle-check"
            ></i>
            FSSAI license copy (apply now)
          </li>
          <li className="box-list-item">
            <i
              style={{ color: "green" }}
              className="fa-solid fa-circle-check"
            ></i>{" "}
            PAN card copy
          </li>
          <li className="box-list-item">
            <i
              style={{ color: "green" }}
              className="fa-solid fa-circle-check"
            ></i>
            Regular GSTIN (if applicable)
          </li>
          <li className="box-list-item">
            <i
              style={{ color: "green" }}
              className="fa-solid fa-circle-check"
            ></i>
            Bank account details
          </li>
          <li className="box-list-item">
            <i
              style={{ color: "green" }}
              className="fa-solid fa-circle-check"
            ></i>{" "}
            Your restaurant menu
          </li>
          <li className="box-list-item">
            <i
              style={{ color: "green" }}
              className="fa-solid fa-circle-check"
            ></i>{" "}
            Dish images for the top 5 items
          </li>

          {/* Add more list items with the same structure */}
        </ul>
      </div>
    </div>
  );
};

export default Box;
