const express = require("express");
const router = express.Router();
const FormPacket = require("../models/FormPacket");

// GET form packet by groupId
router.get("/:groupId", async (req, res) => {
  try {
    const formPacket = await FormPacket.findOne({
      groupId: req.params.groupId,
    });
    if (!formPacket)
      return res.status(404).json({ message: "Form Packet not found" });
    res.json(formPacket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST - Add new customer form packet
router.post("/", async (req, res) => {
  try {
    const newPacket = new FormPacket(req.body);
    await newPacket.save();
    res
      .status(201)
      .json({ message: "Form Packet saved", groupId: newPacket.groupId });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
