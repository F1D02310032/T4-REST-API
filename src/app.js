import express from "express";
import { tanamanHias } from "./data/tanaman-hias.js";

const app = express();

app.get("/", (_req, res) => {
  res.status(200).send("Selamat datang di REST API koleksi tanaman hias.");
});

app.get("/tanaman-hias", (_req, res) => {
  res.status(200).json({ data: tanamanHias });
});

app.get("/tanaman-hias/:id", (req, res) => {
  const id = Number(req.params.id);
  const tanaman = tanamanHias.find((item) => item.id === id);

  if (!Number.isInteger(id) || !tanaman) {
    return res.status(404).json({
      error: {
        pesan: "Tanaman hias tidak ditemukan.",
        kode: 404
      }
    });
  }

  return res.status(200).json({ data: tanaman });
});

app.delete("/tanaman-hias/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tanamanHias.findIndex((item) => item.id === id);

  if (!Number.isInteger(id) || index === -1) {
    return res.status(404).json({
      error: {
        pesan: "Tanaman hias tidak ditemukan.",
        kode: 404
      }
    });
  }

  tanamanHias.splice(index, 1);
  return res.status(204).end();
});

export default app;
