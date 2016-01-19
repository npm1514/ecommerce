var app = angular.module("eCommerce", ['ui.router']);

app.config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
    .state("sell", {
      url: "/sell",
      templateUrl: "templates/sell.html"
    })
    .state('addmodify', {
      url: '/addmodify',
      templateUrl: 'templates/addmodify.html'
    });
    $urlRouterProvider
      .otherwise('/sell');
});

app.controller('mainCtrl',function ($scope, mainService) {
  $scope.products = {};
  $scope.getProducts = function () {
    mainService.getProducts().then(function(response){
      console.log('test2');
      console.log(response);
      $scope.products = response;
    });
  };
  $scope.getProducts();

});

app.service('mainService', function($http){
  this.getProducts = function () {
    console.log('test1');
    return $http ({
      method: "GET",
      url: '/products',
    }).then(function (response) {

      return response.data;
    });
  };

});
