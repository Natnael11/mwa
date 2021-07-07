angular.module("meanTravel").factory("TravelsDataFactory", TravelsDataFactory);

function TravelsDataFactory($http) {
    return {
        getAll: getAllTravels,
        getOne: getOneTravel,
        addOne: addOneTravel,
        deleteOne: deleteOneTravel,
        fullUpdate: fullUpdateOneTravel,
        partialUpdate: partialUpdateOneTravel,
        searchTravel: searchTravelByCountry,
    };

    function getAllTravels() {
        return $http.get("/api/travel").then(complete).catch(failed);
    }

    function deleteOneTravel(travelId) {
        return $http
            .get("/api/travel/" + travelId)
            .then(complete)
            .catch(failed);
    }



    function getOneTravel(travelId) {
        return $http.get("/api/travel/" + travelId).then(complete).catch(failed);

    }

    function deleteOneTravel(travelId) {
        return $http
            .delete("/api/travel/" + travelId)
            .then(complete)
            .catch(failed);
    }
    function addOneTravel(travel) {
        console.log("inside add one travel")
        return $http
            .post("/api/travel", travel)
            .then(complete)
            .catch(failed);
        console.log("end of add one travel")
    }

    function fullUpdateOneTravel(id, travel) {
        return $http
            .put("/api/travel/" + id, travel)
            .then(complete)
            .catch(failed);
    }
    function partialUpdateOneTravel(id, travel) {
        return $http
            .patch("/api/travel/" + id, travel)
            .then(complete)
            .catch(failed);
    }
    function searchTravelByCountry(country) {
        return $http
            .post("/api/travel/search/" + country)
            .then(complete)
            .catch(failed);
    }


    function complete(response) {
        return response.data;
    }

    function failed(error) {
        return error.status.statusText;

    }
}