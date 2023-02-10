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
};
