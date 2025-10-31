import 'dotenv/config';
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// Middleware esenciales
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/mydb")
  .then(() => console.log("✅ MongoDB conectado"))
  .catch(err => console.error("❌ Error conectando a MongoDB:", err));

// Rutas
app.use("/api/auth", authRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));

