const router = require('express').Router();
const Vehicle = require('../models/veicleModel.js');

// Get vehicle by plate number
router.get('/:plateNumber', async (req, res) => {
    try {
        const vehicle = await Vehicle.findOne({ plateNumber: req.params.plateNumber });
        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.json(vehicle);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Add new vehicle
router.post('/', async (req, res) => {
    const newVehicle = new Vehicle(req.body);
    try {
        const savedVehicle = await newVehicle.save();
        res.json(savedVehicle);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;
