var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: {type: 'String', unique: true, required:true},
    description: {type: 'String', required: true},
    price: {type: 'Number', required: false, min: 0}
});

module.exports = mongoose.model('Product', productSchema);
