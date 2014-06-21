(function () {
    "use strict";
    angular.module("app.task", []).factory("taskStorage", function () {
        var DEMO_TASKS, STORAGE_ID;
        return STORAGE_ID = "tasks", DEMO_TASKS = '[ {"title": "Finish homework", "completed": true}, {"title": "Make a call", "completed": true}, {"title": "Build a snowman :)", "completed": false}, {"title": "Apply for monster university!", "completed": false}, {"title": "Play games with friends", "completed": true}, {"title": "Shopping", "completed": false} ]', {get: function () {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || DEMO_TASKS)
        }, put: function (tasks) {
            return localStorage.setItem(STORAGE_ID, JSON.stringify(tasks))
        }}
    }).directive("taskFocus", ["$timeout", function ($timeout) {
        return{link: function (scope, ele, attrs) {
            return scope.$watch(attrs.taskFocus, function (newVal) {
                return newVal ? $timeout(function () {
                    return ele[0].focus()
                }, 0, !1) : void 0
            })
        }}
    }]).controller("taskCtrl", ["$scope", "taskStorage", "filterFilter", "$rootScope", "logger", function ($scope, taskStorage, filterFilter, $rootScope, logger) {
        var tasks;
        return tasks = $scope.tasks = taskStorage.get(), $scope.newTask = "", $scope.remainingCount = filterFilter(tasks, {completed: !1}).length, $scope.editedTask = null, $scope.statusFilter = {completed: !1}, $scope.filter = function (filter) {
            switch (filter) {
                case"all":
                    return $scope.statusFilter = "";
                case"active":
                    return $scope.statusFilter = {completed: !1};
                case"completed":
                    return $scope.statusFilter = {completed: !0}
            }
        }, $scope.add = function () {
            var newTask;
            return newTask = $scope.newTask.trim(), 0 !== newTask.length ? (tasks.push({title: newTask, completed: !1}), logger.logSuccess('New task: "' + newTask + '" added'), taskStorage.put(tasks), $scope.newTask = "", $scope.remainingCount++) : void 0
        }, $scope.edit = function (task) {
            return $scope.editedTask = task
        }, $scope.doneEditing = function (task) {
            return $scope.editedTask = null, task.title = task.title.trim(), task.title ? logger.log("Task updated") : $scope.remove(task), taskStorage.put(tasks)
        }, $scope.remove = function (task) {
            var index;
            return $scope.remainingCount -= task.completed ? 0 : 1, index = $scope.tasks.indexOf(task), $scope.tasks.splice(index, 1), taskStorage.put(tasks), logger.logError("Task removed")
        }, $scope.completed = function (task) {
            return $scope.remainingCount += task.completed ? -1 : 1, taskStorage.put(tasks), task.completed ? $scope.remainingCount > 0 ? logger.log(1 === $scope.remainingCount ? "Almost there! Only " + $scope.remainingCount + " task left" : "Good job! Only " + $scope.remainingCount + " tasks left") : logger.logSuccess("Congrats! All done :)") : void 0
        }, $scope.clearCompleted = function () {
            return $scope.tasks = tasks = tasks.filter(function (val) {
                return!val.completed
            }), taskStorage.put(tasks)
        }, $scope.markAll = function (completed) {
            return tasks.forEach(function (task) {
                return task.completed = completed
            }), $scope.remainingCount = completed ? 0 : tasks.length, taskStorage.put(tasks), completed ? logger.logSuccess("Congrats! All done :)") : void 0
        }, $scope.$watch("remainingCount == 0", function (val) {
            return $scope.allChecked = val
        }), $scope.$watch("remainingCount", function (newVal) {
            return $rootScope.$broadcast("taskRemaining:changed", newVal)
        })
    }]);
})();