angular.module("meanGames").controller("QRController", QRController);

function QRController(GamesDataFactory) {
  const vm = this;

  vm.title = "Game Search Using QR-Code";

  vm.search = function () {
    console.log("search received");
    // console.log("title : " + vm.title);
    console.log(" front end id type: " + typeof vm.id);
    console.log("the id is " + vm.id);
    GamesDataFactory.getOne(vm.id)
      .then(function (response) {
        console.log("Search found");
        vm.games = response;
        console.log(vm.games);
      })
      .catch(function (error) {
        console.log("Error while searching ", error);
      });
  };
}
