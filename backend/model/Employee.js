const mongoose = require('mongoose');

// Define the employee registration schema
const RegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    dob: Date,
    adhar: String,
    skill: String,
    phone: String,
    password: String
});

// Create the Employee model using the RegisterSchema
const Employee = mongoose.model("Employe", RegisterSchema);

// Export the Employee model to be used in other parts of the application
module.exports = Employee;
