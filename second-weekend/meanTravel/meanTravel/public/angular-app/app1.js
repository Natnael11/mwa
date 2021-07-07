angular.module("meanTravel", ["ngRoute", "angular-jwt"]).config(config).run(run);

function config($routeProvider, $httpProvider ) {
  $httpProvider.interceptors.push("AuthInterceptor");
  $routeProvider
    .when("/", {
      templateUrl: "angular-app/welcome/welcome.html",
      access: {restricted: false}
    })
    .when("/travel", {
      templateUrl: "angular-app/travel-list/travel-list.html",
      controller: "TravelsController",
      controllerAs: "vm",
      access: {restricted: false}
    })
    .when("/travel/:travelId", {
      templateUrl: "angular-app/travel-display/travel-display.html",
      controller: "TravelController",
      controllerAs: "vm",
      access: {restricted: false}
    })
    .when("/addTravel", {
      templateUrl: "angular-app/travel-add/travel.add.html",
      controller: "TravelsAddController",
      controllerAs: "vm",
    })
    .when("/travel/fullUpdate/:id", {
      templateUrl: "angular-app/travel-full-update/full.update.html",
      controller: "TravelFullUpdateController",
      controllerAs: "vm",
    })
    .when("/travel/partialUpdate/:id", {
      templateUrl: "angular-app/travel-partial-update/partial.update.html",
      controller: "TravelPartialUpdateController",
      controllerAs: "vm",
    })
    .when("/search", {
      templateUrl: "angular-app/job-searching/job.searching.html",
      controller: "TravelSearchController",
      controllerAs: "vm",
    })
    .when("/register", {
      templateUrl: "angular-app/register/register.html",
      controller: "RegisterController",
      controllerAs: "vm",
      access: {restricted: false}
    }).when("/profile", {
      templateUrl: "angular-app/profile/profile.html",
      access: {restricted: true}
     
    }).otherwise({
      redirectTo: "/",
    });
}
function run($rootScope, $location, $window, AuthFactory) {
  $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
    if(nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.auth ) {
      event.preventDefault();
      $location.path("/");
    }
  }
  )
}









// angular.module("meanTravel", ['ngRoute']).config(config);

// function config($routeProvider) {
//     $routeProvider
//     .when("/", {
//         templateUrl:"angular-app/travel-list/travel-list.html",
//         controller: "TravelsController",
//         controllerAs: "vm"
//     }).when("/travel/:travelId", {
//         templateUrl:"angular-app/travel-display/travel-display.html",
//         controller: "TravelController",
//         controllerAs: "vm"

//     });
// }