const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

// Update book by ID
router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(book);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
