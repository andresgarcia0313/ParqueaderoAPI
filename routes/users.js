var express = require('express');//Express es servidor web
var router = express.Router();//Manejar las rutas web de este archivo es una instancia de la clase Router de Express.
/* Obtener listado. */
router.get(//Obtener listado
    '/',//Sub ruta web
    (
        req,//Parámetro de solicitud
        res,//Parámetro de respuesta
        next//Parámetro de siguiente
    ) => {//Función que se llama cuando se realiza la solicitud a la ruta con parámetros de solicitud, respuesta y siguiente; siguiente o next sirve para pasar a la siguiente función
        res.send('Responder con un recurso');//Mensaje de respuesta
    }
);
module.exports = router;