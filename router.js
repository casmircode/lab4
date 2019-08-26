let express = require('express');
let router = express.Router();
let db = [];

router.get('/', function (req, res) {
  res.render('index.html', {
    username: "Guest"
  });
})

router.post('/newItem', function(req,res){
    db.push(req.body);
    
})

router.get('/listtask.html', function (req, res) {
  res.render('listtask.html', {
    taskDb: db
  });
})

module.exports = router;