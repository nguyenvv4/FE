window.XeMayController = function ($scope, $http) {
  $scope.xemays = [];
  $http.get("http://localhost:3000/xemay").then(function (response) {
    if (response.status === 200) {
      $scope.xemays = response.data;
    }
  });
  $scope.addNew = function () {
    var id = $scope.id;
    if (id === undefined) {
      alert("Sai thong tin");
    } else {
      $http
        .post("http://localhost:3000/xemay", {
          id: $scope.id,
          name: $scope.name,
          price: $scope.price,
          color: $scope.color,
          type: $scope.type,
        })
        .then(function (response) {
          if (response.status === 201) {
            alert("Thêm xe máy thành công");
          }
        });
    }
  };
  $scope.detail = function (id) {
    $http.get("http://localhost:3000/xemay/" + id).then(function (response) {
      if (response.status === 200) {
        $scope.id = response.data.id;
        $scope.name = response.data.name;
        $scope.price = response.data.price;
        $scope.color = response.data.color;
        $scope.type = response.data.type;
      }
    });
  };
};
