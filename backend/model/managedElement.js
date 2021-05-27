const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
  {
    name: "string",
    description: "string",
    createDate: "date",
    updatedDate: "date",
    createdBy: "string",
    updatedBy: "string",
  },
  { timestamps: { createDate: "created_at", updatedDate: "updated_at" } }
);

const Task = mongoose.model("todos", taskSchema);

module.exports = {
  Task,
};
// const Schema = mongoose.Schema;

// let meSchema = new Schema({
//     name: {
//         type: String
//     },
//     type: {
//         type: String
//     },
//     ipAddress: {
//         type: String
//     },
//     location: {
//         type: String
//     },
//     description: {
//         type: String
//     },
//     ssh_id: {
//         type: String
//     },
//     ssh_pw: {
//         type: String
//     },
// }, {
//   collection: 'MEs'
// })

// module.exports = mongoose.model('ManagedElement', meSchema)
