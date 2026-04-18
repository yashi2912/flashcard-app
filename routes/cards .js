const express = require("express");
const router = express.Router();

let cards = [];

router.get("/", (req, res) => {
  res.json(cards);
});

router.post("/", (req, res) => {
  const card = { id: Date.now(), ...req.body };
  cards.push(card);
  res.status(201).json(card);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  cards = cards.map(c => c.id === id ? { ...c, ...req.body } : c);
  res.json({ message: "Updated" });
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  cards = cards.filter(c => c.id !== id);
  res.json({ message: "Deleted" });
});

module.exports = router;