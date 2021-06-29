angular.module("myProperApp", ["ngRoute"]).config(config);

function config($routeProvider) {
  $routeProvider
    .when("/bored", {
      templateUrl: "main/boredPage.html",
      controller: "boredController",
      controllerAs: "boredCtrl",
    })
    .otherwise({
      redirectTo: "/",
    });
}
