window.XeMayController = function ($scope, $http) {
  $scope.xemays = [];
  $http.get("http://localhost:3000/xemay").then(function (response) {
    if (response.status === 200) {
      $scope.xemays = response.data;
    }
  });

  $scope.update = function () {
    $http.get("http://localhost:3000/xemay/" + $scope.id).then(
      function (response) {
        if (response.status === 200) {
          $http
            .put("http://localhost:3000/xemay/" + $scope.id, {
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

  $scope.delete = function (id) {
    $http.delete("http://localhost:3000/xemay/" + id).then(function (response) {
      if (response.status === 200) {
        alert("Xoa thanh cong");
      }
    });
  };
  $scope.addNew = function () {
    var id = $scope.id;
    if (id === undefined || id === null || id === "") {
      alert("sai");
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
            alert("Them thanh cong");
          }
        });
    }
  };
};
