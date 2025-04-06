import mongoose from 'mongoose';
import ServiceImageSchema from '../ServiceImageSchema.js';

const PhotographerSampleModel = mongoose.model('PhotographerSamples', ServiceImageSchema);
export default PhotographerSampleModel;
