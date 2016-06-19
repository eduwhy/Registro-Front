(function() {
    'use strict';

    angular.module('app.header', [

    ]).directive('encabezado', Encabezado);

    function Encabezado() {
        return {
            restrict: 'EA',
            templateUrl: 'app/header/header.html',
        };
    }

})();
