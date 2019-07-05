var mongoose = require("mongoose");
//IMPORTANDO EL MODELO DE VENTA
var schemaVentas = require("../models/ventas.models");
//
var productoController = require("../controllers/products.controller");

//coleccion de ventas
var Ventas = new mongoose.model("Ventas",schemaVentas,"ventas");


//Crear una nueva venta
async function crearVenta(venta){

    //buscar el id de producto
    //var id = venta["Producto"];
  //  var productoID = await productoController.buscarProducto("5d1f62b610588e36205d4414");

    //Comparar el ID de producto con el de la venta
   // console.log("ID:"+productoID);

    //Si el ID del producto corresponde con el de la venta,
    //insertar una nueva venta y hacer operaciones.
    //Si no mandar un error.
   var ventaCreada =  await Ventas.create(venta)
    .then((data)=>{
        console.log("Venta registrada con exito");
        console.log("DETALLES:"+"\n"+data);
        
    }).catch((error)=>{
        console.log("ERROR venta no registrado"+"\n");
        console.log(error)
    })
    return ventaCreada;
    
}













 //consulta general
 async function consultarVentas(){
    await Ventas.find({},function(error,docs){
    if(error){
        console.log(error);
    }
        console.log(docs); 
    }).populate("cliente").populate("producto_id");
}

async function buscarVenta(id){ 
    await Ventas.find({"_id":id},function(error,docs){
    if(error){
        console.log(error);
    }
        console.log(docs);
    })
}

async function deleteVenta(id){
    await Cliente.findByIdAndRemove({"_id":id},function(error,docs){
        if(error){
            console.log(error);
        }
        else{
            console.log("Venta eliminada");
        }
        })
}

module.exports.crearVenta = crearVenta;
module.exports.consultarVentas = consultarVentas;
module.exports.buscarVenta = buscarVenta;
module.exports.deleteVenta = deleteVenta;
