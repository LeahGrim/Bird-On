const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = 
                `SELECT 
                    "Common_name", "Order", "Family_name",
                    "Scientific_name", "description", "bird_id"
                    "location_spotted", 
                    "date_spotted", 
                    "image_path"
                    FROM birds 
                    JOIN client_bird_list ON bird_id= birds.id
                    JOIN "user" ON user_id = "user".id 
                    WHERE user_id = $1 AND client_bird_list."date_spotted" is NULL;
                    `
    const queryParams= req.user.id;
    pool.query(queryText, [queryParams])
    .then(dbRes => {
        res.send(dbRes.rows)
    }).catch(err => {
        console.log('error on the get list .router', err)
        res.sendStatus(500);
    })
});

module.exports = router;