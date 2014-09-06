/*global define*/
define(['kendo'],
    function(kendo){
        function ListVM() {
            this.items = [];
        }

        return kendo.observable(new ListVM());
    });
