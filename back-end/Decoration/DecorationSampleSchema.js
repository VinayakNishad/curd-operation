import mongoose from 'mongoose';
import ServiceImageSchema from '../ServiceImageSchema.js';

const DecorationSampleModel = mongoose.model('DecorationSamples', ServiceImageSchema);
export default DecorationSampleModel;
