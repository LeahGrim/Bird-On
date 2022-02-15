const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = 
                        `SELECT 
                        "Common_name",
                        "Order", "Family_name",
                        "Scientific_name", "description",
                        "location_spotted", "date_spotted", 
                        "image_path", "bird_id"
                    FROM birds 
                    JOIN client_bird_list ON bird_id= birds.id
                    WHERE user_id = $1 AND client_bird_list."date_spotted" is NOT NULL; 
                        `
    const queryParams= [req.user.id]
   
    pool.query(queryText, queryParams)
    .then(dbRes => {
        res.send(dbRes.rows)
    }).catch(err => {
        console.log('error on the get list .router', err)
        res.sendStatus(500);
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('dream list id is', req.params.id);
  
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