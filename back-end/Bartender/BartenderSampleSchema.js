import mongoose from 'mongoose';
import ServiceImageSchema from '../ServiceImageSchema.js';

const BartenderSampleModel = mongoose.model('BartenderSamples', ServiceImageSchema);
export default BartenderSampleModel;
