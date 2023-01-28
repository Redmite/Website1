import React from 'react';

import "../Css/bottomBar.css";

function BottomBar() {
  return (
    <div class="bottomBar">
        <div class="bottomBarFlexContainer">
          <div class="bottomBarContentContainer">
            <li>
              <a>Privacy Policy</a>
            </li>
          </div>
          <div class="bottomBarContentContainer">
            <li>
              <a>Terms of Service</a>
            </li>
          </div>
          <div class="bottomBarContentContainer">
            <li>
              <a>Help & Support</a>
            </li>
          </div>
          <div class="bottomBarContentContainer">
            <li>
              <a>Contact Us</a>
            </li>
          </div>
        </div>
        <div class="followUsText">
          <center>Follow Us</center>
        </div>
        <div class="socialMediaContainer">
          <li class="socialMediaButtons">
            <a>
              <img src="tiktok.svg" class="socialMediaButtonImg"></img>
            </a>
          </li>
          <li class="socialMediaButtons">
            <a>
              <img src="twitter.svg" class="socialMediaButtonImg"></img>
            </a>
          </li>
          <li class="socialMediaButtons">
            <a>
              <img src="Instagram.svg" class="socialMediaButtonImg"></img>
            </a>
          </li>
          <li class="socialMediaButtons">
            <a>
              <img src="facebook.svg" class="socialMediaButtonImg"></img>
            </a>
          </li>
        </div>
      </div>
  )
}

export default BottomBar;