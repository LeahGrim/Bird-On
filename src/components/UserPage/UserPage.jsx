import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './UserPageStyle.css'
function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome Birder, {user.username}!</h2>
      <p> Birder ID is: {user.id}</p>
        <h2 className= "branchTitle"> Choose Your Branch</h2>
      <div className= "linkGroups"> 
        <div className='linkTitle'> 
                <h2> View Your Life List </h2>
                    <Link to= '/lifeList'><button className= "ToFormBtn"> 
                                      <h2> Life List </h2> 
                                      </button>
                    </Link>
        </div>
        <div className='linkTitle'> 
              <h2> Add Bird Sighting  </h2>
                    <Link to= '/form'><button className= "ToFormBtn"> 
                                <h2>  Life List Form  </h2>
                              </button>
                    </Link>
        </div>
        <div className='linkTitle'> 
                <h2> Dream List Gallery </h2>
                    <Link to= '/dreamList'><button className= "ToFormBtn"> 
                                            <h2> Dream List </h2> 
                                          </button>
                    </Link>
        </div>
       <div className='linkTitle'> 
                <h2> Dream List Form </h2>
                    <Link to= '/form/dream'><button className= "ToFormBtn"> 
                                <h2>  Dream List Form </h2> 
                                      </button>
                    </Link>
        </div>
     
        </div>
      
      <LogOutButton className="btn" />
      
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
