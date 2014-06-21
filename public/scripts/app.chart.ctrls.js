(function () {
    "use strict";
    angular.module("app.chart.ctrls", []).controller("chartCtrl", ["$scope", function ($scope) {
        return $scope.easypiechart = {percent: 65, options: {animate: {duration: 1e3, enabled: !0}, barColor: $scope.color.primary, lineCap: "round", size: 180, lineWidth: 5}}, $scope.easypiechart2 = {percent: 35, options: {animate: {duration: 1e3, enabled: !0}, barColor: $scope.color.success, lineCap: "round", size: 180, lineWidth: 10}}, $scope.easypiechart3 = {percent: 68, options: {animate: {duration: 1e3, enabled: !0}, barColor: $scope.color.info, lineCap: "square", size: 180, lineWidth: 20, scaleLength: 0}}, $scope.gaugeChart1 = {data: {maxValue: 3e3, animationSpeed: 40, val: 1375}, options: {lines: 12, angle: 0, lineWidth: .47, pointer: {length: .6, strokeWidth: .03, color: "#000000"}, limitMax: "false", strokeColor: "#E0E0E0", generateGradient: !0, percentColors: [
            [0, $scope.color.success],
            [1, $scope.color.success]
        ]}}, $scope.gaugeChart2 = {data: {maxValue: 3e3, animationSpeed: 45, val: 1200}, options: {lines: 12, angle: 0, lineWidth: .47, pointer: {length: .6, strokeWidth: .03, color: "#464646"}, limitMax: "true", colorStart: "#7ACBEE", colorStop: "#7ACBEE", strokeColor: "#F1F1F1", generateGradient: !0, percentColors: [
            [0, $scope.color.info],
            [1, $scope.color.info]
        ]}}, $scope.gaugeChart3 = {data: {maxValue: 3e3, animationSpeed: 50, val: 1100}, options: {lines: 12, angle: 0, lineWidth: .47, pointer: {length: .6, strokeWidth: .03, color: "#464646"}, limitMax: "true", colorStart: "#FF7857", colorStop: "#FF7857", strokeColor: "#F1F1F1", generateGradient: !0, percentColors: [
            [0, $scope.color.danger],
            [1, $scope.color.danger]
        ]}}
    }]).controller("morrisChartCtrl", ["$scope", function ($scope) {
        var barColor, barData, comboColor, comboData, donutColor, donutData, mainColor, mainData, simpleColor, simpleData;
        return mainData = [
            {month: "2013-01", xbox: 294e3, will: 136e3, playstation: 244e3},
            {month: "2013-02", xbox: 228e3, will: 335e3, playstation: 127e3},
            {month: "2013-03", xbox: 199e3, will: 159e3, playstation: 13e4},
            {month: "2013-04", xbox: 174e3, will: 16e4, playstation: 82e3},
            {month: "2013-05", xbox: 255e3, will: 318e3, playstation: 82e3},
            {month: "2013-06", xbox: 298400, will: 401800, playstation: 98600},
            {month: "2013-07", xbox: 37e4, will: 225e3, playstation: 159e3},
            {month: "2013-08", xbox: 376700, will: 303600, playstation: 13e4},
            {month: "2013-09", xbox: 527800, will: 301e3, playstation: 119400}
        ], mainColor = [$scope.color.infoAlt, $scope.color.danger, $scope.color.success], $scope.main = {data: mainData, type: "area", options: {xkey: "month", ykeys: ["xbox", "will", "playstation"], labels: ["xbox", "will", "playstation"], lineColors: mainColor, lineWidth: 0, behaveLikeLine: !0, pointSize: 0}}, simpleData = [
            {year: "2008", value: 20},
            {year: "2009", value: 10},
            {year: "2010", value: 5},
            {year: "2011", value: 5},
            {year: "2012", value: 20},
            {year: "2013", value: 19}
        ], simpleColor = [$scope.color.primary], $scope.simple1 = {data: simpleData, type: "line", options: {xkey: "year", ykeys: ["value"], labels: ["Value"], lineWidth: "2", lineColors: simpleColor}}, $scope.simple2 = {data: simpleData, type: "area", options: {xkey: "year", ykeys: ["value"], labels: ["Value"], lineWidth: "2", lineColors: simpleColor}}, comboData = [
            {month: "1", a: 20, b: 30},
            {month: "2", a: 30, b: 20},
            {month: "3", a: 20, b: 10},
            {month: "4", a: 10, b: 20},
            {month: "5", a: 20, b: 30},
            {month: "6", a: 30, b: 20},
            {month: "7", a: 20, b: 10},
            {month: "8", a: 10, b: 20},
            {month: "9", a: 20, b: 30},
            {month: "10", a: 30, b: 20},
            {month: "11", a: 20, b: 10},
            {month: "12", a: 10, b: 20}
        ], comboColor = [$scope.color.success, $scope.color.danger, $scope.color.infoAlt], $scope.combo1 = {data: comboData, type: "line", options: {xkey: "month", ykeys: ["a", "b"], labels: ["Value A", "Value B"], lineWidth: "2", lineColors: comboColor}}, $scope.combo2 = {data: comboData, type: "area", options: {xkey: "month", ykeys: ["a", "b"], labels: ["Value A", "Value B"], lineWidth: "2", lineColors: comboColor}}, barData = [
            {year: "2008", a: 20, b: 16, c: 12},
            {year: "2009", a: 10, b: 22, c: 30},
            {year: "2010", a: 5, b: 14, c: 20},
            {year: "2011", a: 5, b: 12, c: 19},
            {year: "2012", a: 20, b: 19, c: 13},
            {year: "2013", a: 28, b: 22, c: 20}
        ], barColor = [$scope.color.infoAlt, $scope.color.success, $scope.color.warning], $scope.bar1 = {data: barData, type: "bar", options: {xkey: "year", ykeys: ["a", "b", "c"], labels: ["Value A", "Value B", "Value C"], barColors: barColor}}, $scope.bar2 = {data: barData, type: "bar", options: {xkey: "year", ykeys: ["a", "b", "c"], labels: ["Value A", "Value B", "Value C"], barColors: barColor, stacked: !0}}, donutColor = [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger], donutData = [
            {label: "Download Sales", value: 12},
            {label: "In-Store Sales", value: 30},
            {label: "Mail-Order Sales", value: 20},
            {label: "Online Sales", value: 19}
        ], $scope.donut1 = {data: donutData, type: "donut", options: {xkey: "year"}}, $scope.donut2 = {data: donutData, type: "donut", options: {xkey: "year", colors: donutColor}}, $scope.donut3 = {data: donutData, type: "donut", options: {xkey: "year", formatter: "return '$' + y;"}}
    }]).controller("flotChartCtrl", ["$scope", function ($scope) {
        var areaChart, barChart, lineChart1;
        return lineChart1 = {}, lineChart1.data1 = [
            [1, 15],
            [2, 20],
            [3, 14],
            [4, 10],
            [5, 10],
            [6, 20],
            [7, 28],
            [8, 26],
            [9, 22]
        ], $scope.line1 = {}, $scope.line1.data = [
            {data: lineChart1.data1, label: "Trend"}
        ], $scope.line1.options = {series: {lines: {show: !0, fill: !0, fillColor: {colors: [
            {opacity: 0},
            {opacity: .3}
        ]}}, points: {show: !0, lineWidth: 2, fill: !0, fillColor: "#ffffff", symbol: "circle", radius: 5}}, colors: [$scope.color.primary, $scope.color.infoAlt], tooltip: !0, tooltipOpts: {defaultTheme: !1}, grid: {hoverable: !0, clickable: !0, tickColor: "#f9f9f9", borderWidth: 1, borderColor: "#eeeeee"}, xaxis: {ticks: [
            [1, "Jan."],
            [2, "Feb."],
            [3, "Mar."],
            [4, "Apr."],
            [5, "May"],
            [6, "June"],
            [7, "July"],
            [8, "Aug."],
            [9, "Sept."],
            [10, "Oct."],
            [11, "Nov."],
            [12, "Dec."]
        ]}}, areaChart = {}, areaChart.data1 = [
            [2007, 15],
            [2008, 20],
            [2009, 10],
            [2010, 5],
            [2011, 5],
            [2012, 20],
            [2013, 28]
        ], areaChart.data2 = [
            [2007, 15],
            [2008, 16],
            [2009, 22],
            [2010, 14],
            [2011, 12],
            [2012, 19],
            [2013, 22]
        ], $scope.area = {}, $scope.area.data = [
            {data: areaChart.data1, label: "Value A", lines: {fill: !0}},
            {data: areaChart.data2, label: "Value B", points: {show: !0}, yaxis: 2}
        ], $scope.area.options = {series: {lines: {show: !0, fill: !1}, points: {show: !0, lineWidth: 2, fill: !0, fillColor: "#ffffff", symbol: "circle", radius: 5}, shadowSize: 0}, grid: {hoverable: !0, clickable: !0, tickColor: "#f9f9f9", borderWidth: 1, borderColor: "#eeeeee"}, colors: [$scope.color.success, $scope.color.infoAlt], tooltip: !0, tooltipOpts: {defaultTheme: !1}, xaxis: {mode: "time"}, yaxes: [
            {},
            {position: "right"}
        ]}, barChart = {}, barChart.data1 = [
            [2008, 20],
            [2009, 10],
            [2010, 5],
            [2011, 5],
            [2012, 20],
            [2013, 28]
        ], barChart.data2 = [
            [2008, 16],
            [2009, 22],
            [2010, 14],
            [2011, 12],
            [2012, 19],
            [2013, 22]
        ], barChart.data3 = [
            [2008, 12],
            [2009, 30],
            [2010, 20],
            [2011, 19],
            [2012, 13],
            [2013, 20]
        ], $scope.barChart = {}, $scope.barChart.data = [
            {label: "Value A", data: barChart.data1},
            {label: "Value B", data: barChart.data2},
            {label: "Value C", data: barChart.data3}
        ], $scope.barChart.options = {series: {stack: !0, bars: {show: !0, fill: 1, barWidth: .3, align: "center", horizontal: !1, order: 1}}, grid: {hoverable: !0, borderWidth: 1, borderColor: "#eeeeee"}, tooltip: !0, tooltipOpts: {defaultTheme: !1}, colors: [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger]}, $scope.pieChart = {}, $scope.pieChart.data = [
            {label: "Download Sales", data: 12},
            {label: "In-Store Sales", data: 30},
            {label: "Mail-Order Sales", data: 20},
            {label: "Online Sales", data: 19}
        ], $scope.pieChart.options = {series: {pie: {show: !0}}, legend: {show: !0}, grid: {hoverable: !0, clickable: !0}, colors: [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger], tooltip: !0, tooltipOpts: {content: "%p.0%, %s", defaultTheme: !1}}, $scope.donutChart = {}, $scope.donutChart.data = [
            {label: "Download Sales", data: 12},
            {label: "In-Store Sales", data: 30},
            {label: "Mail-Order Sales", data: 20},
            {label: "Online Sales", data: 19}
        ], $scope.donutChart.options = {series: {pie: {show: !0, innerRadius: .5}}, legend: {show: !0}, grid: {hoverable: !0, clickable: !0}, colors: [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger], tooltip: !0, tooltipOpts: {content: "%p.0%, %s", defaultTheme: !1}}, $scope.donutChart2 = {}, $scope.donutChart2.data = [
            {label: "Download Sales", data: 12},
            {label: "In-Store Sales", data: 30},
            {label: "Mail-Order Sales", data: 20},
            {label: "Online Sales", data: 19},
            {label: "Direct Sales", data: 15}
        ], $scope.donutChart2.options = {series: {pie: {show: !0, innerRadius: .45}}, legend: {show: !1}, grid: {hoverable: !0, clickable: !0}, colors: ["#1BB7A0", "#39B5B9", "#52A3BB", "#619CC4", "#6D90C5"], tooltip: !0, tooltipOpts: {content: "%p.0%, %s", defaultTheme: !0}}
    }]).controller("sparklineCtrl", ["$scope", function ($scope) {
        return $scope.demoData1 = {data: [3, 1, 2, 2, 4, 6, 4, 5, 2, 4, 5, 3, 4, 6, 4, 7], options: {type: "line", lineColor: "#fff", highlightLineColor: "#fff", fillColor: $scope.color.success, spotColor: !1, minSpotColor: !1, maxSpotColor: !1, width: "100%", height: "150px"}}, $scope.simpleChart1 = {data: [3, 1, 2, 3, 5, 3, 4, 2], options: {type: "line", lineColor: $scope.color.primary, fillColor: "#fafafa", spotColor: !1, minSpotColor: !1, maxSpotColor: !1}}, $scope.simpleChart2 = {data: [3, 1, 2, 3, 5, 3, 4, 2], options: {type: "bar", barColor: $scope.color.primary}}, $scope.simpleChart3 = {data: [3, 1, 2, 3, 5, 3, 4, 2], options: {type: "pie", sliceColors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.infoAlt, $scope.color.warning, $scope.color.danger]}}, $scope.tristateChart1 = {data: [1, 2, -3, -5, 3, 1, -4, 2], options: {type: "tristate", posBarColor: $scope.color.success, negBarColor: $scope.color.danger}}, $scope.largeChart1 = {data: [3, 1, 2, 3, 5, 3, 4, 2], options: {type: "line", lineColor: $scope.color.info, highlightLineColor: "#fff", fillColor: $scope.color.info, spotColor: !1, minSpotColor: !1, maxSpotColor: !1, width: "100%", height: "150px"}}, $scope.largeChart2 = {data: [3, 1, 2, 3, 5, 3, 4, 2], options: {type: "bar", barColor: $scope.color.success, barWidth: 10, width: "100%", height: "150px"}}, $scope.largeChart3 = {data: [3, 1, 2, 3, 5], options: {type: "pie", sliceColors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.infoAlt, $scope.color.warning, $scope.color.danger], width: "150px", height: "150px"}}
    }]);
})();