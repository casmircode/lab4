let express = require('express');
const app = express();
let router = require('./router.js');


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/', router);
app.use(express.static('images'));
app.use(express.static('css'));


app.listen(8080, () => {
  console.log('Server running....');
});