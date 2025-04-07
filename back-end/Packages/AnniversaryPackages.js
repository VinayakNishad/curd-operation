import mongoose from 'mongoose';
import PackageSchema from '../Package.js';

const PackageModel = mongoose.model("AnniversaryPackage", PackageSchema);

export default PackageModel;
