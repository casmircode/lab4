let express = require('express');
let router = express.Router();

let db = [];
db.push({
  carId: 0,
  carMake: 'BMW',
  carModel: '735',
  carYear: 2014
});
db.push({
  carId: 1,
  carMake: 'Mercedes',
  carModel: 'C250',
  carYear: 2017
});
db.push({
  carId: 3,
  carMake: 'Audi',
  carModel: 'A6',
  carYear: 2019
});

router.get('/', function (req, res) {
  let randomId = Math.round(Math.random() * 100);
  res.render('index.html', {
    username: "msa",
    carDb: db,
    id: randomId
  });
})



module.exports = router;