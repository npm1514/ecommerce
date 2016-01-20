angular.module("eCommerce", ['ui.router'])
.config(function($urlRouterProvider, $stateProvider) {
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
