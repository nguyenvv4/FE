window.CreateSinhVienController = function ($scope, $http, $location) {
  $scope.id = "";
  $scope.name = "";
  $scope.lop = "";

  $scope.onSubmit = function () {
    return $http
      .post("http://localhost:3000/sinhviens", {
        id: $scope.id,
        name: $scope.name,
        lop: $scope.lop,
      })
      .then(
        function (response) {
          console.log(response);
          if (response.status === 201) {
            // $location.path("/home");
            alert("Successful Add");
          }
        },
        function (errors) {
          console.log(errors);
        }
      );
  };
};
