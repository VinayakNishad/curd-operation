// models/SubEvent.js
import mongoose from "mongoose";
import SubEventSchema from "../SubEvent.js";

const SubEventModel = mongoose.model("DecorationSubEvent", SubEventSchema);

export default SubEventModel;
