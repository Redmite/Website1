import React from 'react';
import ReactDOMClient from 'react-dom/client';

import App from "./App.jsx";

// this file is in the src because react won't start unless we have it in a src folder in website1
// from what I've seen we could eject the webpack and make changes so it will start in the public/script folder
// but I'm not completely sure what I'm doing and want to check in with the rest of you before I do anything like that

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const aElement = HomePage

// root.render(aElement)

ReactDOMClient.createRoot(document.getElementById("root")).render(<App />);