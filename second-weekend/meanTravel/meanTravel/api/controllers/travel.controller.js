const mongoose = require("mongoose");

const Travel = mongoose.model("visit");

module.exports.travelGetAll = function (req, res) {
  console.log("JSON request received");
  let offset = 0;
  let count = 5;
  const maxCount = 30;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count);
  }


  if (isNaN(offset) || isNaN(count)) {
    res.status(400).json({ message: "Query offset or count is not a number" });
    return;
  }

  if (count > maxCount) {
    count = maxCount;
    res.status(400).json({ message: "cannot exceed count of " + maxCount });
  }

  console.log("offset ", offset, " count ", count);

  Travel.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, travel) {
      if (err) {
        console.log("Error finding travel", err);
        res.status(500).json(err);
      } else {
        console.log("Found travel", travel);
        res.status(200).json(travel);
        console.log("done 1");
      }
    });
};

module.exports.travelGetOne = function (req, res) {
  console.log("GetOne request received");
  const travelId = req.params.travelId;
  Travel.findById(travelId).exec(function (err, travel) {
    const response = {
      status: 200,
      message: travel,
    };
    if (err) {
      console.log("Error finding travel");
      response.status = 500;
      response.message = err;
    } else if (!travel) {
      response.status = 400;
      response.message = { "message": "Travel ID not found" };
    }
    res.status(response.status).json(response.message);
  });
};

module.exports.travelAddOne = function (req, res) {
  console.log("POST new travel");
  console.log(req.body);
  const newTravel = {
    country: req.body.country,
    city:req.body.city,
    popullation: parseInt(req.body.popullation),
    placeToVisit:{},
  }
  Travel.create(newTravel, function(err,travel){
    const response = {
      status: 200,
      message: travel,
    };
    if (err) {
      console.log("Error creating travel");
      response.status = 500;
      response.message = err;
    } 
    res.status(response.status).json(response.message);
  }  
)};

module.exports.travelFullUpdateOne = function (req, res) {
  console.log("FullUpdate request received");
  const travelId = req.params.travelId;

  if(travelId.length !== 24){
    res.status(400).json({"message": "RequestParam travelId is not a parameter range "})
  }

  Travel.findById(travelId).exec(function (err, travel) {
    const response = {
      status: 204, 
      message: travel,
    };
    if (err) {
      console.log("Error finding travel");
      response.status = 500;
      response.message = err;
    } else if (!travel) {
      response.status = 400;
      response.message = { message: "travel ID not found" };
    }
    if(response.status !== 204){
      res.status(response.status).json(response.message);
    }else{

        travel.country= req.body.country,
        travel.city= req.body.city,
        travel.popullation=parseFloat(req.body.popullation),
        travel.placeToVisit=[]
        
        travel.save(function(err, updatedTravel){
          if(err){
            response.status=500;
            response.message=err;
          }else{
            response.message = updatedTravel;
          }
          res.status(response.status).json(response.message);
        });      
    }
  });
};

module.exports.TravelPartialUpdateOne = function (req, res) {
  console.log("partialUpdate request received");
  const travelId = req.params.travelId;

  Travel.findById(travelId).exec(function (err, travel) {
    const response = {
      status: 204, 
      message: travel,
    };
    if (err) {
      console.log("Error finding travel");
      response.status = 500;
      response.message = err;
    } else if (!travel) {
      response.status = 400;
      response.message = { message: "Travel ID not found" };
    }
    if(response.status !== 204){
      res.status(response.status).json(response.message);
    }else{
      
      if(req.body.country){
        travel.country= req.body.country;
      }
      if(req.body.city){
        travel.city=req.body.city;
      }
      if(req.body.popullation){
        travel.popullation= parseInt(req.body.popullation);
      }
      if(req.body.placeToVisit){
        travel.placeToVisit ={};
      }        
        travel.save(function(err, updatedTravel){
          if(err){
            response.status=500;
            response.message=err;
          }else{
            response.message = updatedTravel;
          }
          res.status(response.status).json(response.message);
        });      
    }
  });
};

module.exports.travelDeleteOne = function (req, res) {
  console.log("DeleteOne request received");
  const travelId = req.params.travelId;
  Travel.findByIdAndDelete(travelId).exec(function (err, deletedTravel) {
    const response = {
      status: 204,
      message: deletedTravel,
    };
    if (err) {
      console.log("Error finding travel");
      response.status = 500;
      response.message = err;
    } else if (!deletedTravel) {
      response.status = 404;
      response.message = { "message": "Travel ID not found" };
    }
    res.status(response.status).json(response.message);
  });
};

module.exports.searchTravels = function (req, res) {
  console.log("search request received");
  const country = req.params.country;
  
  console.log(country);
  let result = [];

  Travel.find().exec(function (err, travels) {
    if (err) {
      console.log("Error finding travel", err);
      res.status(500).json(err);
    } else {
      for (let index = 0; index < travels.length; index++) {
        if (title == travels[index].country) {
          result.push(travels[index]);
        }
      }
      console.log("Found travel from result", result);
      res.status(200).json(result);
    }
  });
}