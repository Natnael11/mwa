angular
  .module("meanTravel")
  .controller("TravelsAddController", TravelsAddController);

function TravelsAddController(TravelDataFactory) {
  const vm = this;
  vm.country = "Travel Search App";
  vm.addTravel = function () {
    const postData = {
      country: vm.country,
      city: vm.city,
      popullation: vm.popullation,
     
    };
    if (vm.travelForm.$valid) {
      // call rest api
      TravelDataFactory.addOne(postData)
        .then(function (response) {
          console.log("Travel saved");
        })
        .catch(function (error) {
          console.log("Error while saving ", error);
        });
    }
  };
}

