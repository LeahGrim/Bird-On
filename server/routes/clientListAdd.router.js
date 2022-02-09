const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool')


router.post('/', (req, res) => {
        const insertBirdQuery = `
                            INSERT INTO client_bird_list (
                                "user_id", 
                                "common_name",
                                "description", 
                                "location_spotted", 
                                "date_spotted", 
                                "image_path", 
                                "bird_id")
                            VALUES
                                ($1, $2, $3, $4, $5, $6, $7)
                             ` 
        const queryParams= [
                            req.body.user_id, 
                            req.body.common_name,
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



