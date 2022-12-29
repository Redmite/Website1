import React from 'react';
import ReactDOM from 'react-dom/client';

// this file is in the src because react won't start unless we have it in a src folder in website1
// from what I've seen we could eject the webpack and make changes so it will start in the public/script folder
// but I'm not completely sure what I'm doing and want to check in with the rest of you before I do anything like that

const root = ReactDOM.createRoot(document.getElementById('root'));

const aElement = <p> this is being rendered to the website using react</p>

root.render(aElement)

// a lot of the commented out code is from me, Henry, and probably doesn't work, I'm just keeping it around just in case

// import './loginBox.css';
// const loginPopup = (
//     <div className="center">
//         <p>test</p>
//         <form>
//             <label for="username">Username:</label>
//             <label for="password">Password:</label>

//             <input type="text" id="username" name="username"></input>
//         </form>
//     </div>
// )

// function logPopup() {
//     root.render(logPopup);
// }




