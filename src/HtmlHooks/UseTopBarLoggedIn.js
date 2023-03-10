import React from 'react';

import "../Css/main.css";
import "../Css/loggedIn/topBar.css"
import "../Css/loggedOut/topBar.css"

import logo from "../Images/logo.svg";
import inbox from "../Images/inbox.svg";
import placeHolder from "../Images/placeHolder.jpg";

const TopBarLoggedIn = () => {
  return (
    <div className="topBar-LoggedIn">
      <a className="logo" href="https://gomentors.online/">
        <img src={logo} className="logoImg" alt="missing logo" />
      </a>
      <form className="topSearch" action="#news">
        <input
          type="text"
          placeholder="What skill do you want to learn?"
          className="searchBar"
        />
      </form>
      <div className="topBar-LoggedInRightSide">
        <li className="topBarCoach">
          <a href="/ListingCreationPage">Create Sessions</a>
        </li>
        <li className="topBarOrders">
          <a href="/Orders">Orders</a>
        </li>
        <li className="topBarSchedule">
          <a href='/Messages'>Messages</a>
        </li>
        <li className="topBarInbox">
          <a href="#news">
            <img src={inbox} className="topBarInboximg"></img>
          </a>
        </li>
        <li className="topBarAccountProfile">
          <a href="/AccountManagement">
            <img src={placeHolder} className="topBarAccountProfileImg"></img>
          </a>
        </li>
      </div>
    </div>
  );
};

export default TopBarLoggedIn;