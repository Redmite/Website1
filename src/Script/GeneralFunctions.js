// this has been created to help streamline everything, and to make it easier to add new features
// this is where a lot of functions will be stored, like the checkbox function

import React from 'react';

// CSS imports

// function for checkboxes
function Checkbox(props) {
  return (
    <div>
      <input type="checkbox" id={props.name} name={props.name} value={props.value} />
      <label for={props.name}>{props.label}</label>
    </div>
  );
}
export {Checkbox}