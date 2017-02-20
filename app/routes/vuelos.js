var express = require('express');
var router = express.Router();

var Vuelo = require('../models/Vuelo');

// Consultar todos los vuelos
router.get('/',function(req, res){
    Vuelo.find(function(err, vuelos){
        if(err)
            res.status(500).send('Error en la base de datos');
        else
            res.status(200).json(vuelos);
    });
});

// Consultar un vuelo por ID
router.get('/:id',function(req, res){
    Vuelo.findById(req.params.id,function(err, vuelo) {
        if (err)
            res.status(500).send('Error en la base de datos');
        else{
            if (vuelo != null) {
                res.status(200).json(vuelo);
            }
            else
                res.status(404).send('No se encontro ese vuelo');
        }
    });
});

// Consulta de vuelos que sean de una fecha X o más reciente

module.exports = router;