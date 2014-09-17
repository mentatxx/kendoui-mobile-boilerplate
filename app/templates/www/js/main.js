/*global require*/
require.config({
  paths: {
    'text':   '../bower_components/requirejs-text/text',
    'jquery': '../bower_components/kendo-ui/js/jquery.min',
    'kendo':  '../bower_components/kendo-ui/js/kendo.ui.core.min'
  },
    shim: {
        jquery: {
            exports: "jquery"
        },
        kendo: {
            deps: ['jquery'],
            exports: "kendo"
        }
    }

});

require([
  'app'
], function (/**App*/app) {
    window.app = app;
    app.init();
});