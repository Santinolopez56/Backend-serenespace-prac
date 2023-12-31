import {Router} from "express";
import {getProducts} from "../controllers/controllers" 
import {func} from "../controllers/controllers"
import {precio} from "../controllers/controllers"

const productRouter = Router();



productRouter.get('/',func);

productRouter.get("/product", getProducts);

productRouter.get('/precio',precio);

//3)
productRouter.put('/:productnombre',(req, res) =>{
    const { productnombre } = req.params;
    res.send(productnombre)
});

//4)
// productRouter.get('/productos/:modelo',(req, res) =>{
//     const { modelo } = req.params;
//     const longitud = productmercancia.length;

//     productmercancia = productmercancia.filter (producto=> producto.modelo !== modelo); 
    
//     if (productmercancia.length === longitud){
//         res.status(404).send ("No existe ese producto");

//     } else {

//        res.send("Se elimino su producto correctamente");
        
//     }
// });

//5)
// productRouter.get('/pais/:pais', (req, res) => {
//     const { pais } = req.params;

//     const productosPorPais = productmercancia.find(producto => producto.pais_de_origen === pais);
  
//     if (productosPorPais) {
    
//         res.json(productosPorPais);

//     } else {

//         res.status(404).send('No se encontraron productos con ese pais.');
        
//     }
//   });

//6)
//   productRouter.get('/precio/:precio', (req, res) => {
//     const { precio } = req.params;

//     const productosPorPrecio = productmercancia.find(producto => producto.precio === Number (precio));
  
//     if (productosPorPrecio) {
    
//         res.json(productosPorPrecio);

//     } else {

//         res.status(404).send('No se encontraron productos con ese pais.');
        
//     }
//   });


//7)
// productRouter.put('/productos/agregar',(req, res) =>{
//     const {nombre,precio,modelo,pais_de_origen} = req.body;
//     if (nombre && precio && modelo && pais_de_origen ) { 
//         const Productoagregado = {nombre, precio, modelo, pais_de_origen};
//         productmercancia.push (Productoagregado)
//         res.status(201).send(productmercancia)
//     }else{
//         res.status(404).send("Faltan campos para la creacion de su producto")
//     }
    

// });

export default productRouter;
