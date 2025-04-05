// models/SubEvent.js
import mongoose from "mongoose";

const SubEventSchema = new mongoose.Schema({
  studioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Studio",
    required: true,
  },
  title: String,
  price: Number,
  description: String,
});

const SubEventModel = mongoose.model("SubEvent", SubEventSchema);

export default SubEventModel;
