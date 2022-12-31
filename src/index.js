import React from 'react';
import ReactDOM from 'react';
import ReactDOMClient from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import App from "./App";

// this file is in the src because react won't start unless we have it in a src folder in website1
// from what I've seen we could eject the webpack and make changes so it will start in the public/script folder
// but I'm not completely sure what I'm doing and want to check in with the rest of you before I do anything like that

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const aElement = HomePage

// root.render(aElement)

// 
// const router = createBrowserRouter ([
//   {
//     path: "/",
//     element: <HomePage />
//   }
// ]);



// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// ReactDOMClient.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider Router={router} />
//   </React.StrictMode>
// );

ReactDOMClient.createRoot(document.getElementById("root")).render(<App />);