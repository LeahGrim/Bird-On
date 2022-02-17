import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
        <h2 className="nav-title">Bird On</h2>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
           
            <div className="dropdown">
            <button className="dropbtn"> Add A Bird </button>
            <div className="dropdown-content">
              <Link to="/form">< a href="#"> Add Bird Sighting </a> </Link>
              <Link to="/form/dream"> Add Dream Bird </Link>
            </div>
          </div>
              <div className="dropdown">
            <button className="dropbtn"> Go To List</button>
            <div className="dropdown-content">
              <Link to="/lifeList">< a href="#"> Life List </a> </Link>
              <Link to="/dreamList">< a href="#"> Dream List </a> </Link>
            </div>
            </div>
            <div className="dropdown">
            <Link className= "homeNav" to="/user"> Home </Link>
            <LogOutButton className=" logOutLink" />
            </div>
            
            
           
          
          </>
       
       
       
       
       
       
       )}

      
      </div>
    </div>
  );
}

export default Nav;

