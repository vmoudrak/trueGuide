const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    name: { type: Schema.Types.String, required: true },
    address: { type: Schema.Types.String, required: true },
    number: { type: Schema.Types.String, required: true },
    imageUrl: { type: Schema.Types.String, required: true },
    details: { type: Schema.Types.String, required: true },
    tags: [{ type: Schema.Types.String, required: true }],
    latitude: { type: Schema.Types.Number, required:true },
    longitude: { type: Schema.Types.Number, required:true },
    isDeleted: { type: Schema.Types.Boolean, default: false, required: true },
  },
  { timestamps: true }
);
module.exports = restaurantSchema;
