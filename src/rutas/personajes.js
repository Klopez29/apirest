const { Router } = require('express');
const router = Router();
const _ =  require('underscore'); //libreria que ayuda a la manipulacion de datos

//el archivo que simula nuestra base de datos es ejemplo.json
const personajes = require('../ejemplo.json');


//cuando el usuario entre a la ruta muestre los datos de los personajes get
router.get('/api/personajes', (req,res)=>{
    res.json(personajes);
});

//cuando el usuario entre a la ruta va almacenar datos por post
router.post('/api/personajes', (req,res)=> {
   //arreglo para almacenarlo en los personajes
    const { nombre, serie, rating } = req.body
    //si existen
    if(nombre && serie && rating){
        const id = personajes.length + 1; //creo el id de cada personaje que se vaya creando
        const nPersonaje = { ...req.body, id } //le pasa todo lo del request body o se podria decir esta transfiriendo a un nuevo objeto
        personajes.push(nPersonaje);//se almacena el nuevo personaje
        res.json(personajes);
    }else {
        res.status(500).json({error :'Ocurrio un error'});

    }
    });
//cuando el usuario entra a la ruta modifica
router.put('/api/personajes/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, serie, rating } = req.body;
    if (nombre && serie && rating) {
        _.each(personajes, (personaje, i) => {
            if (personaje.id === id) {
                personaje.nombre = nombre;
                personaje.serie = serie;
                personaje.rating = rating;
            }
        });
        res.json(personajes);
    } else {
        res.status(500).json({error: 'Ocurrio un error'});
    }
});    
  
//cuando el usuario entra a la ruta elimina 

router.delete('/api/personajes/:id', (req, res) => {

        _.each(personajes, (personaje, i) => {//hacemos recorrido de los personajes vamos a obtener un personaje por cada vez que lo hace
            const { id } = req.params;
            if (personaje.id == id) {//por cada recorrido que haga si su id es igual id que estamos recibiendo la removera 
                personajes.splice(i, 1);

            }
        });
        res.json(personajes);
    
});


//exportamos
module.exports = router;

//postman nos permite hacer cualquier tipo de peticion get put o post
//para enviar un dato nos vamos a body
//funcionamiento es desde postman mandamos los datos para obtener datos get y post para mandar
