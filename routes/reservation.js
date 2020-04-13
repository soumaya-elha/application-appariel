const express = require('express');
const fs = require('fs');
const router = express.Router(); // affichage

const data = fs.readFileSync('users.json');
let json = JSON.parse(data);// comprice

// affichage
router.get('/reservation', (req, res) => {
  res.render('reservation', { json });
});

// add 
router.post('/reservation', (req, res) => {

  var info = req.body;
  json.push(info);

  // saving the array in a file
  const data = JSON.stringify(json);
  fs.writeFileSync('users.json', data, 'utf-8'); 

  res.redirect('/reservation');
});


module.exports = router;