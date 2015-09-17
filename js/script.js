var app = angular.module("todoApp", []);
app.controller("todoCtrl", function($scope, $http) {

	$scope.taskList = [];
	$scope.completedTasks = 0;
	$scope.error = false;
	$scope.done = false;

	$http.get("https://api.myjson.com/bins/3pxvw")
		.success(function(result) {
			$scope.taskList = result.data;
		})
		.error(function (data, status, headers, config) {
			$scope.error = true;
		});

		$scope.completeTask = function($index) {
			if ($scope.taskList[$index].completed === true) {
					$scope.completedTasks++;
			}
			else {
				$scope.completedTasks--;
			}

			if ($scope.completedTasks == $scope.taskList.length) {
				$scope.done = true;
	 		}
	 		else {
	 			$scope.done = false;
	 		}
	 	};
});
