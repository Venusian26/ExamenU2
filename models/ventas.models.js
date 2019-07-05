var mongoose = require("mongoose");


var Producto = mongoose.model('Producto');

module.exports = new mongoose.Schema({
    folio:{
        type:String, 
        required:true
    },
    fecha:{
        type:Date,
        default:Date.now
    },//Relacionamos el producto con la venta
    productos:[{
        producto_id: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Producto"
        },
        cantidad:Number
        }],
        
    subTotal:{
        type: Number,
        required: true
    },
    iva:{
        type: Number,
        required: true
    },
    total:{
        type: Number,
        required: true
    }
});



/*
var postSchema = new Schema({
    name: String,
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    dateCreated: Date,
    comments: [{body:"string", by: mongoose.Schema.Types.ObjectId}],
});

//Then make your model:

var Post = mongoose.model('Post', postSchema);
//Then, when you make your query, you can populate references like this:

Post.findOne({_id: 123})
.populate('postedBy')
.exec(function(err, post) {
    // do stuff with post
});

*/