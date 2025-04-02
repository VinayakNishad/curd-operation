import mongoose from 'mongoose';

const StudioSchema = new mongoose.Schema({
    studio_name: String,
    studio_location: String,
    studio_description: String,
    studio_contact: String,
    studio_email: String,
    studio_image: String,
});

const StudioModel = mongoose.model("Studio", StudioSchema);

export default StudioModel;
