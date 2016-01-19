var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var cors = require('cors');
var ObjectId = require('mongodb').ObjectId;

var app = express();
app.use(bodyParser.json());
app.use(cors());

var corsOptions = {
    origin: 'http://localhost:9000'
};

app.use(express.static(__dirname + '/public'));

var nodePort = 9000;

var db = mongojs('ecommerce', ['products']);

app.post('/products', function(req, res, next){
  db.products.insert(req.body, function(err, result){
    res.send(result);
  });
});

app.get('/products', function(req, res, next){
  db.products.find({}, function(err, result){
    res.send(result);
  });
});

app.get('/products/:id', function(req, res, next){
  var idToFind = ObjectId(req.params.id);
  db.products.find({_id:idToFind}, function(err, result){
    res.send(result);
  });
});

app.delete('/products/:id', function(req, res, next){
  var idToDelete = ObjectId(req.params.id);
  db.products.remove({_id:idToDelete}, function(err, result){
    if (err) {
      res.status(500).send("Failed to delete");
    }
    res.send("Successfully deleted");
  });
});

app.put('/products/:id', function(req, res, next){
  var idToModify = ObjectId(req.params.id);
  var updateObject = {
    query: {_id: idToModify},
    update: {$set: req.body},
    new: false
  };
  db.products.findAndModify(updateObject, function(err, result){
    console.log('query completed');
    res.send(result);
  });
});




app.listen(nodePort, function(){
  console.log("listening to " + nodePort);
});
