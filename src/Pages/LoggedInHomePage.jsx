//LoggedInHomePage.jsx
import React, { useState, useEffect } from "react";
import getSessions from "./backendAPI.js";
import UseBottomBar from "../jshooks/BottomBar";
import TopBarLoggedIn from "../jshooks/TopBarLoggedIn";
import "../Css/loggedIn/mainContentLoggedIn.css";
import UseMentorSessions from "../jshooks/UseMentorSessions";

//This Function needs to be a hook

function LoggedInHomePage() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    setSessions(getSessions());
  }, []);

  return (
    <div class="mainWrapper">
      <TopBarLoggedIn />
      <div class="mainContentLoggedIn">
        <div class="reccomendedMentorText">Recommended Mentors</div>
        <UseMentorSessions sessions={sessions} />
      </div>
      <UseBottomBar />
    </div>
  );
}

export default LoggedInHomePage;
