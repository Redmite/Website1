import React, { useState, useEffect } from "react";
import getSessions from "./backendAPI.js";
import BottomBar from "../Script/BottomBar";
import SessionTemplate from "../Script/creatorSessionTemplate";
import TopBarLoggedIn from "../Script/TopBarLoggedIn";

class RecommendedMentorSessions extends React.Component {
  render() {
    const { sessions } = this.props;

    return (
      <div>
        {sessions.map((session, index) => (
          <SessionTemplate
            key={session.id}
            sessionImg={session.sessionImg}
            creatorProfileImg={session.creatorProfileImg}
            sessionTitle={session.title}
          />
        ))}
      </div>
    );
  }
}

function LoggedInHomePage() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    setSessions(getSessions());
  }, []);

  return (
    <div class="mainWrapper">
      <TopBarLoggedIn />
      <div class="mainContentLoggedIn">
        <div class="reccomendedMentorText">Reccomended Mentors</div>
        <div class="reccomendedMentorSession">
          <RecommendedMentorSessions
            sessions={sessions}
            class="reccomendedMentorSessionPanel"
          />
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default LoggedInHomePage;

{
  /*<a class="reccomendedMentorSessionPanel" href="/PlaceholderSession">
            <div class="reccomendedMentorSessionPanel-topSection">
              <a>
                <img
                  class="reccomendedMentorSessionPanel-img"
                  src={espanol}
                ></img>
              </a>
            </div>
            <div class="reccomendedMentorSessionPanel-bottomSection">
              <div class="reccomendedMentorSessionPanel-titleCreatorContainer">
                <a class="reccomendedMentorSessionPanel-title">{Title}</a>
                <a class="reccomendedMentorSessionPanel-creatorImgContainer">
                  <img
                    class="reccomendedMentorSessionPanel-creatorImg"
                    src={hispanicManSmiling}
                  ></img>
                </a>
              </div>
              <div class="reccomendedMentorSessionPanel-Description">
                {Description} {/* this is where we will put the description
                </div>
                </div>
                <div class="reccomendedMentorSessionPanel-paymentMethods">
                  <img src={ratings}></img>
                  <a href="/SignUpPage" id="join-button" class="bookButton">
                    Book
                  </a>
                </div>
              </a>
            */
}
