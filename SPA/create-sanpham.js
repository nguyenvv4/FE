window.CreateSanPhamController = function ($scope, $http, $location) {
  $scope.id = "";
  $scope.tenSp = "";
  $scope.soLuongTon = "";
  $scope.giaBan = "";
  $scope.giamGia = "";
  $scope.onSubmit = function () {
    $http
      .post("http://localhost:3000/sanphams", {
        id: $scope.id,
        tenSp: $scope.tenSp,
        soLuongTon: $scope.soLuongTon,
        giaBan: $scope.giaBan,
        giamGia: $scope.giamGia,
      })
      .then(function (response) {
        if (response.status === 201) {
          alert("Them thanh cong");
          $location.path("/home");
        }
      });
  };
};
