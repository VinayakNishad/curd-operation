// models/SubEvent.js
import mongoose from "mongoose";
import SubEventSchema from "../SubEvent.js";

const SubEventModel = mongoose.model("CatererSubEvent", SubEventSchema);

export default SubEventModel;
