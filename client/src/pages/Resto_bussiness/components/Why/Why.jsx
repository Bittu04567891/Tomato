// Why.jsx
import React from "react";
import "./Why.css"; // Import your stylesheet

const Why = () => {
  return (
    <div className="why">
      {" "}
      <h2 className="h2">Why should you partner with TomatoEats?</h2>
      <h4 className="h4">
        TomatoEats enables you to get 60% more revenue, 10x new customers and
        boost your brand <br />
        visibility by providing insights to improve your business.
      </h4>
      <div className="why-container">
        <div className="why-box">
          <h3 className="Sub_head">Get 60% More Revenue</h3>
          <p>
            TomatoEats enables you to increase your revenue significantly by
            leveraging our platform.
          </p>
        </div>

        <div className="why-box">
          <h3 className="Sub_head">10x New Customers</h3>
          <p>
            Partnering with TomatoEats brings you access to a vast customer
            base, attracting 10 times more customers to your business.
          </p>
        </div>

        <div className="why-box">
          <h3 className="Sub_head">Boost Your Brand Visibility</h3>
          <p>
            TomatoEats provides valuable insights to improve your business and
            boost your brand visibility in the market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
