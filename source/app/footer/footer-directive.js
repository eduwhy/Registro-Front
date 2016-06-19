(function() {
    'use strict';

    angular.module('app.footer', [

    ]).directive('piepagina', PiePagina);

    function PiePagina() {
        return {
            restrict: 'EA',
            templateUrl: 'app/footer/footer.html',
        };
    }

})();
