(function () {
    "use strict";
    var app = angular.module("app", [
        "ngRoute",
        "ngAnimate",
        "ui.bootstrap",
        "easypiechart",
        "mgo-angular-wizard",
        "textAngular",
        //"ui.tree",
        "ngMap",
        "ngTagsInput",
        "angular-intro",
        "app.controllers",
        "app.directives",
        "app.localization",
        "app.nav",
        "app.ui.ctrls",
        "app.ui.directives",
        "app.ui.services",
        "app.ui.map",
        "app.form.validation",
        "app.ui.form.ctrls",
        "app.ui.form.directives",
        "app.tables",
        "app.task",
        "app.chart.ctrls",
        "app.chart.directives",
        "app.page.ctrls"
    ]);
    app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        var routes = [
            "dashboard",
            "ui/typography",
            "ui/buttons",
            "ui/icons",
            "ui/grids",
            "ui/widgets",
            "ui/components",
            "ui/timeline",
            "ui/nested-lists",
            "ui/pricing-tables",
            "ui/maps",
            "tables/static",
            "tables/dynamic",
            "tables/responsive",
            "forms/elements",
            "forms/layouts",
            "forms/validation",
            "forms/wizard",
            "charts/charts",
            "charts/flot",
            "charts/morris",
            "pages/404",
            "pages/500",
            "pages/blank",
            "pages/forgot-password",
            "pages/invoice",
            "pages/lock-screen",
            "pages/profile",
            "pages/signin",
            "pages/signup",
            "mail/compose",
            "mail/inbox",
            "mail/single",
            "tasks/tasks"
        ];
         var setRoutes = function (route) {
            var url = "/" + route;
            var config = {templateUrl: "/views/" + route + ".html"};
            $routeProvider.when(url, config);
        };
        routes.forEach(function (route) {
            return setRoutes(route)
        });
        $routeProvider.
            when("/", {redirectTo: "/dashboard"}).
            when("/404", {templateUrl: "/views/pages/404.html"}).
            otherwise({redirectTo: "/404"});
        $locationProvider.html5Mode(true).hashPrefix("!");
    }]);
})();