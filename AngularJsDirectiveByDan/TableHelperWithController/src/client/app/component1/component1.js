//Component1 controller

(function () {
    'use strict';

    angular
        .module('app')
        .controller('Component1', Component1);

    Component1.$inject = ['toastr']; 

    function Component1(toastr) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Dan的Directive課程,在Directive中使用controller';

        vm.customers = [
            {
                name: 'David',
                street: '1234 Anywhere St.',
                age: 25,
                url: 'index.html'
            },
            {
                name: 'Tina',
                street: '1800 Crest St.',
                age: 35,
                url: 'index.html'
            },
            {
                name: 'Michelle',
                street: '890 Main St.',
                age: 29,
                url: 'index.html'
            },
            {
                name: 'John',
                street: '444 Cedar St.',
                age: 18,
                url: 'index.html'
            }
        ];
        
        activate();

        function activate() {
        }

    }
})();
