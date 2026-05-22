import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "client", "public", "uploads", "entregas");

const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.includes("COMPRADORES R3BIKESHOP")) {
    const newName = file
      .toLowerCase()
      .replace(/compradores r3bikeshop/g, "compradores-r3bikeshop")
      .replace(/\s+/g, "-")
      .replace(/\(/g, "")
      .replace(/\)/g, "");

    const oldPath = path.join(dir, file);
    const newPath = path.join(dir, newName);

    fs.renameSync(oldPath, newPath);
    console.log(`Renamed: "${file}" -> "${newName}"`);
  }
});
