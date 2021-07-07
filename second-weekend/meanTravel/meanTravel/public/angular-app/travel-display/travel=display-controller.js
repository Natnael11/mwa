angular.module("meanTravel").controller("TravelController", TravelController);

// function _getStarsArray(rating) {
//     return new Array(rating);
//   }

function TravelController(TravelsDataFactory, $routeParams) {
    const vm = this;
    const travelId= $routeParams.travelId;
    let fullUpdate = false;
    let partialUpdate = false;
    console.log("id in display " + travelId)
    TravelsDataFactory.getOne(travelId).then(function (response) {
        vm.travel = response;
        // vm.stars = _getStarsArray(vm.travel.rate);
    });

    vm.delete = function () {
        console.log("delete received");
        TravelsDataFactory.deleteOne(travelId)
            .then( function (response) {
                console.log("Travel deleted")
            })
            .catch( function (error) {
                console.log("Error while deleting", error)
            });
    };
}
