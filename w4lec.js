const express = require('express');
const bodyParser = require('body-parser');
// const morgan = require('morgan')
const app = express();
const ejs = require('ejs');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('img'));
app.use(bodyParser.urlencoded({
  extended: false
}));
// app.use(morgan('common'));

let ar = [{
  name: 'Tim',
  age: 23
}, {
  name: 'John',
  age: 24
}];
app.get('/', function (req, res) {
  // res.sendFile(index.html);
  res.render('index.html', {
    username: 'Tim',
    data: ar
  });
})

//receive post receive
app.post('/data', function (req, res) {
  console.log('i got a post request');
  console.log(req.body);
  res.sendFile(thankyou.html)

})

app.listen(8080);