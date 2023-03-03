import React from "react";
import CreatorCategories from "../Script/CreatorCategories";
// CSS imports
import "../Css/main.css";
import "../Css/loggedIn/topBar.css";
import "../Css/loggedOut/topBar.css";
import "../Css/loggedIn/mainContentLoggedIn.css";
// images
import logo from "../Images/logo.svg";

// home page function, this is what we actually see
import SearchBar from "../jshooks/UseSearchBar";
import UseTopBarLoggedOut from "../jshooks/UseTopBarLoggedOut.js";
function SearchLoggedOutPage(props) {
  return (
    <div class="mainWrapper">
      <div class="backgroundTopBar">
        <UseTopBarLoggedOut />
      </div>
      <CreatorCategories category={props.category} />
      <script></script>
    </div>
  );
}

export default SearchLoggedOutPage;
