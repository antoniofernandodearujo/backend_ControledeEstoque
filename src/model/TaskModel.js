const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: {type: String, required: true},
    //type: {type: Number, required: true},
    quantity: {type: Number, required: true},
    //description: {type: String, required: true}
});

module.exports = mongoose.model('estoque', TaskSchema);