const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const buildingSchema = new Schema({
    address: {
        type: String,
        required: true,
    },
    blocks: {
        type: [String],
        required: true
    },
    code: {
        type: String,
        required: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    },
    diaChinh: {
        type: Object,
        required: true,
    },
    hotLine: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
    },
    totalFlat: {
        type: Number
    }
})
module.exports = mongoose.model('Building', buildingSchema);
