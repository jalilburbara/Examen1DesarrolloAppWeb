angular.module('myApp',[])
    .controller('vuelosController', [
        '$scope', function($scope)
        {
            $scope.bienvenida = 
            "Bienvenido al sistema de cotrol de vuelos creado por Jalil Burbara";
        }
    ]);