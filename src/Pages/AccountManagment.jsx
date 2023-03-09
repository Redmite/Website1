import React from "react";
import "../Css/loggedIn/AccountManagment.css";
import { useForm } from "react-hook-form";
import TopBarLoggedIn from "../HtmlHooks/UseTopBarLoggedIn";
import placeHolder from "../Images/placeHolder.jpg";

export default function AccountManager() {
  const { register, handleSubmit } = useForm();
  const onSubmitUserAccData = (userFormData) => console.log(userFormData);
  const onSubmitSecruityData = (SecruityFormData) =>
    console.log(SecruityFormData);

  return (
    <div className="mainWrapper">
      <TopBarLoggedIn />
      <form className="userForm" onSubmit={handleSubmit(onSubmitUserAccData)}>
        <h1>User Managment</h1>
        {/*
          Set the placeholder for both email and username be the current
          Username or email of said user       
        */}
        <div className="formRow">
          <label>Profile Picture</label>

          <input
            type="image"
            alt="ProfilePicture"
            placeholder=""
            className="formImage"
            src={placeHolder}
            {...register("image")}
          ></input>
        </div>
        <div className="formRow">
          <label>Username</label>

          <input
            type="text"
            placeholder=""
            className="textInput"
            {...register("username")}
          ></input>
        </div>
        <div className="formRow">
          <label>Email</label>
          <input
            type="text"
            placeholder=""
            className="textInput"
            {...register("email")}
          ></input>
        </div>
        <div className="formRowSave"></div>
      </form>

      <form className="userForm" onSubmit={handleSubmit(onSubmitSecruityData)}>
        <h1>Security</h1>
        <div className="formRow">
          <label>Password</label>
          <input
            type="password"
            placeholder=""
            className="textInput"
            {...register("password")}
          ></input>
        </div>
        <div className="formRow">
          <label>Re-enter Password</label>
          <input
            type="password"
            placeholder=""
            className="textInput"
            {...register("re-enterPassword")}
          ></input>
        </div>
        <div className="formRow">
          {/*
          Send email using SendInBlue for now (free testing email server)
          https://www.sendinblue.com/
        */}
          <label>Email Verification</label>
          <button className="verify" {...register("verifyEmail")}>
            Verify Now
          </button>
        </div>
        <div className="formRowSave">
          <button placeholder="" className="save" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
