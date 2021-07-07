angular.module("meanTravel").directive("travelRating", TravelRating);

function TravelRating() {
  return {
    restrict: "E",
    templateUrl: "angular-app/travel-rating/rating.html",
    bindToController: true,
    controller: "TravelController",
    controllerAs: "vm",
    // scope: {},
  };
}
