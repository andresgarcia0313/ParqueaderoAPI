var createError = require('http-errors');//CreateError crea un error HTTP con un mensaje opcional y un número de estado opcional.
var express = require('express');//Express es un marco de aplicación web de servidor Node.js mínimo y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.
var path = require('path');//Path proporciona utilidades para trabajar con rutas de archivos y directorios.
var cookieParser = require('cookie-parser');// cookieParser analiza las cookies de solicitud HTTP y las almacena en req.cookies.
var logger = require('morgan');//Logger genera registros de registro de solicitudes HTTP para su servidor Node.js.
var indexRouter = require('./routes/index');//indexRouter maneja las rutas web de index es una instancia de la clase Router de Express.
var usersRouter = require('./routes/users');//usersRouter maneja las rutas web de users es una instancia de la clase Router de Express.
var wildcardRouter = require('./routes/wildcard');//usersRouter maneja las rutas web de users es una instancia de la clase Router de Express.
const cors = require('cors');//Cors es un paquete de middleware y permite compartir recursos entre dominios por ejemplo consultar la api desde localhost.

var app = express();//app instancia de Express que manejar solicitudes y respuestas HTTP como GET, POST, PUT y DELETE.
app.use(cors());//Usar cors para permitir el acceso a la api desde cualquier dominio.
app.set('views', path.join(__dirname, 'views'));//ver la configuración del motor y mostrar una aplicación con la carpeta de views.
app.set('view engine', 'jade');//Establecer el motor de plantillas de la aplicación.
app.use(logger('dev'));//Registra las solicitudes HTTP en la consola.
app.use(express.json());//Almacenar contenido de solicitud json en req.body.
app.use(express.urlencoded({ extended: false }));//Almacenar contenido de solicitud urlencoded en req.body (pro validar si es en rq.body).
app.use(cookieParser());//Analizar las cookies de solicitud HTTP y las almacena en req.cookies.
app.use(express.static(path.join(__dirname, 'public')));//Establecer la carpeta pública de la aplicación.
app.use('/', indexRouter);//Usar el indexRouter para las rutas web de index.
app.use('/users', usersRouter);//Usar el usersRouter para las rutas web de users.
app.use('/*', wildcardRouter);//Usar el wildcardRouter para las rutas web de users.
app.use((req, res, next) => {  next(createError(404));});//Capturar 404 y reenvía al controlador de errores
app.use((err, req, res, next) => {//Capturar errores y reenvía al controlador de errores
  res.locals.message = err.message;//establecer locales, solo proporcionando error en el desarrollo
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);//renderizar la página de error
  res.render('error');
});
module.exports = app;//Exportar la aplicación para usarla en otros módulos o archivos.