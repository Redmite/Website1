import React from "react";
import placeHolder from "../Images/placeHolder.jpg";
import { useForm } from "react-hook-form";
import "Css/loggedIn/listingCreation.css";
import TopBarLoggedIn from "../HtmlHooks/UseTopBarLoggedIn";

export default function ListingCreation() {
  const { register, handleSubmit } = useForm();
  const onSubmitSessionData = (sessionData) => console.log(sessionData);

  return (
    <div className="mainWrapper">
      <TopBarLoggedIn />
      <form
        className="listingForm"
        onSubmit={handleSubmit(onSubmitSessionData)}
      >
        <h1>Posting your Mentorship Opportunity</h1>
        <div className="formRow-ProfileImg">
          <label className="labelMentorshipTxt">Mentorship Cover Image</label>
          <input
            type="image"
            alt=""
            className="imageInput"
            src={placeHolder}
            {...register("imageSession")}
          ></input>
        </div>
        <div className="formRow">
          <label>Short Description</label>
          <textarea
            className="shortDescription"
            placeholder="Make sure to include keywords"
            maxLength={80}
            {...register("shortDescription")}
          ></textarea>
        </div>
        <div className="formRow">
          <label>Hourly Rate</label>
          <input
            type="number"
            {...register("hourlyRate")}
            className="hourlyRate"
          ></input>
        </div>
        <div className="formRow">
          <label>Full Description</label>
          <textarea
            className="fullDescription"
            placeholder="A full overview of your course"
            maxLength={5000}
            {...register("fullDescription")}
          ></textarea>
        </div>
      </form>
    </div>
  );
}
