(function() {
    'use strict';

    angular.module('app.usuarios.directive.list', [

    ]).directive('usuariosList', UsuariosList);

    function UsuariosList() {
        return {
            restrict: 'EA',
            templateUrl: 'app/usuarios/usuarios-list/list.html'
        };
    }

})();
