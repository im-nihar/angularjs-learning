// controller
app.controller("MainController", [
  "$scope",
  function ($scope) {
    $scope.list = ["nihar", "ayush", "asd", "werd"];
    $scope.addItem = function () {
      $scope.list.push($scope.addToDo);
    };
  },
]);
