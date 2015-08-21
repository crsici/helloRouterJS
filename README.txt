RequireJS AMD

Asynchronous Module Definitions designed to load modular code asynchronously in the browser and server. 
It is actually a fork of the Common.js specification. 
Many script loaders have built their implementations around AMD, seeing it as the future of modular JavaScript development.
https://cdnjs.com/libraries/backbone.js/tutorials/organizing-backbone-using-modules

Example 

define('main', ['jquery'] , function ($) {
    return function () {};
});


requirejs(['main'],
function   (main) {
   //
});