const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    plateNumber: { type: String, required: true, unique: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    registrationExpiry: { type: Date, required: true },
    imageUrl: { type: String },
    owner: {
        name: { type: String, required: true },
        licenseNumber: { type: String, required: true },
        address: { type: String, required: true },
        contactNumber: { type: String, required: true }
    },
    insuranceInfo: {
        provider: { type: String, required: true },
        policyNumber: { type: String, required: true },
        validUntil: { type: Date, required: true }
    },
    violations: [{
        date: { type: Date },
        type: { type: String },
        fine: { type: Number },
        status: { type: String, enum: ['Paid', 'Pending'] }
    }]
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
