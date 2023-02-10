window.CreateSanPhamController = function ($scope, $http, $location) {
  $scope.onSubmit = function () {
    $http
      .post("http://localhost:3000/sanphams", {
        id: $scope.id,
        tenSp: $scope.tenSp,
        giaBan: $scope.giaBan,
        soLuongTon: $scope.soLuongTon,
        giamGia: $scope.giamGia,
      })
      .then(function (response) {
        if (response.status === 201) {
          alert("Thêm sản phẩm thành công");
          $location.path("/home");
        }
      });
  };
};
