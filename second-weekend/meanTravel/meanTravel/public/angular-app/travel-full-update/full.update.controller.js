angular
  .module("meanTravel")
  .controller("TravelFullUpdateController", JobFullUpdateController);

function TravelFullUpdateController(TravelDataFactory, $routeParams) {
  const vm = this;
  const travelId = $routeParams.id;

  vm.fullUpdate = function () {
    console.log("full update received");
    const postData = {
      country: vm.country,
      city: vm.city,
      popullation: vm.popullation,
     
    };
    TravelDataFactory.fullUpdate(travelId, postData)
      .then(function (response) {
        console.log("Travel updated fully");
      })
      .catch(function (error) {
        console.log("Error while fully updating ", error);
      });
  };
}
