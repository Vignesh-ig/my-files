const mongoose = require("mongoose");

const FieldSchema = new mongoose.Schema({}, { strict: false });

const FormPacketSchema = new mongoose.Schema({
  groupId: {
    type: String,
    unique: true,
    required: true,
    length: 10,
  },
  formPackets: [FieldSchema],
  theme: {
    primaryColor: String,
    fontFamily: String,
    borderStyle: String,
  },
});

module.exports = mongoose.model("FormPacket", FormPacketSchema);
