const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
    const query = `
        SELECT "id", "Order", "Family_name", "Common_name", "Scientific_name" 
        FROM "birds" 
        ORDER BY "Common_name" 
        ASC, "id" ASC  LIMIT 10
        `
    pool.query(query)
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('error on retrieving info from bird database on bird database router', err);
        res.sendStatus(500)
    })
});

module.exports = router;