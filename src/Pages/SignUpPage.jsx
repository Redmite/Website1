import React from "react";
import { useState } from "react";
import GoogleButton from "../Script/GoogleButton";

import "../Css/loggedOut/loginBox.css";

var info = [];

function SignUpPage () {

  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [remember, setRemember] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const handleFirst = event => {
    setFirst(event.target.value);
  };
  const handleLast = event => {
    setLast(event.target.value);
  };
  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };
  const handlePasswordCheck = event => {
    setPasswordCheck(event.target.value);
  };
  const handleRemember = (e) => {
    const checked = e.target.checked;
    checked ? setRemember(true) : setRemember(false);
  };
  const handleNewsletter = (e) => {
    const checked = e.target.checked;
    checked ? setNewsletter(true) : setNewsletter(false);
  };
  const submitInfo = () => {
    var passCheck = (password === passwordCheck);

    info = [first, last, email, password, remember, newsletter];
    
    // passCheck ? submit info : display error message

    // some line to submit it to the database
    // maybe a return boolean
    // if true, then redirect to the logged in page
    // if false then display an error message
  };
  return (
    <>
    <div class="SignupWrapper"> 
      <div class="SignupContainer">
        <div class="UpPopup">
          <div class="form">
            <h2>Sign Up</h2>
            <div class="form-element">
              <label for="First-Name">First Name</label>
              <input type="text" id="First-Name" placeholder="Enter First Name" onChange={handleFirst} value={first}/>
            </div>
            <div class="form-element">
              <label for="Last-Name">Last Name</label>
              <input type="text" id="Last-Name" placeholder="Enter Last Name" onChange={handleLast} value={last}/>
            </div>
            <div class="form-element">
              <label for="email">Email</label>
              <input type="text" id="email" placeholder="Enter Email" onChange={handleEmail} value={email}/>
            </div>
            <div class="form-element">
              <label for="password">Password</label>
              <input type="password" id="password" placeholder="Enter Password" onChange={handlePassword} value={password}/>
             </div>
             <div class="form-element">
              <label for="passwordCheck">Re-enter your password</label>
              <input type="password" id="passwordCheck" placeholder="Re-enter Password" onChange={handlePasswordCheck} value={passwordCheck}/>
             </div>
            <div class="form-element">
              <input type="checkbox" id="remember-me" onChange={handleRemember} value={remember}/>
              <label for="remember-me">Remember me</label>
            </div>
            <div class="form-element">
              <input type="checkbox" id="Newsletter" onChange={handleNewsletter} value={newsletter}/>
              <label for="Newsletter">Would you like to sign up for our Newsletter?</label>
            </div>
            <div class="form-element">
              <input type="submit" value="Continue" onClick={submitInfo}/>
            </div>
            <div class="form-element">
              <a href="/SignInPage">Already have an account?</a>
            </div>
            <div class="form-element">
              <GoogleButton />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUpPage;