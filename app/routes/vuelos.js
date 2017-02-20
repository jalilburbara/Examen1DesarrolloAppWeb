var express = require('express');
var path    = require('path');
var router 	= express.Router();

router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '..', '..', 'public', 'aerolinas.html'));
});

router.get('/:aerolina', function(req, res) 
{
	res.download(path.join(__dirname, '..', '..', 'public', req.params.aerolina), req.params.aerolina, 
	function RespuestaDeDescarga(err)
	{
		if (err)
        	console.log('Ocurrio un error en la descarga.');
    	else
	        console.log('Descarga exitosa.');
	});
});

module.exports = router;