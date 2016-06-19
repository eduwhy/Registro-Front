(function() {
    'use strict';

    angular.module('app.usuarios.directive.create', [

    ]).directive('usuariosCreate', UsuariosCreate);

    function UsuariosCreate() {
        return {
            restrict: 'EA',
            templateUrl: 'app/usuarios/usuarios-create/create.html',
            controller: 'UsuariosCreateCtrl',
            controllerAs: 'vm'
        };
    }

})();
