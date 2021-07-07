const express = require("express");
// const controllerGames = require("../controllers/games.controller");
// // const controllerPublishers = require("../controllers/publisher.controller");
// // const controllerReview = require("../controllers/review.controller");
const controllerTravel = require("../controllers/travel.controller");
const controllerPlaceToVisit = require("../controllers/placeToVisit.controller");
const controllerUsers = require("../controllers/users.controller");

const router = express.Router();

// travel


router
  .route("/travel")
  .get(controllerTravel.travelGetAll)
  .post(controllerUsers.authenticate, controllerTravel.travelAddOne);

router.route("/travel/:travelId")
      .get(controllerTravel.travelGetOne)
      .put(controllerUsers.authenticate, controllerTravel.travelFullUpdateOne)
      .patch(controllerUsers.authenticate, controllerTravel.TravelPartialUpdateOne)
      .delete(controllerUsers.authenticate, controllerTravel.travelDeleteOne);

// place to visit

router.route("/travel/:travelId/placeToVisit/:placeToVisitId")
      .get(controllerPlaceToVisit.placeToVisitGetOne)
      .put(controllerUsers.authenticate, controllerPlaceToVisit.placeToVisitFullUpdateOne)
      .delete(controllerUsers.authenticate, controllerPlaceToVisit.placeToVisitDeleteOne);

router.route("/travel/:travleId/placeToVisit")
       .post(controllerUsers.authenticate, controllerPlaceToVisit.placeToVisitAddOne)

router.route("/users").post(controllerUsers.register);

router.route("/users/login").post(controllerUsers.login);       

module.exports = router;
