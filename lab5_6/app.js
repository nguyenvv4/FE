window.AoController = function ($scope, $http) {
  $scope.aos = [];
  $http.get("http://localhost:3000/ao").then(function (response) {
    if (response.status === 200) {
      $scope.aos = response.data;
    }
  });

  $scope.update = function () {
    $http.get("http://localhost:3000/ao/" + $scope.id).then(
      function (response) {
        if (response.status === 200) {
          $http
            .put("http://localhost:3000/ao/" + $scope.id, {
              name: $scope.name,
              price: $scope.price,
              color: $scope.color,
              type: $scope.type,
            })
            .then(function (response) {
              if (response.status === 200) {
                alert("Sua thanh cong");
              }
            });
        }
      },
      function (error) {
        alert("khong tim thay");
      }
    );
  };

  $scope.detail = function (id) {
    $http.get("http://localhost:3000/ao/" + id).then(function (response) {
      if (response.status === 200) {
        $scope.id = response.data.id;
        $scope.name = response.data.name;
        $scope.price = response.data.price;
        $scope.color = response.data.color;
        $scope.type = response.data.type;
      }
    });
  };

  $scope.delete = function (id) {
    $http.delete("http://localhost:3000/ao/" + id).then(function (response) {
      if (response.status === 200) {
        alert("Xoa thanh cong");
      }
    });
  };
  $scope.addNew = function () {
    $http
      .post("http://localhost:3000/ao", {
        id: $scope.id,
        name: $scope.name,
        price: $scope.price,
        color: $scope.color,
        type: $scope.type,
      })
      .then(function (response) {
        if (response.status === 201) {
          alert("Them thanh cong");
        }
      });
  };
};
