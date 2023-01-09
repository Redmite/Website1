import React from "react";
// CSS imports
import "../Css/main.css";
import "../Css/loggedIn/topBar.css";
import "../Css/loggedIn/mainContentLoggedIn.css";

function CreatorCategories(props) {
  { if (props.category === "null") {
    return (
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
        <div> Reccomended Creators</div>
        <div class="reccomendedCreators">
          <li class="reccomendedCreatorsPanel"></li>
          <li class="reccomendedCreatorsPanel"></li>
          <li class="reccomendedCreatorsPanel"></li>
          <li class="reccomendedCreatorsPanel"></li>
          <li class="reccomendedCreatorsPanel"></li>
        </div>
      </div>
    );
  } else {
    return (
      <div class="mainContentLoggedIn">
    
        <div> Reccomended {props.category}</div>
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
        <div> Reccomended Creators</div>
        <div class="reccomendedCreators">
          <li class="reccomendedCreatorsPanel"></li>
          <li class="reccomendedCreatorsPanel"></li>
          <li class="reccomendedCreatorsPanel"></li>
          <li class="reccomendedCreatorsPanel"></li>
          <li class="reccomendedCreatorsPanel"></li>
        </div>
      </div>
    );
  }};
}

export default CreatorCategories;