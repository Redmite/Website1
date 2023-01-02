
import React from "react";
// CSS imports
import "../Css/main.css";
import "../Css/loggedIn/topBar.css";
import "../Css/loggedIn/mainContentLoggedIn.css";

// home page function, this is what we actually see
function  LoggedInHomePage() {
    return (
    
    <div class="mainWrapper">
            <div class="topBar-LoggedIn">
                    <div class="logo"><img src="logo.png" class="logoImg" alt="missing logo" /></div>
                    <form class="topSearch" action="#news">
                    <input type="text" placeholder="What skill do you want to learn?" class="searchBar"/>
                    </form>
                    <div class="topBar-LoggedInRightSide">
                        <li class="topBarCoach"><a>Creator</a></li>
                        <li class="topBarOrders"><a>Orders</a></li>
                        <li class="topBarSchedule"><a>Schedule</a></li>
                        <li class="topBarInbox"><img src="inbox.svg" class="topBarInboximg"></img></li>
                        <li class="topBarAccountProfile"><a href="#news"><img src="placeHolder.jpg" class="topBarAccountProfileImg"></img></a></li>
                    </div></div>
            <div class="mainContentLoggedIn">
                <div> Reccomended Categories</div>
                <div class="reccomendedCategories">
                        <li class="reccomendedCategoriesPanel"></li>
                        <li class="reccomendedCategoriesPanel"></li>
                        <li class="reccomendedCategoriesPanel"></li>
                        <li class="reccomendedCategoriesPanel"></li>
                        <li class="reccomendedCategoriesPanel"></li>
                    </div>
                    <div> Reccomended Coaching Sessions</div>
                    <div class="reccomendedCoachSession">
                        <li class="reccomendedCoachSessionPanel"></li>
                        <li class="reccomendedCoachSessionPanel"></li>
                        <li class="reccomendedCoachSessionPanel"></li>
                        <li class="reccomendedCoachSessionPanel"></li>
                        <li class="reccomendedCoachSessionPanel"></li>
                    </div> 
                    <div> Reccomended Creators Sessions</div>
                    <div class="reccomendedCreators">
                        <li class="reccomendedCreatorsPanel"></li>
                        <li class="reccomendedCreatorsPanel"></li>
                        <li class="reccomendedCreatorsPanel"></li>
                        <li class="reccomendedCreatorsPanel"></li>
                        <li class="reccomendedCreatorsPanel"></li>
                    </div> 
                </div>
                <div class="bottomBar"></div>
        <script></script></div>
    ); 
}

export default LoggedInHomePage;