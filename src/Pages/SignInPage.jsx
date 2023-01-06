import React from "react";
import { useState } from "react";

var info = []

function SignInPage() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [remember, setRemember] = useState(false);


  const handleEmail = event => {
    setEmail(event.target.value);
    console.log('value is:', event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
    console.log('value is:', event.target.value);
  };
  const handleRemember = event => {
    setRemember(event.target.value);
    console.log('value is:', event.target.value);
  };
  const submitInfo = () => {
    info = [email, password, remember]
    // some line to submit it to the database
    // maybe a return boolean
    // if true, then redirect to the logged in page
    // if false then display an error message
  };
  return (
    <div class="LoginWrapper"> 
      <div class="LoginContainer">
        <div class="LogPopup">
          <div class="form">
            <h2>Log in</h2>
            <div class="form-element">
              <label for="email">Email</label>
              <input type="text" id="email" placeholder="Enter Email" onChange={handleEmail} value={email} />
            </div>
            <div class="form-element">
              <label for="password">Password</label>
              <input type="password" id="password" placeholder="Enter Password" onChange={handlePassword} value={password}/>
             </div>
            <div class="form-element">
              <input type="checkbox" id="remember-me" onChange={handleRemember} value={remember}/>
              <label for="remember-me">Remember me</label>
            </div>
            <div class="form-element">
              <input type="submit" value="Continue" onChange={submitInfo}/>
            </div>
            <div class="form-element">
              <a href="/placeholder">Forgot password?</a>
              <a href="/SignUpPage">Need an account?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;