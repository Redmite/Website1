//LoggedInHomePage.jsx

import React, { useState, useEffect } from "react";
import getSessions from "./backendAPI.js";
import BottomBar from "../Script/BottomBar";
import SessionTemplate from "../Script/creatorSessionTemplate";
import TopBarLoggedIn from "../Script/TopBarLoggedIn";
import "../Css/loggedIn/mainContentLoggedIn.css";

function RecommendedMentorSessions({ sessions }) {
  const [numSessionsPerRow, setNumSessionsPerRow] = useState(4);
  const numSessions = sessions.length;
  const numRows = Math.ceil(numSessions / numSessionsPerRow);

  const rows = [];
  for (let i = 0; i < numRows; i++) {
    const start = i * numSessionsPerRow;
    const end = Math.min(start + numSessionsPerRow, numSessions);
    const rowSessions = sessions.slice(start, end);

    const row = (
      <div key={i} className="recommendedMentorSession">
        {rowSessions.map((session) => (
          <SessionTemplate
            key={session.id}
            sessionImg={session.sessionImg}
            creatorProfileImg={session.creatorProfileImg}
            sessionTitle={session.title}
            sessionDescription={session.Description}
          />
        ))}
      </div>
    );

    rows.push(row);
  }

  return <div className="recommendedMentorSessions">{rows}</div>;
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
        <div class="reccomendedMentorText">Recommended Mentors</div>
        <RecommendedMentorSessions sessions={sessions} />
      </div>
      <BottomBar />
    </div>
  );
}

export default LoggedInHomePage;
