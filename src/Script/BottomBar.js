import React from 'react';

import "../Css/bottomBar.css";

import facebook from "../Images/facebook.svg";
import tiktok from "../Images/tiktok.svg";
import instagram from "../Images/instagram.svg";
import twitter from "../Images/twitter.svg";

function BottomBar() {
  return (
    <div class="bottomBar">
        <div class="bottomBarFlexContainer">
          <div class="bottomBarContentContainer">
            <li>
              <a class="bottomBarContentLinks" href="#">Privacy Policy</a>
            </li>
          </div>
          <div class="bottomBarContentContainer">
            <li>
              <a class="bottomBarContentLinks" href="#">Terms of Service</a>
            </li>
          </div>
          <div class="bottomBarContentContainer">
            <li>
              <a class="bottomBarContentLinks" href="#">Help & Support</a>
            </li>
          </div>
          <div class="bottomBarContentContainer">
            <li>
              <a class="bottomBarContentLinks" href="#">Contact Us</a>
            </li>
          </div>
        </div>
        <div class="followUsText">
          <center>Follow Us</center>
        </div>
        <div class="socialMediaContainer">
          <li class="socialMediaButtons">
            <a>
              <img src={twitter} class="socialMediaButtonImg"></img>
            </a>
          </li>
          <li class="socialMediaButtons">
            <a>
              <img src={instagram} class="socialMediaButtonImg"></img>
            </a>
          </li>
          <li class="socialMediaButtons">
            <a>
              <img src={tiktok} class="socialMediaButtonImg"></img>
            </a>
          </li>
          <li class="socialMediaButtons">
            <a>
              <img src={facebook} class="socialMediaButtonImg"></img>
            </a>
          </li>
        </div>
      </div>
  )
}

export default BottomBar;