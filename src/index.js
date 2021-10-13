//ejemplo.json nos sirve para guardar nuestros datos o simular una bd
//package json nos describe el proyecto
//vamos a ocupar los modulos express y morgan
//estos me permiten crear un servidor para ver los 
//datos
const express = require('express');//nos permite escribir codigo de servidor
const morgan = require('morgan');//nos permite ver las peticiones que van llegando por consola
const app = express();

//nodemon modulo que reinicie el servidor automaticamente 
//cmd node src/nombredearchivo
//npm run dev ejecuta comando de arriba


//configuraciones
app.set('port', process.env.PORT || 3000);//el puerto
app.set('json spaces', 2);//para ordenar como se muestra el dato

//middlewares que son peticiones entre usuario y servidor
app.use(morgan(`dev`));//ver lo que llega al server
app.use(express.urlencoded({extended: false}));//entender datos desde input de forms
app.use(express.json());// nos interpreta formatos json



//rutas
app.use(require('./rutas/index'));
app.use(require('./rutas/personajes'))

//comenzando el servidor
app.listen(3000, () => {
    console.log(`Server on port ${app.get('port')}`);

});
