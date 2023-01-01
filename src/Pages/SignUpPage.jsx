import React from "react";

//import "../Css/loginBox.css";

function SignInUpPage () {
  return (
    <>
    <div class="SignupWrapper"> 
      <div class="SignupContainer">
        <div class="UpPopup">
          <div class="close-btn">&times;</div>
          <div class="form">
            <h2>Sign Up</h2>
            <div class="form-element">
              <label for="First-Name">First-Name</label>
              <input type="text" id="First-Name" placeholder="Enter First Name"/>
            </div>
            <div class="form-element">
              <label for="Last-Name">Email</label>
              <input type="text" id="Last-Name" placeholder="Enter Last Name"/>
            </div>
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
              <a href="/placeholder">Forgot password?</a>
              <a href="/SignInPage"l>Alreadly have an account?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    );
};

export default SignInUpPage;