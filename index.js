const express = require ('express')
const app = express()
const path = require('path');
app.get('/', (req, res) => {
  res.send("You've made it to the server, congrats!")
});

app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
  res.render('home.ejs',{
    message: 'Welcome to testing in Node'
  });
});

const portNumber = process.env.PORT || 3000

app.listen(portNumber, () => console.log(`listening on ${ portNumber }`));
module.exports = app
