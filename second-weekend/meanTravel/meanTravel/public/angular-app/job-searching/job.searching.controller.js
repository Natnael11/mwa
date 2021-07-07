angular
  .module("meanTravel")
  .controller("TravelController", TravelController);

function TravelController(TravelDataFactory) {
  const vm = this;

  vm.name = "Travel Search App";

  vm.search = function () {
    console.log("search received");
    
    TravelDataFactory.searchTravel(vm.country)
      .then(function (response) {
        console.log("Search found");
        vm.jobs = response;
        console.log(vm.travels);
        
      })
      .catch(function (error) {
        console.log("Error while searching ", error);
      });
  };

  
}
