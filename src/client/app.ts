declare var angular: any;
namespace myAPP {
    angular.module("myApp",[]);

    export class myCtrl {
        static $inject = ['$scope'];
        constructor($scope) {

        }
    }

    angular.module("myApp").controller("myCtrl", myCtrl);
}
