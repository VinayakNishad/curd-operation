import mongoose from 'mongoose';
import PackageSchema from '../Package.js';

const PackageModel = mongoose.model("WeddingPackage", PackageSchema);

export default PackageModel;
