const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let meSchema = new Schema(
  {
    name: "string",
    type: "string",
    ipAddress: "string",
    location: "string",
    description: "string",
    ssh_id: "string",
    ssh_pw: "string",
    createDate: "date",
    updatedDate: "date",
  },
  { timestamps: { createDate: "created_at", updatedDate: "updated_at" } },
  { versionKey: false }
);

const ManagedElement = mongoose.model("ManagedElement", meSchema);
module.exports = { ManagedElement };
