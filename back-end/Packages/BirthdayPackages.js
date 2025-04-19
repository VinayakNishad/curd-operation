import mongoose from 'mongoose';
import PackageSchema from '../Package.js';

const PackageModel = mongoose.model("BirthdayPackage", PackageSchema);

export default PackageModel;
