(function () {
    "use strict";
    angular.module("app.ui.form.ctrls", []).controller("TagsDemoCtrl", ["$scope", function ($scope) {
        return $scope.tags = ["foo", "bar"]
    }]).controller("DatepickerDemoCtrl", ["$scope", function ($scope) {
        return $scope.today = function () {
            return $scope.dt = new Date
        }, $scope.today(), $scope.showWeeks = !0, $scope.toggleWeeks = function () {
            return $scope.showWeeks = !$scope.showWeeks
        }, $scope.clear = function () {
            return $scope.dt = null
        }, $scope.disabled = function (date, mode) {
            return"day" === mode && (0 === date.getDay() || 6 === date.getDay())
        }, $scope.toggleMin = function () {
            var _ref;
            return $scope.minDate = null != (_ref = $scope.minDate) ? _ref : {"null": new Date}
        }, $scope.toggleMin(), $scope.open = function ($event) {
            return $event.preventDefault(), $event.stopPropagation(), $scope.opened = !0
        }, $scope.dateOptions = {"year-format": "'yy'", "starting-day": 1}, $scope.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "shortDate"], $scope.format = $scope.formats[0]
    }]).controller("TimepickerDemoCtrl", ["$scope", function ($scope) {
        return $scope.mytime = new Date, $scope.hstep = 1, $scope.mstep = 15, $scope.options = {hstep: [1, 2, 3], mstep: [1, 5, 10, 15, 25, 30]}, $scope.ismeridian = !0, $scope.toggleMode = function () {
            return $scope.ismeridian = !$scope.ismeridian
        }, $scope.update = function () {
            var d;
            return d = new Date, d.setHours(14), d.setMinutes(0), $scope.mytime = d
        }, $scope.changed = function () {
            return void 0
        }, $scope.clear = function () {
            return $scope.mytime = null
        }
    }]).controller("TypeaheadCtrl", ["$scope", function ($scope) {
        return $scope.selected = void 0, $scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    }]).controller("RatingDemoCtrl", ["$scope", function ($scope) {
        return $scope.rate = 7, $scope.max = 10, $scope.isReadonly = !1, $scope.hoveringOver = function (value) {
            return $scope.overStar = value, $scope.percent = 100 * (value / $scope.max)
        }, $scope.ratingStates = [
            {stateOn: "glyphicon-ok-sign", stateOff: "glyphicon-ok-circle"},
            {stateOn: "glyphicon-star", stateOff: "glyphicon-star-empty"},
            {stateOn: "glyphicon-heart", stateOff: "glyphicon-ban-circle"},
            {stateOn: "glyphicon-heart"},
            {stateOff: "glyphicon-off"}
        ]
    }])
})();