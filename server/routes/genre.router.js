const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  // I used SQL from the movie router to grab genres and pull that info into the list item
  res.sendStatus(500)
});

module.exports = router;