//SignUpPage.jsx

import React from "react";
import { useState } from "react";
import GoogleButton from "../Script/GoogleButton";
import { saveData, getData } from "../Script/database.js";

import "../Css/loggedOut/SignUpPage.css";
import logo from "../Images/logo.svg";

var info = [];

function SignUpPage() {
  const [first, setFirst] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [remember, setRemember] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const handleFirst = (event) => {
    setFirst(event.target.value);
  };

  const handleUser = (event) => {
    setUser(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordCheck = (event) => {
    setPasswordCheck(event.target.value);
  };

  const handleRemember = (event) => {
    setRemember(event.target.checked);
  };

  const handleNewsletter = (event) => {
    setNewsletter(event.target.checked);
  };

  const submitInfo = (e) => {
    e.preventDefault();

    const data = {
      first: first,
      user: user,
      email: email,
      password: password,
      passwordCheck: passwordCheck,
      remember: remember,
      newsletter: newsletter,
    };

    saveData(data);

    console.log(getData());
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
        <h2 class="signUpText">Sign Up</h2>
        <div class="userInputSignUpContainer">
          <input
            type="text"
            id="First-Name"
            placeholder="First Name"
            onChange={handleFirst}
            value={first}
            class="userInputSignUp"
          />
        </div>
        <div class="userInputSignUpContainer">
          <input
            type="text"
            id="Username"
            placeholder="Username"
            onChange={handleUser}
            value={user}
            class="userInputSignUp"
          />
        </div>
        <div class="userInputSignUpContainer">
          <input
            type="text"
            id="email"
            placeholder="Email"
            onChange={handleEmail}
            value={email}
            class="userInputSignUp"
          />
        </div>
        <div class="userInputSignUpContainer">
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handlePassword}
            value={password}
            class="userInputSignUp"
          />
        </div>
        <div class="userInputSignUpContainer">
          <input
            type="password"
            id="passwordCheck"
            placeholder="Re-Enter Password"
            onChange={handlePasswordCheck}
            value={passwordCheck}
            class="userInputSignUp"
          />
        </div>
        <div class="userInputSignUpContainer-checkBox">
          <input
            type="checkbox"
            id="remember-me"
            onChange={handleRemember}
            value={remember}
            class="userInputSignUp-checkBox"
          />
          <label for="remember-me">Remember me</label>
        </div>
        <div class="userInputSignUpContainer-checkBox">
          <input
            type="checkbox"
            id="Newsletter"
            onChange={handleNewsletter}
            value={newsletter}
            class="userInputSignUp-checkBox"
          />
          <label for="Newsletter">
            Would you like to sign up for our Newsletter?
          </label>
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
          <a href="/SignInPage">
            Already have an account?
            <a href="/SignInPage" class="bottomTexth1-clickHere">
              Click Here
            </a>
          </a>
        </div>
        <div class="form-element">
          <GoogleButton />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
