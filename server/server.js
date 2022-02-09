const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const router = require ('./routes/image.router');
const birdDatabaseRouter = require('./routes/birddatabase.router');
const clientListAddRouter = require('./routes/clientListAdd.router');
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
app.use('/client/birds', clientListAddRouter)
// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
