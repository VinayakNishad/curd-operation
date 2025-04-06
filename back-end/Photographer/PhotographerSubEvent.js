// models/SubEvent.js
import mongoose from "mongoose";
import SubEventSchema from "../SubEvent.js";

const SubEventModel = mongoose.model("PhotographerSubEvent", SubEventSchema);

export default SubEventModel;
