import React from "react";
import "Css/sessionPage.css";
import pb from "Backend/pocketbase";
import TopBarLoggedIn from "../HtmlHooks/UseTopBarLoggedIn";
import UseTopBarLoggedOut from "../HtmlHooks/UseTopBarLoggedOut.js";
import placeHolder from "../Images/placeHolder.jpg";
import UseBottomBar from "HtmlHooks/UseBottomBar";
import { useForm } from "react-hook-form";

export default function SessionPage(props) {
  const isLoggedIn = pb.authStore.isValid;
  const { register, handleSubmit } = useForm();
  const onSubmitPaymentData = (PaymentData) => console.log(PaymentData);
  return (
    <div className="mainWrapper">
      <div>
        {isLoggedIn && <TopBarLoggedIn />}
        {!isLoggedIn && <UseTopBarLoggedOut />}
      </div>
      <div className="sessionWrapper">
        <div className="container">
          <h1>
            {props.shortDescription}
            shortDescription
          </h1>
        </div>
        <div className="container">
          <img src={placeHolder} className="sessionImg" />
        </div>
        <div className="container-sessionImg-Payment">
          <div className="fullDescription">
            {props.fullDescription}fullDescription
          </div>
          {/*
          I have no idea how to do the order processing     
        */}
          <form
            className="paymentContainer"
            onSubmit={handleSubmit(onSubmitPaymentData)}
          >
            <p className="price">{props.hourlyRate}13$/hour</p>
            <input
              type="number"
              {...register("hoursBooked")}
              className="hoursBooked"
              placeholder="Hours"
            ></input>
            <button type="submit" class="signUpContinue">
              Book
            </button>
          </form>
        </div>
      </div>
      <UseBottomBar />
    </div>
  );
}
