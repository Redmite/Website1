import React from 'react';
import ReactDOM from 'react-dom/client';

// import './loginBox.css'; yes i know i'm a dumbass how the fuck do i import the css file
//a hgiosahip;
const loginPopup = (
    <div className="loginBox">
        <p>test</p>
        <form>
            <label for="username">Username:</label>
            <label for="password">Password:</label>

            <input type="text" id="username" name="username"></input>
        </form>
    </div>
)
// I just feel lost
const root = ReactDOM.createRoot(document.getElementById('root'));

function logPopup() {
    root.render(logPopup);
}




