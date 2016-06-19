(function() {
    'use strict';

    angular.module('app.usuarios', [
        'app.usuarios.route',
        'app.usuarios.service',
        'app.usuarios.controller.create',
        'app.usuarios.directive.create',
        'app.usuarios.controller.list',
        'app.usuarios.directive.list'
    ]);

})();
