(function () {
    angular.module("app.ui.form.directives", []).directive("uiRangeSlider", [function () {
        return{restrict: "A", link: function (scope, ele) {
            return ele.slider()
        }}
    }]).directive("uiFileUpload", [function () {
        return{restrict: "A", link: function (scope, ele) {
            return ele.bootstrapFileInput()
        }}
    }]).directive("uiSpinner", [function () {
        return{restrict: "A", compile: function (ele) {
            return ele.addClass("ui-spinner"), {post: function () {
                return ele.spinner()
            }}
        }}
    }]).directive("uiWizardForm", [function () {
        return{link: function (scope, ele) {
            return ele.steps()
        }}
    }])
})();