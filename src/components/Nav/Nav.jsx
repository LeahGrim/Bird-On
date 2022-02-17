import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);
//material UI navigation constants 

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
            <Link className="navLink" to="/user">
             <h2> Home </h2>
            </Link>

            <Link className= "navLink" to= "/form">
            <h2> Add Bird Form </h2>
            </Link>
            <Link className= "navLink" to= "/form/dream">
              Add Dream Bird
            </Link>
            <Link className= "navLink" to="/lifeList">
              <h2> Life List </h2>
              </Link>
              <Link className= "navLink" to="/dreamList">
              <h2> Dream List </h2>
              </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
        <h2> Info Page </h2>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
