import mongoose from 'mongoose';
import ServiceImageSchema from '../ServiceImageSchema.js';

const CatererSampleModel = mongoose.model('CatererSamples', ServiceImageSchema);
export default CatererSampleModel;
