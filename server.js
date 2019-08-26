let express = require('express');
const app = express();
let router = require('./router.js');
let bodyParser = require('body-parser');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended:false
}))
// app.use(bodyParser.json())
app.use('/', router);
app.use(express.static('images'));
app.use(express.static('css'));
app.use(express.static('views'));


app.listen(8080, () => {
  console.log('Server running....');
});