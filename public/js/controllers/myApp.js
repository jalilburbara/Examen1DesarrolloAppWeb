angular.module('myApp',[])
    .controller('vuelosController', [
        '$scope', '$http', function($scope, $http)
        {
            $scope.consultarTodosLosVuelos = function()
            {
                $http.get('/api/vuelos')
                    .then(function(res)
                    {
                        console.log(res.data);
                        $scope.vuelos = res.data;
                    },function(res)
                    {
                        console.log('Hubo un error al conectar con servidor');
                    }
                );
            };
            $scope.consultarTodosLosVuelos();
        }
    ]);