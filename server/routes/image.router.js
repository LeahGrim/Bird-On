require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    axios({
        method: 'GET',
        url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key&text&format=json&nojsoncallback=true',
        params: {
            text: req.query.q,
            api_key: process.env.api_key,
            per_page:30
        }
    })
        .then((apiRes) => {
            res.send(apiRes.data);
        })
        .catch((err) => {
            console.error('unsplash request failed', err);
            res.sendStatus(500);
        })
});
module.exports = router;
