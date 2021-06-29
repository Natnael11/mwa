angular.module("myProperApp").controller("boredController", boredController);

function boredController($http) {
  var vm = this;
  $http.get("https://amiiboapi.com/api/amiibo/?character=zelda&showusage/amiiboSeries/").then(function (response) {
    console.log(response.data.bored);
    vm.bored = response.data;
  });
}
