import React from "react";

//import "./Css/loginBox.css";

function SignInUpPage () {
    return (
    <>
    <div class="LoginWrapper"> 
      <div class="LoginContainer">
        <div class="LogPopup">
          <div class="close-btn">&times;</div>
          <div class="form">
            <h2>Log in</h2>
            <div class="form-element">
              <label for="email">Email</label>
              <input type="text" id="email" placeholder="Enter Email"/>
            </div>
            <div class="form-element">
              <label for="password">Password</label>
              <input type="password" id="password" placeholder="Enter Password"/>
             </div>
            <div class="form-element">
              <input type="checkbox" id="remember-me"/>
              <label for="remember-me">Remember me</label>
            </div>
            <div class="form-element">
              <input type="submit" value="Continue"/>
            </div>
            <div class="form-element">
              <a href="#placeholder">Forgot password?</a>
              <a href="#SignUp.html">Need an account?</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="SignupWrapper"> 
      <div class="SignupContainer">
        <div class="UpPopup">
          <div class="close-btn">&times;</div>
          <div class="form">
            <h2>Sign Up</h2>
            <div class="form-element">
              <label for="email">Email</label>
              <input type="text" id="email" placeholder="Enter Email"/>
            </div>
            <div class="form-element">
              <label for="password">Password</label>
              <input type="password" id="password" placeholder="Enter Password"/>
             </div>
            <div class="form-element">
              <input type="checkbox" id="remember-me"/>
              <label for="remember-me">Remember me</label>
            </div>
            <div class="form-element">
              <input type="submit" value="Continue"/>
            </div>
            <div class="form-element">
              <a href="#placeholder">Forgot password?</a>
              <button class="signIn" id="show-SignUp">Need an account?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    );
}

export default SignInUpPage