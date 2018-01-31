/*!
 * main.controller.js
 * 
 * Copyright(c) 2017 @project-name
 * Author: @author
 * Date: @date
 */

(function() {
'use strict';

    angular
        .module('project')
        .controller('MainController', MainController);

    MainController.$inject = ['$log'];
    
    function MainController($log) {
        var vm = this;
        
        vm.brand = 'Project';

        activate();

        ////////////////

        function activate() { $log.log('Hello from Angular!'); }
    }
})();