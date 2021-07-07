angular
  .module("meanTravel")
  .controller("TravelPartialUpdateController", TravelPartialUpdateController);

// function _getStarsArray(rating) {
//   return new Array(rating);
// }

function TravelPartialUpdateController(TravelDataFactory, $routeParams) {
  const vm = this;
  const travelId = $routeParams.id;

  vm.partialJob = function () {
    console.log("full update received");

    const postData = {
      country: vm.country,
      city: vm.city,
      popullation: vm.popullation,
      
    };
    TravelDataFactory.partialUpdate(travelId, postData)
      .then(function (response) {
        console.log("Travel updated fully");
      })
      .catch(function (error) {
        console.log("Error while fully updating ", error);
      });
  };
}
