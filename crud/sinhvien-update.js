window.SinhVienDetailController = function ($scope, $http, $routeParams) {
  var id = $routeParams.id;
  console.log(id);
  $http.get("http://localhost:3000/sinhviens/" + id).then(
    function (response) {
      if (response.statusText === "OK") {
        $scope.id = response.data.id;
        $scope.name = response.data.name;
        $scope.lop = response.data.lop;
      }
    },
    function (errors) {
      console.log(errors);
    }
  );
  $http.put("http://localhost:3000/sinhviens/");
};
