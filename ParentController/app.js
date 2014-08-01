/// <reference path="Scripts/typings/angularjs/angular.d.ts" />
/*
In this demo we will see that by nesting the child controller inside the parent,
the child controller will have access to the parent scope (i.e. Gerardo, instead of Carlos)
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var app = angular.module("Inheritance", []);

var ParentController = (function () {
    function ParentController($scope) {
        $scope.person = { name: "Gerardo", greeted: false };
    }
    return ParentController;
})();

var ChildController = (function (_super) {
    __extends(ChildController, _super);
    function ChildController($scope) {
        _super.call(this, $scope);
        $scope.sayHello = function () {
            $scope.person.name = "Carlos";
            $scope.person.greeted = true;
        };
    }
    return ChildController;
})(ParentController);

app.controller("parentController", ParentController);
app.controller("childController", ChildController);
//# sourceMappingURL=app.js.map
