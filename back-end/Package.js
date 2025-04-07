import mongoose from 'mongoose';

const PackageSchema = new mongoose.Schema({
    package_name: String,
    package_price: Number,
    package_photographer: String,
    package_caterer: String,
    package_hall: String,
    package_bertender:String,
    package_decoration:String,
    package_description:String,
    package_image: String,
});

const PackageModel = mongoose.model("Package", PackageSchema);

export default PackageModel;
