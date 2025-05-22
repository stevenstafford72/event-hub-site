const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all events
router.get("/", async (req, res) => {
  try {
    const [events] = await db.query("SELECT * FROM free_events");
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
