window.SanPhamController = function ($scope, $http) {
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
          alert("Thêm sản phẩm thành công");
        }
      });
  };
  $scope.detail = function (id) {
    $http.get("http://localhost:3000/sanphams/" + id).then(
      function (response) {
        console.log(response);
        if (response.statusText === "OK") {
          $scope.id = response.data.id;
          $scope.tenSp = response.data.tenSp;
          $scope.soLuongTon = response.data.soLuongTon;
          $scope.giaBan = response.data.giaBan;
          $scope.giamGia = response.data.giamGia;
        }
      },
      function (errors) {
        console.log(errors);
      }
    );
  };
  $scope.updateSanPham = function () {
    $http
      .put("http://localhost:3000/sanphams/" + $scope.id, {
        id: $scope.id,
        tenSp: $scope.tenSp,
        giaBan: $scope.giaBan,
        soLuongTon: $scope.soLuongTon,
        giamGia: $scope.giamGia,
      })
      .then(function (response) {
        if (response.status === 200) {
          alert("Sua sản phẩm thành công");
        }
      });
  };
};
