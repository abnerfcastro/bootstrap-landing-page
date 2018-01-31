(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * client/app.js
 * 
 * Copyright(c) 2017 @project-name
 * Author: @author
 * Date: @date
 */

(function() {
    'use strict';

    angular.module('project', [
        // List of dependencies
    ])
    .config(function() {
        // Config function
    });    

})();
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
/*!
 * client/entry.js
 * 
 * Joins all files for Browserify bundle
 * Copyright(c) 2017 @project-name
 * Author: @author
 * Date: @date
 */

(function() {
    'use strict';

    // Modules
    require('./app');
    
    // Controllers
    require('./controllers/main.controller.js');

})();
},{"./app":1,"./controllers/main.controller.js":2}]},{},[3]);
