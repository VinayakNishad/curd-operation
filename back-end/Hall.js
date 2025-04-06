import mongoose from 'mongoose';

const HallSchema = new mongoose.Schema({
    hall_name: String,
    hall_location: String,
    hall_description: String,
    hall_contact: String,
    hall_email: String,
    hall_image: String,
});

const HallModel = mongoose.model("Hall", HallSchema);

export default HallModel;
