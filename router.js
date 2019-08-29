let express = require('express');
let router = express.Router();
let db = [];

router.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
  // res.render('index.html');
})

router.post('/newItem', function(req,res){
  console.log(req.body);
  
    db.push(req.body);
    
})

router.get('/listtask.html', function (req, res) {
  res.render('listtask.html', {
    taskDb: db
  });
})

module.exports = router;