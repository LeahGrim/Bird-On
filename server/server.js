const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const router = require ('./routes/image.router');
const birdDatabaseRouter = require('./routes/birddatabase.router');
const clientListAddRouter = require('./routes/clientListAdd.router');
const getListRouter = require('./routes/getList.router');
const commonNamesRouter = require('./routes/commonName.router')
const getDreamListRouter = require('./routes/getDreamList.router')
//import delete router
const deleteRouter = require('./routes/deleteBird.router');

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);

// Serve static files
app.use(express.static('build'));
//component routers
app.use('/search/photos', router); 
app.use('/birds', birdDatabaseRouter);
//POST request to allow clients to add birds
app.use('/client/birds', clientListAddRouter);
//GET request to retrieve life list
app.use('/client/life/list', getListRouter);
//GET request to retrieve dream list
app.use('/client/dream/list', getDreamListRouter);
app.use('/birds/common', commonNamesRouter)
//DELETE request to delete bird
app.use('/bird/delete', deleteRouter)

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
