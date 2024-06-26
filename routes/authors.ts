import express from "express";

const router = express.Router();
//all Authors route
router.get("/", (req, res) => {
  res.render("authors/index");
});
//New author route
router.get("/new", (req, res) => {
  res.render("authors/new");
});
//Create author route
router.post("/", (req, res) => {
  res.send("Create");
});

export default router;
