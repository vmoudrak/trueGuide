const mongoose = require("mongoose");

const restaurantSchema = require("./restaurant");


module.exports = {

  Restaurant: mongoose.model("Restaurant", restaurantSchema),

};
