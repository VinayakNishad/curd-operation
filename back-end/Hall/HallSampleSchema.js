import mongoose from 'mongoose';
import ServiceImageSchema from '../ServiceImageSchema.js';

const HallSampleModel = mongoose.model('HallSamples', ServiceImageSchema);
export default HallSampleModel;
