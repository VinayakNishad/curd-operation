import mongoose from 'mongoose';
import StudioSchema from '../Studio.js';

const StudioModel = mongoose.model("DecorationStudios", StudioSchema);


export default StudioModel;
