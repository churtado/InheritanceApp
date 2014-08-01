/// <reference path="Scripts/typings/angularjs/angular.d.ts" />
/*
In this demo we will see that by nesting the child controller inside the parent,
the child controller will have access to the parent scope (i.e. Gerardo, instead of Carlos)
*/

var app = angular.module("Inheritance", []);

interface IParentScope extends ng.IScope {
    person: { name: String; greeted:boolean};
}

interface IChildScope extends IParentScope {
    sayHello();
}

class ParentController {

    constructor($scope: IParentScope) {
        $scope.person = { name:"Gerardo", greeted: false };
    }
}
    
class ChildController extends ParentController {

     constructor($scope: IChildScope) {
        super($scope);
        $scope.sayHello = function () {
            $scope.person.name = "Carlos";
            $scope.person.greeted = true;
        };
     }
}

app.controller("parentController", ParentController);
app.controller("childController", ChildController);


