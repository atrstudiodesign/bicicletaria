import fs from "fs";
import path from "path";

const mapping = [
  {
    old: "1.jpg",
    new: "WhatsApp-Image-2025-10-31-at-09.52.40-2-e1761915662651.jpeg",
  },
  {
    old: "2.jpg",
    new: "WhatsApp-Image-2025-10-31-at-09.52.40-1-e1761915681146.jpeg",
  },
  {
    old: "3.jpg",
    new: "WhatsApp-Image-2025-10-31-at-09.52.40-e1761915696692.jpeg",
  },
  {
    old: "4.jpg",
    new: "WhatsApp-Image-2025-10-31-at-09.52.39-2-e1761915925151.jpeg",
  },
  {
    old: "5.jpg",
    new: "WhatsApp-Image-2025-10-31-at-09.52.39-1-e1761915952803.jpeg",
  },
  {
    old: "6.jpg",
    new: "WhatsApp-Image-2025-10-31-at-09.52.39-e1761915976372.jpeg",
  },
  {
    old: "7.jpg",
    new: "WhatsApp-Image-2025-10-31-at-09.48.53-3-e1761916003786.jpeg",
  },
  {
    old: "8.jpg",
    new: "WhatsApp-Image-2025-10-31-at-09.48.53-2-e1761916028777.jpeg",
  },
  {
    old: "9.jpg",
    new: "WhatsApp-Image-2025-10-31-at-09.48.53-e1761916068449.jpeg",
  },
  {
    old: "10.jpg",
    new: "WhatsApp-Image-2025-10-31-at-09.48.52-e1761916085537.jpeg",
  },
  {
    old: "11.jpg",
    new: "WhatsApp-Image-2025-10-31-at-10.00.09-e1761916105228.jpeg",
  },
];

const dir = path.join(process.cwd(), "client", "public", "uploads", "entregas");

mapping.forEach(pair => {
  const oldPath = path.join(dir, pair.old);
  const newPath = path.join(dir, pair.new);

  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed ${pair.old} to ${pair.new}`);
  } else {
    console.log(`File not found: ${pair.old}`);
  }
});
