//LoggedInHomePage.jsx
import React, { useState, useEffect } from "react";
import getSessions from "./backendAPI.js";
import pb from "Backend/pocketbase";
import UseBottomBar from "../HtmlHooks/UseBottomBar";
import TopBarLoggedIn from "../HtmlHooks/UseTopBarLoggedIn";
import UseTopBarLoggedOut from "../HtmlHooks/UseTopBarLoggedOut.js";
import "../Css/loggedIn/mainContentLoggedIn.css";
import UseMentorSessions from "../JSHooks/UseMentorSessions";

//This Function needs to be a hook

export default function Search() {
  const isLoggedIn = pb.authStore.isValid;
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    setSessions(getSessions());
  }, []);

  return (
    <div class="mainWrapper">
      <div>
        {isLoggedIn && <TopBarLoggedIn />}
        {!isLoggedIn && <UseTopBarLoggedOut />}
      </div>
      <div class="mainContentLoggedIn">
        <UseMentorSessions sessions={sessions} />
      </div>
      <UseBottomBar />
    </div>
  );
}
