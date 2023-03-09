//SignUpPage.jsx

import React from "react";
import { useState } from "react";
import GoogleButton from "../Script/GoogleButton";
import "../Css/loggedOut/SignUpPage.css";
import logo from "../Images/logo.svg";
import { useForm } from "react-hook-form";
import pb from "../Backend/pocketbase.js";

export default function Auther() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setLoading] = useState(false);

  async function login(data) {
    setLoading(true);
    const authData = await pb
      .collection("users")
      .authWithPassword(data.username, data.email, data.password);
    setLoading(false);
  }

  return (
    <div class="mainWrapper">
      <div class="topBar-SignIn-UpPage">
        <div class="topPanel">
          <div class="logoSignIn-UpPage">
            <img src={logo} class="logoImg" alt="missing logo" />
          </div>
        </div>
      </div>
      <form class="signUpContainer" onSubmit={handleSubmit(login)}>
        <h2 class="signUpText">Sign Up</h2>
        <div class="userInputSignUpContainer">
          <input
            type="text"
            placeholder="username"
            class="userInputSignUp"
            {...register("username", { required: true })}
          />
        </div>
        <div class="userInputSignUpContainer">
          <input
            type="text"
            placeholder="email"
            class="userInputSignUp"
            {...register("email", { required: "This is Required" })}
          />
        </div>
        <div class="userInputSignUpContainer">
          <input
            type="password"
            placeholder="password"
            class="userInputSignUp"
            {...register("password")}
          />
        </div>
        <div class="userInputSignUpContainer">
          <input
            type="password"
            placeholder="Re-Enter Password"
            class="userInputSignUp"
          />
        </div>
        <div class="userInputSignUpContainer-checkBox">
          <input type="checkbox" class="userInputSignUp-checkBox" />
          <label for="remember-me">Remember me</label>
        </div>
        <div class="userInputSignUpContainer-checkBox">
          <input type="checkbox" class="userInputSignUp-checkBox" />
          <label for="Newsletter">
            Would you like to sign up for our Newsletter?
          </label>
        </div>
        <button
          type="submit"
          value="Continue"
          class="signUpContinue"
          disabled={isLoading}
        >
          {isLoading ? "Loading" : "Continue"}
        </button>
        <div class="bottomTexth1Container">
          <a href="/SignInPage">
            Already have an account?
            <a href="/SignInPage" class="bottomTexth1-clickHere">
              Click Here
            </a>
          </a>
        </div>
      </form>
    </div>
  );
}
