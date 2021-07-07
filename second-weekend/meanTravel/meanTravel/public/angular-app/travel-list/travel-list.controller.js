angular.module("meanTravel").controller("TravelsController", TravelsController);

function TravelsController(TravelsDataFactory) {
    const vm = this;
    vm.title = "Mean Travel App"
    TravelsDataFactory.getAll().then(function(response) {
        vm.travels=response;
    });
    
    vm.isLoggedIn = function () {
        return AuthFactory.auth;
      };

    vm.addTravel = function () {
        const postData = {
            country : vm.newTravelCountry,
            city : vm.newTravelCity,
            popullation : vm.newTravelPopullation,
           

        };
        if(vm.travelForm.$valid) {
            TravelsDataFactory.addOne(postData)
            .then(function (response) {
                console.log("Travel Saved");
            })
            .catch(function (error) {
                console.log("Error while saving", error)
            });
        }
    };
}