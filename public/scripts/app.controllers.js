(function () {
    "use strict";
    angular.module("app.controllers", []).controller("AppCtrl", ["$scope", "$rootScope", function ($scope, $rootScope) {
        var $window;
        $window = $(window), $scope.main = {brand: "Sys Admin 2", name: "Lisa Doe"}, $scope.admin = {layout: "wide", menu: "vertical", fixedHeader: !0, fixedSidebar: !1}, $scope.$watch("admin", function (newVal, oldVal) {
            return"horizontal" === newVal.menu && "vertical" === oldVal.menu ? void $rootScope.$broadcast("nav:reset") : newVal.fixedHeader === !1 && newVal.fixedSidebar === !0 ? (oldVal.fixedHeader === !1 && oldVal.fixedSidebar === !1 && ($scope.admin.fixedHeader = !0, $scope.admin.fixedSidebar = !0), void(oldVal.fixedHeader === !0 && oldVal.fixedSidebar === !0 && ($scope.admin.fixedHeader = !1, $scope.admin.fixedSidebar = !1))) : (newVal.fixedSidebar === !0 && ($scope.admin.fixedHeader = !0), void(newVal.fixedHeader === !1 && ($scope.admin.fixedSidebar = !1)))
        }, !0), $scope.color = {primary: "#1BB7A0", success: "#94B758", info: "#56BDF1", infoAlt: "#7F6EC7", warning: "#F3C536", danger: "#FA7B58"}
    }]).controller("HeaderCtrl", ["$scope", function ($scope) {
        return $scope.introOptions = {steps: [
            {element: "#step1", intro: "<strong>Heads up!</strong> You can change the layout here", position: "bottom"},
            {element: "#step2", intro: "Select a different language", position: "right"},
            {element: "#step3", intro: "Runnable task App", position: "left"},
            {element: "#step4", intro: "Collapsed nav for both horizontal nav and vertical nav", position: "right"}
        ]}
    }]).controller("NavContainerCtrl", ["$scope", function () {
    }]).controller("NavCtrl", ["$scope", "taskStorage", "filterFilter", function ($scope, taskStorage, filterFilter) {
        var tasks;
        return tasks = $scope.tasks = taskStorage.get(), $scope.taskRemainingCount = filterFilter(tasks, {completed: !1}).length, $scope.$on("taskRemaining:changed", function (event, count) {
            return $scope.taskRemainingCount = count
        })
    }]).controller("DashboardCtrl", ["$scope", function () {

    }])
})();
