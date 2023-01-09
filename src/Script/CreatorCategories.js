import React from "react";
// CSS imports
import "../Css/main.css";
import "../Css/loggedIn/topBar.css";
import "../Css/loggedIn/mainContentLoggedIn.css";


function CreatorCategories(props) {

  if (props.category === "null") { 
    var category = "General";
  } else if (props.category === "commonCore") {
      var category = "Common Core";
  } else if (props.category === "websiteDesign") {
      var category = "Website Design";
  } else if (props.category === "Language") {
      var category = "Common Core";
  } else if (props.category === "onlineBusiness") {
      var category = "Online Business";
  } else if (props.category === "designing") {
      var category = "Designing";
  }
    // here we will pass back the catagory to database, and it will pass back all the 
    // sessions that are in that catagory
    return (
      <div class="mainContentLoggedIn">
    
        <div> Reccomended {category} Sessions </div>
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
}

export default CreatorCategories;