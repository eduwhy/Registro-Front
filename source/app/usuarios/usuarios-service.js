(function() {

    'use strict';

    angular.module('app.usuarios.service', [])
        .factory('UsuariosService', UsuariosService);

    UsuariosService.$inject = ['BASEURL', '$resource'];

    function UsuariosService(BASEURL, $resource) {
        return '';
        /*
        return $resource(BASEURL + '/usuarios/:idUsuario',
        { idUsuario: '@idUsuario'},
        {
            'update': {
                method: 'PUT'
            }
        });
         */
    }

})();
