
import React from "react";
// CSS imports
import "../Css/loggedOut/greetingPanel.css";
import "../Css/loggedOut/loginBox.css";
import "../Css/main.css";
import "../Css/loggedOut/popularServices.css";
import "../Css/loggedIn/topBar.css";

// home page function, this is what we actually see
LoggedInHomePage()
function  LoggedInHomePage() {
    return (
    
    <div class="mainWrapper">
            <div class="topBar">
                    <div class="logo"><img src="logo.png" class="logoImg" alt="missing logo" /></div>
                    <form action="#news">
                    <input type="text" placeholder="What skill do you want to learn?" class="searchBar"/>
                    <button type="submit"><i class="submitSearchForm">Search</i></button>
                    </form>
        </div><script src="src/Script/LoginScript.js"></script></div>
    );
}

export default LoggedInHomePage;