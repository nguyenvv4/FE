window.SinhVienController = function ($scope, $http) {
  $scope.listSinhVien = [];
  $http.get("http://localhost:3000/sinhviens").then(function (response) {
    $scope.listSinhVien = response.data;
  });
};
