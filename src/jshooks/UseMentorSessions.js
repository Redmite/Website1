import React, { useState } from "react";
import SessionTemplate from "./UseCreatorSessionTemplate.js";

export default function UseMentorSessions({ sessions }) {
  const [numSessionsPerRow] = useState(4);
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