import React from 'react';
// CSS imports
import "../Css/loggedIn/mainContentLoggedIn.css";
import "../Css/main.css";

// images
import hispanicManSmiling from "../Images/hispanicManSmiling.JPG";
import espanol from "../Images/espanol.webp";
import ratings from "../Images/FakeRatings.JPG";
// import whatever line to get the data from the database





function SessionTemplate(props) {
  return (
    <a className="reccomendedMentorSessionPanel" href="/PlaceholderSession">
      <div className="reccomendedMentorSessionPanel-topSection">
        <a>
          <img
            className="reccomendedMentorSessionPanel-img"
            src={props.sessionImg}
          ></img>
        </a>
      </div>
      <div className="reccomendedMentorSessionPanel-bottomSection">
        <div className="reccomendedMentorSessionPanel-titleCreatorContainer">
          <a className="reccomendedMentorSessionPanel-title">
            {props.sessionTitle}
          </a>
          <a className="reccomendedMentorSessionPanel-creatorImgContainer">
            <img
              className="reccomendedMentorSessionPanel-creatorImg"
              src={props.creatorProfileImg}
            ></img>
          </a>
        </div>
        <div className="reccomendedMentorSessionPanel-Description">
          {props.sessionDescription}
        </div>
      </div>
      <div className="reccomendedMentorSessionPanel-paymentMethods">
        <img src={props.ratings}></img>
        <a href="/SignUpPage" id="join-button" className="bookButton">
          Book
        </a>
      </div>
    </a>
  );
}

export default SessionTemplate;
