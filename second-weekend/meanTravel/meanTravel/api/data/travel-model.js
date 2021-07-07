var mongoose = require("mongoose");

const placeToVisitSchema = new mongoose.Schema({
  name: String,
  location: String,
  yearBuilt: Number,
  architect: String
});
const travelSchema = new mongoose.Schema({
  country: {
    type: String,
    require: true,
  },
  city: {
    type:String,
  },
  popullation: Number,
  
  placeToVisit: [placeToVisitSchema]
  
});

// mongoose.model("travel", travelSchema , "games");
mongoose.model("visit", travelSchema , "visit");

