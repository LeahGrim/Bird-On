const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('this is req.body', req.body);
    console.log('this is req.params', req.params);
    console.log('this is req.query', req.query);
    const queryText = 
                        `SELECT 
                        "Common_name",
                        "Order", "Family_name",
                        "Scientific_name", "description",
                        "location_spotted", "date_spotted", 
                        "image_path", "bird_id", 
                        "client_bird_list".id
                    FROM birds 
                    JOIN client_bird_list ON bird_id= birds.id
                    WHERE user_id = $1 AND client_bird_list.id= $2; 
                        `
    const queryParams= [req.user.id, req.params.id];
   
    pool.query(queryText, queryParams)
    .then(dbRes => {
        res.send(dbRes.rows[0])
    }).catch(err => {
        console.log('error on the get list .router', err)
        res.sendStatus(500);
    })
});

module.exports = router;
