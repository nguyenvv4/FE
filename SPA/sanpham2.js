window.SanPhamController = function ($scope, $http, $location, $routeParams) {
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
    $http
      .put("http://localhost:3000/sanphams/" + id, {
        tenSp: $scope.tenSp,
        giaBan: $scope.giaBan,
        soLuongTon: $scope.soLuongTon,
        giamGia: $scope.giamGia,
      })
      .then(function (response) {
        if (response.status === 200) {
          alert("Sua san pham thanh cong");
          $location.path("/home");
        }
      });
  };

  var id = $routeParams.id;
  if (id) {
    $http.get("http://localhost:3000/sanphams/" + id).then(function (response) {
      if (response.status === 200) {
        $scope.id = response.data.id;
        $scope.tenSp = response.data.tenSp;
        $scope.giaBan = response.data.giaBan;
        $scope.soLuongTon = response.data.soLuongTon;
        $scope.giamGia = response.data.giamGia;
      }
    });
  }
};
