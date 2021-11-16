const express = require('express');
const path = require('path');

const app = express();

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, './views'));

app.get('/', (req, res) => {
  res.render('index', { example: 'boilerplate example'} );
});


app.listen(3000, () => 
  console.log('Application is running on http://localhost:3000'))