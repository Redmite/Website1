import React from 'react';
import ReactDOM from 'react-dom/client';

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
const root = ReactDOM.createRoot(document.getElementById('root'));

const aElement = <p> this is being rendered to the website using react</p>

root.render(aElement)

// function logPopup() {
//     root.render(logPopup);
// }




