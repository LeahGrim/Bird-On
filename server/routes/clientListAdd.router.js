const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
  console.log('this is req.user', req.user);
});


router.post('/', rejectUnauthenticated, (req, res) => {
console.log('date_spotted is', req.body.date_spotted);
    const insertBirdQuery = `
                            INSERT INTO client_bird_list (
                                "user_id", 
                                "description", 
                                "location_spotted",  
                                "date_spotted",
                                "image_path", 
                                "bird_id"
                                )
                            VALUES
                                ($1, $2, $3, NULLIF($4, '')::date, $5, $6);
                             ` 
        const queryParams= [
                            req.user.id, 
                            req.body.description,
                            req.body.location_spotted,  
                            req.body.date_spotted,
                            req.body.image_path, 
                            req.body.bird_id
                            ]
          pool.query(insertBirdQuery, queryParams)
          .then(dbRes => {
              res.sendStatus(200);
          })
          .catch(err => {
              console.log('error occurred completing the POST request on the clientList.router', err);
              res.sendStatus(500);
          })
});
  

module.exports = router;



