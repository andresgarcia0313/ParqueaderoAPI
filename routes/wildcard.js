var express = require('express');//Servidor web
var router = express.Router();//Maneja rutas web 
router.get('*', (req, res, next) => { res.send('Get responder con un recurso comodin'); });
router.post('*', (req, res, next) => { res.send('Post responder con un recurso comodin'); });
router.put('*', (req, res, next) => { res.send('Put responder con un recurso comodin'); });
router.delete('*', (req, res, next) => { res.send('Delete responder con un recurso comodin'); });
module.exports = router;