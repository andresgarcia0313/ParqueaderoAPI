var express = require('express');//Servidor web
var router = express.Router();//Manejar rutas web
router.get('/', (req, res, next) => {//Obtiene el web de inicio 
    res.render('index',//Presenta la web o vista index.ejs
        { title: 'Web' });//Título de la página
});
module.exports = router;