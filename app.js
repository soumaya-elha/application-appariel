const express = require('express');
const bodyParser = require('body-parser'); // objet ---->jison
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

const app = express();  


app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use(require('./routes/reservation'));

module.exports = app;

app.listen(3030, () => console.log('server listen port 3030 ...'));


