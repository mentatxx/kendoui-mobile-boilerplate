/*global define, window*/
define(["jquery", "kendo",
        "viewModels/ListVM"],
    function($, kendo,
        /**ListVM*/ listVM){

        function App() {
            var that = this;
            this.kendoApp = null;
            this.initialView = 'views/list.html';
            this.splashVM = kendo.observable({
            })
        }

        App.prototype.init = function() {
            this.bindControllers();
            this.kendoApp = new kendo.mobile.Application($(document.body), {
                initial: this.initialView,
                platform: 'blackberry'
            });
        };

        App.prototype.bindControllers = function() {
            this.listVM = listVM;
        };

        App.prototype.loadResources = function() {
            // TODO: make load of heavy resources here
            // ....
        };

        return new App();
});