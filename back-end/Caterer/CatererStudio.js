import mongoose from 'mongoose';
import StudioSchema from '../Studio.js';

const StudioModel = mongoose.model("CatererStudios", StudioSchema);


export default StudioModel;
