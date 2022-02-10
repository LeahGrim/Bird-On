const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    const queryText = 
                        `SELECT 
                        "Common_name",
                        "Order", "Family_name",
                        "Scientific_name", "description",
                        "location_spotted", "date_spotted", 
                        "image_path"
                    FROM birds 
                    JOIN client_bird_list ON bird_id= birds.id
                    WHERE user_id = $1; 
                        `
    const queryParams= req.user.id;
    pool.query(queryText, [queryParams])
    .then(dbRes => {
        console.log('dbRes is', dbRes);
        res.send(dbRes.rows)
    }).catch(err => {
        console.log('error on the get list .router', err)
        res.sendStatus(500);
    })
});

module.exports = router;