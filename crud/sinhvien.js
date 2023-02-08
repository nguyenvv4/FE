window.SinhVienController = function ($scope, $http) {
  $scope.sinhviens = [];

  $http.get("http://localhost:3000/sinhviens").then(
    function (response) {
      if (response.statusText === "OK") {
        $scope.sinhviens = response.data;
      }
    },
    function (errors) {
      console.log(errors);
    }
  );
};
