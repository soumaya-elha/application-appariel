const express = require('express');
const fs = require('fs');
const router = express.Router();

const data = fs.readFileSync('users.json');
let json = JSON.parse(data);

// affichage
router.get('/', (req, res) => {
  res.render('galery', { json });
});

// add 
router.post('/', (req, res) => {

  var info = req.body;
  json.push(info);

  // saving the array in a file
  const data = JSON.stringify(json);
  fs.writeFileSync('users.json', data, 'utf-8');

  res.redirect('/');
});


module.exports = router;