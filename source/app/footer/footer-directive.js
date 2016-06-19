(function() {
    'use strict';

    angular.module('why.footer', [

    ]).directive('piepagina', PiePagina);

    function PiePagina() {
        return {
            restrict: 'EA',
            templateUrl: 'app/footer/footer.html',
        };
    }

})();