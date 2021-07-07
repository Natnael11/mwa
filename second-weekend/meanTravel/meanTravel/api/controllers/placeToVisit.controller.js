const { ReplSet } = require("mongodb");
const mongoose = require("mongoose");
const Travel = mongoose.model("visit");

const _addPlaceToVisit = function(req, res, travel){
    console.log("inside _addPlaceToVisit")
    // console.log(req.body.name);
    // console.log(req.body.country);
    travel._addPlaceToVisit.name = req.body.name;
    travel._addPlaceToVisit.location = req.body.location;
    travel._addPlaceToVisit.yearBuilt = (parseInt).req.body.yearBuilt;
    travel._addPlaceToVisit.architects = req.body.architects;
    
    travel.save(function(err, travel){
        console.log("upadated travel ", travel); 
        const response = {
            status: 200,
            message: travel
          };
          if (err) {
            console.log("Error saving place to visit");
            response.status = 500;
            response.message = err;
          }
          res.status(response.status).json(response.message);
    })
}


module.exports.placeToVisitGetOne = function(req, res){
    console.log("GetOne place to visit request received");
    const travelId = req.params.travelId;
    Travel.findById(travelId).select("place t visit").exec(function(err, travel){
        res.status(200).json(travel.placeToVisit);
    });
}

module.exports.placeToVisitAddOne = function (req, res) {
    console.log("POST new place to visit");
    console.log(req.body);
    const travelId = req.params.travelId;
    Travel.findById(travelId).exec(function(err, travel){
        const response = {
            status: 200,
            message: travel,
          };
          if (err) {
            console.log("Error creating place to visit");
            response.status = 500;
            response.message = err;
          } else if(!travel){
              console.log("Error creating place to visit");
              response.status = 404;
              response.message = {"message": "Travel id not found"};
          }
          if(travel){
              console.log("place to visit is ", Travel);
              _addPlaceToVisit(req, res, travel);
          }else{
            res.status(response.status).json(response.message);
            console.log("Going to add method");
          }          
        }     
  )};


  module.exports.placeToVisitFullUpdateOne = function(req, res){
    console.log("GetOne place to visit request received");
    const travelId = req.params.travelId;
    Travel.findById(travelId).exec(function(err, travel){
        if(err){
            res.status(500).message(err);
        } else if(!travel){
            res.status(404).json({"message": "travel ID  not found"});
        }
        if(travel){
            travel.placeToVisit.name = req.body.name;
            travel.placeToVisit.location = req.body.location;
            travel.placeToVisit.yearBuilt = (parseInt).req.body.yearBuilt;
            travel.placeToVisit.architects = req.body.architects;
            
            travel.save(function(err, updatedTravel){
                if(err){
                    res.status(500).json(err);
                }else{
                    res.status(204).json(updatedTravel.placeToVisit);
                }
            });
        }
    });
}

module.exports.placeToVisitDeleteOne = function(req, res){
    console.log("DeleteOne place to visit request received");
    const travelId = req.params.travelId;
    Travel.findById(travelId).exec(function(err, travel){
        if(err){
            res.status(500).message(err);
        } else if(!travel){
            res.status(404).json({"message": "travel ID  not found"});
        }
        if(travel){
            travel.placeToVisit.remove();
            travel.save(function(err, updatedTravel){
                if(err){
                    res.status(500).json(err);
                }else{
                    res.status(204).json(updatedTravel.placeToVisit);
                }
            });
        }
    });
}