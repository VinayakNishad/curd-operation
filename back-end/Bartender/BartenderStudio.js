import mongoose from 'mongoose';
import StudioSchema from '../Studio.js';

const StudioModel = mongoose.model("BartenderStudios", StudioSchema);


export default StudioModel;
