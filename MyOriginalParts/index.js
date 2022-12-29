import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(myFirstElement);

const test = ReactDOM.createRoot(document.getElementById('test'));

test.render(<p>your the besttttttt</p>)