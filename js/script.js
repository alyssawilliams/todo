var app = angular.module("todoApp", []);
app.controller("todoCtrl", function($scope, $http) {

	$scope.taskList = [];
	$scope.completedTasks = 0;

	$http.get("https://api.myjson.com/bins/3pxvw")
		.success(function(result) {
			$scope.taskList = result.data;
		})
		.error(function (data, status, headers, config) {
			$(".list").hide();
			$(".list-wrapper").addClass("error");
			$("h4").css("display", "block");
		});

		$scope.completeTask = function($index) {
			if ($scope.taskList[$index].completed === true) {
					$scope.completedTasks++;
			}
			else {
				$scope.completedTasks--;
			}

			if ($scope.completedTasks == $scope.taskList.length) {
	 			$(".count").hide();
	 			$(".done").css("display", "block");
	 		}
	 		else {
	 			$(".done").hide();
	 			$(".count").css("display", "block");
	 		}
	 	};
});
