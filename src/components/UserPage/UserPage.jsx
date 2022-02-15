import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import BirdFormButton from './BirdFormButton.jsx'
import LifeListButton from './LifeListButton.jsx'
import DreamListButton from './DreamListButton.jsx'
function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome!!   Birder: {user.username}!</h2>
      <p> Birder ID is: {user.id}</p>
      
      {/* Brings user to Add Bird Form */}
      <BirdFormButton />
      {/* Brings user to Life List */}
      <LifeListButton />
      {/* Brings user to Dream List */}
      <DreamListButton />
      
      <LogOutButton className="btn" />
      
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
