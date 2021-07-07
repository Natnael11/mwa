angular.module("meanTravel").directive("travelsNavigation", TravelsNavigation);

function TravelsNavigation() {
  return {
    restrict: "E",
    templateUrl: "angular-app/navigation-directive/navigation-directive.html",
  };
}
