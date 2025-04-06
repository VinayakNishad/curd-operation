import mongoose from 'mongoose';
import StudioSchema from '../Studio.js';

const StudioModel = mongoose.model("PhotographerStudios", StudioSchema);


export default StudioModel;
