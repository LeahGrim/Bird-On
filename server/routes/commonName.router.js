const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = 
                        `SELECT 
                        "Common_name" as "label",
                        "id"
                         FROM "birds"  
                         ORDER BY "Common_name" ASC  LIMIT 1000;
                        `
        pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('error on retrieving info from bird database on bird database router', err);
            res.sendStatus(500)
        })
});

module.exports = router;