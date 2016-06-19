(function() {
    'use strict';

    angular.module('why.header', [

    ]).directive('encabezado', Encabezado);

    function Encabezado() {
        return {
            restrict: 'EA',
            templateUrl: 'app/header/header.html',
        };
    }

})();