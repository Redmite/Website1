import React, { useEffect, useState } from "react";
import "../Css/loggedIn/Messages.css";
import pb from "Backend/pocketbase";
import TopBarLoggedIn from "../HtmlHooks/UseTopBarLoggedIn";
import UseTopBarLoggedOut from "../HtmlHooks/UseTopBarLoggedOut.js";
import UseBottomBar from "HtmlHooks/UseBottomBar";
import mockBackendData from "Pages/backendAPIMessages";
import { useForm } from "react-hook-form";

export default function MessagesPage() {
  const { register, handleSubmit } = useForm();
  const isLoggedIn = pb.authStore.isValid;
  const [users, setUsers] = useState([]);
  const onSubmitTextMessageData = (textMessageFormData) =>
    console.log(textMessageFormData);

  useEffect(() => {
    // retrieve user data from mock backend file
    const fetchData = async () => {
      const result = await mockBackendData.getUsers();
      setUsers(result);
    };
    fetchData();
  }, []);

  return (
    <div className="mainWrapper">
      <div>
        {isLoggedIn && <TopBarLoggedIn />}
        {!isLoggedIn && <UseTopBarLoggedOut />}
      </div>
      <div className="messagesWrapper">
        <div className="usersContainer">
          {users.map((user) => (
            <div className="userMessage" key={user.id}>
              <img src={user.image} className="userImg" alt="user avatar" />
              <p>{user.username}</p>
            </div>
          ))}
        </div>
        <div className="messageInputContainer">
          <div className="messagesContainer"></div>
          <form
            className="messageForm"
            onSubmit={handleSubmit(onSubmitTextMessageData)}
          >
            <textarea
              {...register("textMessage")}
              className="textContainer"
            ></textarea>
            <button placeholder="" className="send" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      <UseBottomBar />
    </div>
  );
}
