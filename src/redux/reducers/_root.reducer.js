import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import imageResultList from './imageResultList.reducer';
import birdDatabaseData from './birdDatabase.reducer';
import clientList from './clientList.reducer';
import commonNameReducer from './commonName.reducer';
import birdId from './birdId.reducer';
import dreamListReducer from './dreamList.reducer';
import formReducer from './birdForm.reducer';
import setSelectedDreamBird from './setSelectedDreamBird.reducer';
import setSelectedBird from './setSelectedBird.reducer';
import editReducer from './editPage.reducer'
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  imageResultList, // reducer holds all the images that the client selects on DOM
  birdDatabaseData,
  clientList,
  commonNameReducer,
  birdId,
  dreamListReducer,
  formReducer,
  setSelectedDreamBird,
  setSelectedBird,
  editReducer
});

export default rootReducer;
