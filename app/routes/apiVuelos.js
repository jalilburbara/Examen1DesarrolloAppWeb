var express = require('express');
var router = express.Router();

var Vuelo = require('../models/Vuelo');

// Consultar todos los vuelos
router.get('/',function(req, res)
{
    Vuelo.find(function(err, vuelos)
    {
        if(err)
            res.status(500).send('Error en la base de datos');
        else
            res.status(200).json(vuelos);
    });
});

// Consultar un vuelo por ID
router.get('/:id',function(req, res)
{
    Vuelo.findById(req.params.id,function(err, vuelo) 
    {
        if (err)
            res.status(500).send('Error en la base de datos');
        else{
            if (vuelo != null) 
                res.status(200).json(vuelo);
            else
                res.status(404).send('No se encontro ese vuelo');
        }
    });
});

// Consulta de vuelos que sean de una fecha X o más reciente
router.get('/fecha', function(req, res) 
{
    var fecha = req.fechaYHoraDeSalida;
    Vuelo.find({fechaYHoraDeSalida: {$gte: fecha}}, 
    function(err, vuelo)
    {
        if (err)
            res.status(500).send('Error al leer de la base de datos');
        else
            res.status(200).json(vuelo);
    });
});

// Consulta de vuelos que estén entre dos fechas de salida (desde – hasta)
router.get('/fecha', function(req, res) 
{
    var fechaDesde = req.fechaDesde;
    var fechaHasta = req.fechaHasta;

    Vuelo.find({fechaYHoraDeSalida: {$gte: fechaDesde}, 
                fechaYHoraDeSalida: {$lte: fechaHasta}}, 
    function(err, vuelo)
    {
        if (err)
            res.status(500).send('Error al leer de la base de datos');
        else
            res.status(200).json(vuelo);
    });
});

// Consulta de vuelos que estén entre dos fechas de llegada (desde – hasta)
router.get('/fecha', function(req, res) 
{
    var fechaHasta = req.fechaHasta;
    var fechaHasta = req.fechaHasta;

    Vuelo.find({fechaTHoraDeLlegada: {$gte: fechaDesde}, 
                fechaTHoraDeLlegada: {$lte: fechaHasta}},
    function(err, vuelo)
    {
        if (err)
            res.status(500).send('Error al leer de la base de datos');
        else
            res.status(200).json(vuelo);
    });
});

// Crear un nuevo vuelo
router.post('/', function(req, res)
{
    var vueloNuevo = new Vuelo(
        {
            _id : req.body._id,
            aerolínea : req.body.aerolínea,
            ciudadOrigen : req.body.ciudadOrigen,
            ciudadDestino : req.body.ciudadDestino,
            fechaYHoraDeSalida : req.body.fechaYHoraDeSalida,
            fechaTHoraDeLlegada : req.body.fechaTHoraDeLlegada
        });
    vueloNuevo.save(function(error, vueloNuevo)
    {
        if (error) 
            res.status(500).send('No se ha podido agregar.');
        else 
            res.status(200).json('Agregado exitosamente');
    });
});

// Modificar un vuelo por ID
router.put('/id', function(req, res)
{
    Vuelo.findById(req.params.id, function(err, vuelo)
    {
        if(err)
            res.status(500).send('Error en la base de datos');
        else{
            if(vuelo != null)
            {
                vuelo.aerolínea = req.body.aerolínea
                vuelo.ciudadOrigen = req.body.ciudadOrigen
                vuelo.ciudadDestino = req.body.ciudadDestino
                vuelo.fechaYHoraDeSalida = req.body.fechaYHoraDeSalida
                vuelo.fechaTHoraDeLlegada = req.body.fechaTHoraDeLlegada

                vuelo.save(function(error, vueloNuevo)
                {
                    if(error)
                        res.status(500).send('Error en la base de datos');
                    else
                        res.status(200).send('Modificado exitosamente');
                });
            }
            else
                res.status(404).send('No se encontro ese vuelo');
        }
    });
});

// Eliminar un vuelo por ID
router.delete('/:id',function(req, res)
{
    Persona.findById(req.params.id,function(err, vuelo) 
    {
        if (err)
            res.status(500).send('Error en la base de datos');
        else{
            if (vuelo != null) {
                vuelo.remove(function (error, result) {
                    if (error)
                        res.status(500).send('Error en la base de datos');
                    else {
                        res.status(200).send('Eliminado exitosamente');
                    }
                });
            }
            else
                res.status(404).send('No se encontro ese vuelo');
        }
    });
});

module.exports = router;