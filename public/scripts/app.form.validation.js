(function () {
    "use strict";
    angular.module("app.form.validation", []).controller("wizardFormCtrl", ["$scope", function ($scope) {
        return $scope.wizard = {firstName: "some name", lastName: "", email: "", password: "", age: "", address: ""}, $scope.isValidateStep1 = function () {
            return void 0
        }, $scope.finishedWizard = function () {
            return void 0
        }
    }]).controller("formConstraintsCtrl", ["$scope", function ($scope) {
        var original;
        return $scope.form = {required: "", minlength: "", maxlength: "", length_rage: "", type_something: "", confirm_type: "", foo: "", email: "", url: "", num: "", minVal: "", maxVal: "", valRange: "", pattern: ""}, original = angular.copy($scope.form), $scope.revert = function () {
            return $scope.form = angular.copy(original), $scope.form_constraints.$setPristine()
        }, $scope.canRevert = function () {
            return!angular.equals($scope.form, original) || !$scope.form_constraints.$pristine
        }, $scope.canSubmit = function () {
            return $scope.form_constraints.$valid && !angular.equals($scope.form, original)
        }
    }]).controller("signinCtrl", ["$scope", function ($scope) {
        var original;
        return $scope.user = {email: "", password: ""}, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function () {
            return $scope.user = angular.copy(original), $scope.form_signin.$setPristine()
        }, $scope.canRevert = function () {
            return!angular.equals($scope.user, original) || !$scope.form_signin.$pristine
        }, $scope.canSubmit = function () {
            return $scope.form_signin.$valid && !angular.equals($scope.user, original)
        }, $scope.submitForm = function () {
            return $scope.showInfoOnSubmit = !0, $scope.revert()
        }
    }]).controller("signupCtrl", ["$scope", function ($scope) {
        var original;
        return $scope.user = {name: "", email: "", password: "", confirmPassword: "", age: ""}, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function () {
            return $scope.user = angular.copy(original), $scope.form_signup.$setPristine(), $scope.form_signup.confirmPassword.$setPristine()
        }, $scope.canRevert = function () {
            return!angular.equals($scope.user, original) || !$scope.form_signup.$pristine
        }, $scope.canSubmit = function () {
            return $scope.form_signup.$valid && !angular.equals($scope.user, original)
        }, $scope.submitForm = function () {
            return $scope.showInfoOnSubmit = !0, $scope.revert()
        }
    }]).directive("validateEquals", [function () {
        return{require: "ngModel", link: function (scope, ele, attrs, ngModelCtrl) {
            var validateEqual;
            return validateEqual = function (value) {
                var valid;
                return valid = value === scope.$eval(attrs.validateEquals), ngModelCtrl.$setValidity("equal", valid), "function" == typeof valid ? valid({value: void 0}) : void 0
            }, ngModelCtrl.$parsers.push(validateEqual), ngModelCtrl.$formatters.push(validateEqual), scope.$watch(attrs.validateEquals, function (newValue, oldValue) {
                return newValue !== oldValue ? ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue) : void 0
            })
        }}
    }]);
})();
