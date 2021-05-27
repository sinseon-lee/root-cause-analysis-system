const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let meSchema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    ipAddress: {
        type: String
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    ssh_id: {
        type: String
    },
    ssh_pw: {
        type: String
    },
}, {
  collection: 'MEs'
})

module.exports = mongoose.model('ManagedElement', meSchema)
