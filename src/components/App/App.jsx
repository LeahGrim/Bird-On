import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AddBirdForm from '../AddBirdForm/AddBirdForm';
import LifeList from '../LifeList/LifeList';
import './App.css';
import DateForm from '../AddBirdForm/DateForm.jsx';
import DescriptionForm from '../AddBirdForm/DescriptionForm.jsx';
import ImageSearch from '../AddBirdForm/ImageSearch.jsx';
import LocationForm from '../AddBirdForm/LocationForm.jsx';
import PictureForm from '../AddBirdForm/PictureForm.jsx';
import CommonNameQuery from '../AddBirdForm/CommonNameQuery.jsx';
import ListIdentifier from '../AddBirdForm/ListIdentifier';
import DreamList from '../DreamList/DreamList';
import Summary from '../AddBirdForm/Summary.jsx';
import DreamListDetail from '../ListDetail/DreamListDetail.jsx'
import LifeListDetail from '../ListDetail/LifeListDetail.jsx'

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);
  const selectedBird = 
  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/common"
          >
            <CommonNameQuery />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/description"
          >
            <DescriptionForm />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/listIdentifier"
          >
            <ListIdentifier />
          </ProtectedRoute>


          <ProtectedRoute
            exact
            path="/location"
          >
            <LocationForm />
          </ProtectedRoute>



          <ProtectedRoute
            exact
            path="/image"
          >
            <ImageSearch />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/date"
          >
            <DateForm />
          </ProtectedRoute>


          <ProtectedRoute
            exact
            path="/summary"
          >
            <Summary />
          </ProtectedRoute>


          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>
          <Route exact
            path="/form"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <AddBirdForm />
              :
              // Otherwise, show the Landing page
              <Redirect to="/login" />
            }
          </Route>
        
          <Route
            exact
            path="/lifeList"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <LifeList />
              :
              // Otherwise, show the Landing page
              <Redirect to="/user" />
            }
          </Route>
          <Route exact path="/dreamList"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <DreamList />
              :
              // Otherwise, show the Landing page
              <Redirect to="/user" />
            }
          </Route>

          <ProtectedRoute
            exact
            path="/dream/detail"
          >    
            <DreamListDetail/>
          </ProtectedRoute>
          <ProtectedRoute
            exact
            path="/life/detail/:id"
          >    
            <LifeListDetail/>
          </ProtectedRoute>
          <ProtectedRoute
            exact
            path="/dream/detail/:id"
          >    
            <DreamListDetail/>
          </ProtectedRoute>
          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
