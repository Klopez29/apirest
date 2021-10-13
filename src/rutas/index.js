
const { Router } = require("express");
const router =  Router();

//rutas
router.get('/prueba', (req,res )=>{//cualquiera que pida la ruta /prueba va devolver la const
    const dato1 = {
        "nombre": "Sasuke",
        "clan": "Uchiha"
    };
    res.json(dato1); //devolvemos un json
});
//en la consola hacemos peticiones por el metodo get u otro
module.exports = router;