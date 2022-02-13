import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import imageSearchSaga from './imageSearch.saga';
import fetchBirdsSaga from './fetchBirds.saga';
import addBirdToListSaga from './addBirdToList.saga';
import fetchClientListSaga from './fetchClientList.saga';
import fetchCommonNameSaga from'./fetchCommonName.saga';
import fetchDreamListSaga from './fetchDreamList.saga'
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    imageSearchSaga(),
    fetchBirdsSaga(),
    addBirdToListSaga(),
    fetchClientListSaga(),
    fetchCommonNameSaga(),
    fetchDreamListSaga()
  ]);
}
