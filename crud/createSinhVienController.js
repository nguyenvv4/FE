window.CreateSinhVienController = function ($scope, $http, $location) {
  $scope.name = "";
  $scope.lop = "";

  $scope.onSubmit = function () {
    return $http
      .post("http://localhost:3000/sinhviens", {
        name: $scope.name,
        lop: $scope.lop,
      })
      .then(
        function (response) {
          console.log(response);
          if (response.status === 201) {
            $location.path("sinhviens");
            alert("Successful Add");
          }
        },
        function (errors) {
          console.log(errors);
        }
      );
  };
};
