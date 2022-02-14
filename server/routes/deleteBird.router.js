const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();


router.delete('/', rejectUnauthenticated, (req, res) => {
    console.log('id is', req.params.id);
  
    const queryText = `DELETE FROM client_bird_list
                        WHERE user_id = $1 AND client_bird_list.bird_id = $2
    `
    const queryParams = [req.user.id, req.params.id];
  
    pool.query(queryText, queryParams)
                .then(() => {res.sendStatus(200)
                console.log('successful delete');
                })
                .catch((err) => {
                  console.log('Error completing DELETE fav query', err);
                  res.sendStatus(500);
                })
  });

  module.exports = router;