window.SanPhamController = function ($scope, $http, $location) {
  $scope.sanphams = [];

  $http.get("http://localhost:3000/sanphams").then(
    function (response) {
      console.log(response);
      if (response.statusText === "OK") {
        $scope.sanphams = response.data;
      }
    },
    function (errors) {
      console.log(errors);
    }
  );

  $scope.addSanPham = function () {
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
          alert("Them san pham thanh cong");
          $location.path("/home");
        }
      });
  };
};
