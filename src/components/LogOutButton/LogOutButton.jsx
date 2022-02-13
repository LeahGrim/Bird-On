import React from 'react';
import { useDispatch } from 'react-redux';

function LogOutButton() {
  const dispatch = useDispatch();
  return (
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className= "logoutBtn"
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
    <h2>  Log Out </h2>
    </button>
  );
}

export default LogOutButton;
