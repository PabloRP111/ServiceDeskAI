import express from "express";
import Office from "../models/Office.js";

const router = express.Router();

// GET /api/offices
router.get("/", async (req, res) => {
  try {
    const offices = await Office.find().select("name code -_id"); // solo name y code
    res.json(offices);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener oficinas" });
  }
});

export default router;
