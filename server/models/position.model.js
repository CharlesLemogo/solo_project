const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const PositionSchema = new Schema({
    name:{
        type: String,
        required: [true, "Name is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    skills:{
        type: String,
        required: [true,"Skills is required"],
    },

}, {timestamps: true})

module.exports = model("Position", PositionSchema);