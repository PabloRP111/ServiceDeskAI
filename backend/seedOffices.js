import mongoose from "mongoose";
import dotenv from "dotenv";
import Office from "./models/Office.js";

dotenv.config();

const offices = [
  { name: "Madrid", code: "MAD" },
  { name: "Barcelona", code: "BCN" },
  { name: "Malaga", code: "MLG" },
  { name: "Valencia", code: "VLC" },
];


async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado para seed");

    for (const office of offices)
    {
      const exists = await Office.findOne({ code: office.code });
      if (!exists)
      {
        const created = await Office.create(office);
        console.log("Oficina creada:", created.name);
      }
      else 
        console.log("Oficina ya existe:", office.name);
    }

    console.log("Seed completado");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
