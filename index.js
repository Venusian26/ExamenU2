
const mongoose = require('mongoose');

//importando el controlador de productos
const productoController = require("./controllers/products.controller");
//importando el controlador de ventas
const ventaController = require("./controllers/ventas.controller");


mongoose.connect('mongodb://localhost:27017/AE2019EXAU2', { useNewUrlParser: true },function (err) {
 
    if (err) throw err;
  
    console.log('Conectado correctamente');
  
 });


    //PRODUCTOS
  var producto = {
    nombre:"Galletas Gamesa",
    precio:20,
    cantidad:10,
    minimo:20,
    maximo:50,
    costo:10
}


//-----OPERACIONES PRODUCTO---------
//productoController.crearProducto(producto);
//Consultar los productos
//productoController.consultaProductos();


///------VENTAS -------------
//REGISTRAR EN VENTAS
var venta = {
    folio:"1",
    fecha:"2019-01-01",
    productos:[
        {
            producto_id:"5d1ee0997049d04dd8ba0a22",
            cantidad:4
        }
    ],
    subTotal:100,
    iva:16,
    total:116
}


//----OPERACIONES EN VENTAS -----

ventaController.crearVenta(venta);
//consultar ventas
//ventaController.consultarVentas();




