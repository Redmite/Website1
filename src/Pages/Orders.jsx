import React from "react";
import "../Css/loggedIn/Orders.css";
import TopBarLoggedIn from "../HtmlHooks/UseTopBarLoggedIn";
import UseBottomBar from "HtmlHooks/UseBottomBar";
import { orders } from "Pages/backendAPIOrders";

export default function OrderPage() {
  return (
    <div className="mainWrapper">
      <div>
        <TopBarLoggedIn />
      </div>
      <div className="orderContainer">
        <div className="orderLegend">
          <p className="orderLegendName">Orders</p>
          <p className="orderLegendInfo">ORDER DATE</p>
          <p className="orderLegendInfo">TOTAL</p>
        </div>
        <div className="activeOrderContainer">
          {orders.map((order) => (
            <div key={order.id} className="order">
              <a className="orderDescription">{order.shortDescription}</a>
              <p className="orderInfo">{order.date}</p>
              <p className="orderInfo">{order.total}</p>
            </div>
          ))}
        </div>
      </div>
      <UseBottomBar />
    </div>
  );
}
