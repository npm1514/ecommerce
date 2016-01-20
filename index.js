var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


var productCtrl = require('./controllers/productCtrl');


var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));


var mongoUri = "mongodb://localhost:27017/ecommerce";
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
  console.log("Connected to mongoDB");
});


app.post('/api/products', productCtrl.create);
app.get('/api/products',productCtrl.read);
app.put('/api/products/:id',productCtrl.update);
app.delete('/api/products/:id',productCtrl.delete);


app.listen(9000, function(){
  console.log("listening to 9000");
});
