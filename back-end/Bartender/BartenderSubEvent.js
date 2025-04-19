// models/SubEvent.js
import mongoose from "mongoose";
import SubEventSchema from "../SubEvent.js";

const SubEventModel = mongoose.model("BartenderSubEvent", SubEventSchema);

export default SubEventModel;
