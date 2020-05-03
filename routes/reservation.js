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
  json.push(info); // push---> fichie jison

  // saving the array in a file
  const data = JSON.stringify(json);// chengement object ---->fichie jison  
  fs.writeFileSync('users.json', data, 'utf-8'); 

  res.redirect('/reservation');
});

//delete
router.get('/delete/:id', (req, res) => {
  json = json.filter(d => d.id != req.params.id);

  // saving data
  const data = JSON.stringify(json);
  fs.writeFileSync('users.json', data, 'utf-8');

  res.redirect('/reservation')
});


// update
router.post('/up', (req, res) => {
  // console.log(req.body, req.params)
  const { id } = req.body;
  const { name, prenom, email, telphone ,version } = req.body;

  json.forEach((product, i) => {
    if (product.id == id) {
      product.name = name;
      product.prenom = prenom;
      product.email = email;
      product.telphone = telphone;
      product.version = version;
    }
  });
  res.redirect('/reservation');

});


module.exports = router;
