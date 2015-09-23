var app = angular.module("todoApp", []);
app.controller("todoCtrl", function($scope, $http) {

	$scope.taskList = [];

	$http.get("https://api.myjson.com/bins/2avds")
		.success(function(result) {
			$scope.taskList = result.data;
		})
		.error(function (data, status, headers, config) {
			$scope.error = true;
	});

	$scope.completedTasks = 0;

	$scope.completeTask = function(task) {
		if (task.status == "completed") {
			$scope.completedTasks++;
		}
		else if (task.status == "todo") {
			$scope.completedTasks--;
		}

		if ($scope.completedTasks == $scope.taskList.length) {
			$scope.allTasks = "done";
		}
		else {
			$scope.allTasks = "count";
		}
	};	
});