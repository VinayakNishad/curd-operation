import mongoose from 'mongoose';
import StudioSchema from '../Studio.js';

const StudioModel = mongoose.model("HallStudios", StudioSchema);


export default StudioModel;
