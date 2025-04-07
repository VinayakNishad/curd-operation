import mongoose from 'mongoose';
import PackageSchema from '../Package.js';

const PackageModel = mongoose.model("BabyShowerPackage", PackageSchema);

export default PackageModel;
