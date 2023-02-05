import React from "react";
import { useState } from "react";
import GoogleButton from "../Script/GoogleButton";

import "../Css/loggedOut/SignUpPage.css";
import logo from "../images/logo.svg";
var info = [];

function SignInPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [remember, setRemember] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleRemember = (e) => {
    const checked = e.target.checked;
    checked ? setRemember(true) : setRemember(false);
  };
  const submitInfo = () => {
    info = [email, password, remember];
    // some line to submit it to the database
    // maybe a return boolean
    // if (passed === true) {
    //   window.location.href = "/LoggedInHomePage";
    // } else {
    //   document.getElementById("error").innerHTML = "Incorrect email or password";
    // }
    // if true, then redirect to the logged in page
    // if false then display an error message
  };
  return (
    <div class="mainWrapper">
      <div class="topBar-SignIn-UpPage">
        <div class="topPanel">
          <div class="logoSignIn-UpPage">
            <img src={logo} class="logoImg" alt="missing logo" />
          </div>
        </div>
      </div>
      <div class="signUpContainer">
        <h2 class="signUpText">Log in</h2>
        <div class="userInputSignUpContainer">
          <input
            type="text"
            id="email"
            placeholder="Enter Email"
            onChange={handleEmail}
            value={email}
            class="userInputSignUp"
          />
        </div>
        <div class="userInputSignUpContainer">
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            onChange={handlePassword}
            value={password}
            class="userInputSignUp"
          />
        </div>
        <div class="userInputSignUpContainer">
          <input
            type="checkbox"
            id="remember-me"
            onChange={handleRemember}
            value={remember}
            class="userInputSignUp-checkBox"
          />
          <label for="remember-me">Remember me</label>
        </div>
        <div class="signUpContinueContainer">
          <input
            type="submit"
            value="Continue"
            onClick={submitInfo}
            class="signUpContinue"
          />
        </div>
        <div class="bottomTexth1Container">
          <li class="bottomTexth1">
            <a href="/placeholder">
              Forgot password?<br></br>
            </a>
          </li>

          <li class="bottomTexth1">
            <a href="/SignUpPage">Need an account?</a>
          </li>
        </div>
        <p id="error"></p>
      </div>
      <div class="form-element">
        <GoogleButton />
      </div>
    </div>
  );
}

export default SignInPage;
