import React from "react";
import { useState, useEffect } from "react";
import './countTrack.css'
import Navbar from "../navbar/Navbar";
const CountTrack = () => {
  const [availableBoxes, setAvailableBoxes] = useState(1);
  useEffect(() => {
    // Function to fetch data from the API and update the state
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.thingspeak.com/channels/2241519/fields/1.json?api_key=GH56CF2YY8IQ2XH1&results=2');
        const data = await response.json();

        // Assuming the API response structure contains the desired value
        const latestValue = data.feeds[data.channel.last_entry_id].field1;
        setAvailableBoxes(latestValue);
      } catch (error) {
        console.error('API fetch error:', error);
      }
    };

    // Fetch data initially
    fetchData();

    // Fetch data every 10 seconds (adjust the interval as needed)
    const intervalId = setInterval(fetchData, 30000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="stockbox">
        <div className="product_card">
            <div className="circles">
          <svg width="200" height="200">
            <g transform="rotate(-90 100 100)">
              <circle 
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="lightgrey"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="0"
              ></circle>
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="#0C356A"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="66"
              ></circle>
            </g>
            <text
              x="50%"
              y="50%"
              dominant-baseline="central"
              text-anchor="middle"
            >
              85%
            </text>
          </svg>
        </div>
        <h5 className="product_name">Dairy Milk</h5>
          <p className="warehouse_text">Available : {availableBoxes} boxes </p> 
          <button className="order_button">Order</button>
          {/* put variable at the place of 10 boxes */}
        </div>
       

        <div className="product_card">
            <div className="circles">
          <svg width="200" height="200">
            <g transform="rotate(-90 100 100)">
              <circle 
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="lightgrey"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="0"
              ></circle>
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="#0C356A"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="66"
              ></circle>
            </g>
            <text
              x="50%"
              y="50%"
              dominant-baseline="central"
              text-anchor="middle"
            >
              85%
            </text>
          </svg>
        </div>
        <h5 className="product_name">Dairy Milk</h5>
          <p className="warehouse_text">Available : 10 boxes </p> 
          <button className="order_button">Order</button>
          {/* put variable at the place of 10 boxes */}
        </div>

        <div className="product_card">
            <div className="circles">
          <svg width="200" height="200">
            <g transform="rotate(-90 100 100)">
              <circle 
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="lightgrey"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="0"
              ></circle>
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="#0C356A"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="66"
              ></circle>
            </g>
            <text
              x="50%"
              y="50%"
              dominant-baseline="central"
              text-anchor="middle"
            >
              85%
            </text>
          </svg>
        </div>
        <h5 className="product_name">Dairy Milk</h5>
          <p className="warehouse_text">Available : 10 boxes </p> 
          <button className="order_button">Order</button>
          {/* put variable at the place of 10 boxes */}
        </div>


        <div className="product_card">
            <div className="circles">
          <svg width="200" height="200">
            <g transform="rotate(-90 100 100)">
              <circle 
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="lightgrey"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="0"
              ></circle>
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="#0C356A"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="66"
              ></circle>
            </g>
            <text
              x="50%"
              y="50%"
              dominant-baseline="central"
              text-anchor="middle"
            >
              85%
            </text>
          </svg>
        </div>
        <h5 className="product_name">Dairy Milk</h5>
          <p className="warehouse_text">Available : 10 boxes </p> 
          <button className="order_button">Order</button>
          {/* put variable at the place of 10 boxes */}
        </div>



        <div className="product_card">
            <div className="circles">
          <svg width="200" height="200">
            <g transform="rotate(-90 100 100)">
              <circle 
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="lightgrey"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="0"
              ></circle>
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="#0C356A"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="66"
              ></circle>
            </g>
            <text
              x="50%"
              y="50%"
              dominant-baseline="central"
              text-anchor="middle"
            >
              85%
            </text>
          </svg>
        </div>
        <h5 className="product_name">Dairy Milk</h5>
          <p className="warehouse_text">Available : 10 boxes </p> 
          <button className="order_button">Order</button>
          {/* put variable at the place of 10 boxes */}
        </div>



        <div className="product_card">
            <div className="circles">
          <svg width="200" height="200">
            <g transform="rotate(-90 100 100)">
              <circle 
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="lightgrey"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="0"
              ></circle>
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="#0C356A"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="66"
              ></circle>
            </g>
            <text
              x="50%"
              y="50%"
              dominant-baseline="central"
              text-anchor="middle"
            >
              85%
            </text>
          </svg>
        </div>
        <h5 className="product_name">Dairy Milk</h5>
          <p className="warehouse_text">Available : 10 boxes </p> 
          <button className="order_button">Order</button>
          {/* put variable at the place of 10 boxes */}
        </div>



        <div className="product_card">
            <div className="circles">
          <svg width="200" height="200">
            <g transform="rotate(-90 100 100)">
              <circle 
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="lightgrey"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="0"
              ></circle>
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="#0C356A"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="66"
              ></circle>
            </g>
            <text
              x="50%"
              y="50%"
              dominant-baseline="central"
              text-anchor="middle"
            >
              85%
            </text>
          </svg>
        </div>
        <h5 className="product_name">Dairy Milk</h5>
          <p className="warehouse_text">Available : 10 boxes </p> 
          <button className="order_button">Order</button>
          {/* put variable at the place of 10 boxes */}
        </div>


        <div className="product_card">
            <div className="circles">
          <svg width="200" height="200">
            <g transform="rotate(-90 100 100)">
              <circle 
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="lightgrey"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="0"
              ></circle>
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="#0C356A"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="66"
              ></circle>
            </g>
            <text
              x="50%"
              y="50%"
              dominant-baseline="central"
              text-anchor="middle"
            >
              85%
            </text>
          </svg>
        </div>
        <h5 className="product_name">Dairy Milk</h5>
          <p className="warehouse_text">Available : 10 boxes </p> 
          <button className="order_button">Order</button>
          {/* put variable at the place of 10 boxes */}
        </div>


        <div className="product_card">
            <div className="circles">
          <svg width="200" height="200">
            <g transform="rotate(-90 100 100)">
              <circle 
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="lightgrey"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="0"
              ></circle>
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="#0C356A"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="66"
              ></circle>
            </g>
            <text
              x="50%"
              y="50%"
              dominant-baseline="central"
              text-anchor="middle"
            >
              85%
            </text>
          </svg>
        </div>
        <h5 className="product_name">Dairy Milk</h5>
          <p className="warehouse_text">Available : 10 boxes </p> 
          <button className="order_button">Order</button>
          {/* put variable at the place of 10 boxes */}
        </div>


        <div className="product_card">
            <div className="circles">
          <svg width="200" height="200">
            <g transform="rotate(-90 100 100)">
              <circle 
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="lightgrey"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="0"
              ></circle>
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="#0C356A"
                stroke-width="10px"
                stroke-dasharray="439.8"
                stroke-dashoffset="66"
              ></circle>
            </g>
            <text
              x="50%"
              y="50%"
              dominant-baseline="central"
              text-anchor="middle"
            >
              85%
            </text>
          </svg>
        </div>
        <h5 className="product_name">Dairy Milk</h5>
          <p className="warehouse_text">Available : 10 boxes </p> 
          <button className="order_button">Order</button>
          {/* put variable at the place of 10 boxes */}
        </div>
        
      </div>
    </div>
  );
};

export default CountTrack;
