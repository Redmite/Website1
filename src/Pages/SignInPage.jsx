import React from "react";
import GoogleButton from "../Script/GoogleButton";
import "../Css/loggedOut/SignUpPage.css";
import logo from "../Images/logo.svg";
import { useForm } from "react-hook-form";
import pb from "../Backend/UIM.js";
import useLogout from "jshooks/UseLogout";
import useLogin from "jshooks/useLogin";

export default function Auth() {
  const logout = useLogout();
  const { register, handleSubmit, reset } = useForm();
  const { mutate: login, isLoading, isError } = useLogin();
  const isLoggedIn = pb.authStore.isValid;

  async function onSubmit(data) {
    login({ email: data.email, password: data.password });
    reset();
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
      {isError && <p>Invalid email or password</p>}

      <div class="topBar-SignIn-UpPage">
        <div class="topPanel">
          <div class="logoSignIn-UpPage">
            <img src={logo} class="logoImg" alt="missing logo" />
          </div>
        </div>
      </div>
      <form class="signUpContainer" onSubmit={handleSubmit(onSubmit)}>
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
