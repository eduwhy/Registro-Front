(function() {
    'use strict';

    angular.module('app.usuarios.controller.create', [

    ]).controller('UsuariosCreateCtrl', UsuariosCreateCtrl);

    UsuariosCreateCtrl.$inject = ['UsuariosService', '$location', '$mdToast'];

    function UsuariosCreateCtrl(UsuariosService, $location, $mdToast) {

        var vm = this;

        vm.create = function() {
            UsuariosService.save(vm.cliente, function() {
                $location.path('/usuarios');
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Se ha  guardado el usuario...')
                    .position('bottom right'));
            }, function(err) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent(err.status + ' ' + err.data)
                    .position('bottom right'));
            });
        };

        vm.redirect = function() {
            $location.path('/usuarios');
        };

    }


})();
