(function() {
    'use strict';

    angular.module('app.usuarios.route', [])
        .config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('usuarios-create', {
                url: '/',
                template: '<usuarios-create></usuarios-create>'
            })
            .state('usuarios-list', {
                url: '/usuarios',
                template: '<usuarios-list></usuarios-list>'
            });
    }
})();
