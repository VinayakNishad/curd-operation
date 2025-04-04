import mongoose from 'mongoose';

const PhotographerSampleSchema = new mongoose.Schema({
    studioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Studio',
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

const PhotographerSampleModel = mongoose.model('PhotographerSample', PhotographerSampleSchema);
export default PhotographerSampleModel;
