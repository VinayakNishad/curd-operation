// models/SubEvent.js
import mongoose from "mongoose";
import SubEventSchema from "../SubEvent.js";

const SubEventModel = mongoose.model("HallSubEvent", SubEventSchema);

export default SubEventModel;
