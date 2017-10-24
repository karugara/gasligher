angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController", function($scope, localStorageService){
  if (localStorageService.get("angular-todolist")) {
    $scope.todo = [];
  }
/*
{
  descripcion: 'terminar el curso angular',
  fecha: '3/03/14 2:00pm'
}
*/
$scope.addActv = function(){
  $scope.todo.push($scope.newActv);
  $scope.newActv = {};
  }
});
