var express = require('express');
var path    = require('path');
var router 	= express.Router();

router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '..', '..', 'public', 'aerolineas.html'));
});

router.get('/:aerolinea', function(req, res) 
{
	res.download(path.join(__dirname, '..', '..', 'public', req.params.aerolinea), req.params.aeroliena, 
	function RespuestaDeDescarga(err)
	{
		if (err)
        	res.status(500).send('Ocurrio un error en la descarga.');
    	else
	        res.status(200).send('Descarga exitosa.');
	});
});

module.exports = router;