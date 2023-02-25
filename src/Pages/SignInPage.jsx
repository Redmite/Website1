import React from "react";
import { useState } from "react";
import GoogleButton from "../Script/GoogleButton";
import "../Css/loggedOut/SignUpPage.css";
import logo from "../Images/logo.svg";
import { useForm } from "react-hook-form";
import pb from "../Backend/UIM.js";

export default function Auth() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setLoading] = useState(false);
  const isLoggedIn = pb.authStore.isValid;
  const [dummy, setDummy] = useState(0);

  async function login(data) {
    setLoading(true);
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(data.email, data.password);
    } catch (e) {
      alert(e);
    }
    setLoading(false);
  }
  function logout() {
    pb.authStore.clear();
    setDummy(Math.random);
  }
  if (isLoggedIn)
    return (
      <>
        <h1>Logged In: {pb.authStore.model.email}</h1>
        <button onClick={logout}>Log Out</button>
      </>
    );
  return (
    <div class="mainWrapper">
      <h1> Logged In: {isLoggedIn && pb.authStore.model.email}</h1>
      {isLoading && <p>Loading...</p>}
      <div class="topBar-SignIn-UpPage">
        <div class="topPanel">
          <div class="logoSignIn-UpPage">
            <img src={logo} class="logoImg" alt="missing logo" />
          </div>
        </div>
      </div>
      <form class="signUpContainer" onSubmit={handleSubmit(login)}>
        <h2 class="signUpText">Log in</h2>
        <div class="userInputSignUpContainer">
          <input
            type="text"
            placeholder="email"
            class="userInputSignUp"
            {...register("email")}
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
            type="checkbox"
            id="remember-me"
            class="userInputSignUp-checkBox"
          />
          <label for="remember-me">Remember me</label>
        </div>
        <div class="signUpContinueContainer">
          <button
            type="submit"
            value="Continue"
            class="signUpContinue"
            disabled={isLoading}
          >
            {isLoading ? "Loading" : "Continue"}
          </button>
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
      </form>
      <div class="form-element">
        <GoogleButton />
      </div>
    </div>
  );
}
