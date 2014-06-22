(function () {
    "use strict";
    angular.module("app.nav", []).directive("toggleNavCollapsedMin", ["$rootScope", function ($rootScope) {
        return{
            restrict: "A",
            link: function (scope, ele) {
                var app = $("#app");
                ele.on("click", function (e) {
                    console.log('directive toggleNavCollapsedMin...');
                    if (app.hasClass("nav-collapsed-min"))
                        app.removeClass("nav-collapsed-min");
                    else {
                        app.addClass("nav-collapsed-min");
                        $rootScope.$broadcast("nav:reset");
                        e.preventDefault();
                    }
                })
            }}
    }]).directive("collapseNav", [function () {//collapse-nav
        return{
            restrict: "A",
            link: function (scope, ele) {
                var $a, $aRest, $app, $lists, $listsRest, $nav, $window, Timer, prevWidth, updateClass;
                $window = $(window);
                $lists = ele.find("ul").parent("li");
                console.log($lists)
                $lists.append('<i class="fa fa-caret-down icon-has-ul-h"></i><i class="fa fa-caret-right icon-has-ul"></i>');
                $a = $lists.children("a");
                $listsRest = ele.children("li").not($lists), $aRest = $listsRest.children("a");
                $app = $("#app");
                $nav = $("#nav-container");
                $a.on("click", function (event) {
                    console.log('directive $a collapseNav...');
                    if ($app.hasClass("nav-collapsed-min") || $nav.hasClass("nav-horizontal") && $window.width() >= 768) {
                    } else {
                        var $this = $(this), $parent = $this.parent("li");
                        console.log('$this');
                        console.log($this);
                        console.log('$parent');
                        console.log($parent);
                        $lists.not($parent).removeClass("open").find("ul").slideUp();
                        $parent.toggleClass("open").find("ul").slideToggle();
                    }
                    event.preventDefault();
                    //return $app.hasClass("nav-collapsed-min") || $nav.hasClass("nav-horizontal") && $window.width() >= 768 ?
                    // !1 : ($this = $(this), $parent = $this.parent("li"), $lists.not($parent).removeClass("open").find("ul").slideUp(),
                    // $parent.toggleClass("open").find("ul").slideToggle(), event.preventDefault())
                });
                $aRest.on("click", function () {
                    console.log('directive $aRest toggleNavCollapsedMin...');
                    return $lists.removeClass("open").find("ul").slideUp()
                });
                scope.$on("nav:reset", function () {
                    return $lists.removeClass("open").find("ul").slideUp()
                });
                Timer = void 0, prevWidth = $window.width(), updateClass = function () {
                    var currentWidth;
                    return currentWidth = $window.width(), 768 > currentWidth && $app.removeClass("nav-collapsed-min"), 768 > prevWidth && currentWidth >= 768 && $nav.hasClass("nav-horizontal") && $lists.removeClass("open").find("ul").slideUp(), prevWidth = currentWidth
                };
                $window.resize(function () {
                    var t;
                    return clearTimeout(t), t = setTimeout(updateClass, 300)
                });
            }}
    }]).directive("highlightActive", [function () { //highlight-active
        return{restrict: "A", controller: ["$scope", "$element", "$attrs", "$location", function ($scope, $element, $attrs, $location) {
            var highlightActive, links, path;
            return links = $element.find("a"), path = function () {
                return $location.path()
            }, highlightActive = function (links, path) {
                return path = "#" + path, angular.forEach(links, function (link) {
                    var $li, $link, href;
                    return $link = angular.element(link), $li = $link.parent("li"), href = $link.attr("href"), $li.hasClass("active") && $li.removeClass("active"), 0 === path.indexOf(href) ? $li.addClass("active") : void 0
                })
            }, highlightActive(links, $location.path()), $scope.$watch(path, function (newVal, oldVal) {
                return newVal !== oldVal ? highlightActive(links, $location.path()) : void 0
            })
        }]}
    }]).directive("toggleOffCanvas", [function () {//toggle-off-canvas
        return{restrict: "A", link: function (scope, ele) {
            return ele.on("click", function () {
                console.log('directive toggleOffCanvas...');
                return $("#app").toggleClass("on-canvas")
            })
        }}
    }])
})();