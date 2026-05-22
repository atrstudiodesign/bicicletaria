import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    url: "https://srv1194-files.hstgr.io/be1c601f856a3d8c/api/preview/big/public_html/dist/public/uploads/entregas/COMPRADORES%20R3BIKESHOP%20(1).jpg?inline=true&key=1768963002086",
    filename: "compradores-r3bikeshop-1.jpg",
  },
  {
    url: "https://srv1194-files.hstgr.io/be1c601f856a3d8c/api/preview/big/public_html/dist/public/uploads/entregas/COMPRADORES%20R3BIKESHOP%20(2).jpg?inline=true&key=1768963002848",
    filename: "compradores-r3bikeshop-2.jpg",
  },
  {
    url: "https://srv1194-files.hstgr.io/be1c601f856a3d8c/api/preview/big/public_html/dist/public/uploads/entregas/COMPRADORES%20R3BIKESHOP%20(3).jpg?inline=true&key=1768963002574",
    filename: "compradores-r3bikeshop-3.jpg",
  },
  {
    url: "https://srv1194-files.hstgr.io/be1c601f856a3d8c/api/preview/big/public_html/dist/public/uploads/entregas/COMPRADORES%20R3BIKESHOP%20(4).jpg?inline=true&key=1768963002888",
    filename: "compradores-r3bikeshop-4.jpg",
  },
  {
    url: "https://srv1194-files.hstgr.io/be1c601f856a3d8c/api/preview/big/public_html/dist/public/uploads/entregas/COMPRADORES%20R3BIKESHOP%20(5).jpg?inline=true&key=1768963002922",
    filename: "compradores-r3bikeshop-5.jpg",
  },
  {
    url: "https://srv1194-files.hstgr.io/be1c601f856a3d8c/api/preview/big/public_html/dist/public/uploads/entregas/COMPRADORES%20R3BIKESHOP%20(7).jpg?inline=true&key=1768963003450",
    filename: "compradores-r3bikeshop-7.jpg",
  },
  {
    url: "https://srv1194-files.hstgr.io/be1c601f856a3d8c/api/preview/big/public_html/dist/public/uploads/entregas/COMPRADORES%20R3BIKESHOP%20(8).jpg?inline=true&key=1768963003543",
    filename: "compradores-r3bikeshop-8.jpg",
  },
  {
    url: "https://srv1194-files.hstgr.io/be1c601f856a3d8c/api/preview/big/public_html/dist/public/uploads/entregas/COMPRADORES%20R3BIKESHOP%20(9).jpg?inline=true&key=1768963003560",
    filename: "compradores-r3bikeshop-9.jpg",
  },
  {
    url: "https://srv1194-files.hstgr.io/be1c601f856a3d8c/api/preview/big/public_html/dist/public/uploads/entregas/nossasentregasr3bikeshop2.webp?inline=true&key=1768353486896",
    filename: "nossasentregasr3bikeshop2.webp",
  },
];

const dir = path.join(process.cwd(), "client", "public", "uploads", "entregas");

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(dir, filename);
    const file = fs.createWriteStream(filePath);

    https
      .get(url, response => {
        // Check for redirect
        if (response.statusCode === 301 || response.statusCode === 302) {
          console.log(
            `Redirecting ${filename} to ${response.headers.location}`
          );
          file.close();
          downloadImage(response.headers.location, filename)
            .then(resolve)
            .catch(reject);
          return;
        }

        if (response.statusCode === 200) {
          // Check content type
          const contentType = response.headers["content-type"];
          if (contentType && !contentType.startsWith("image/")) {
            file.close();
            fs.unlink(filePath, () => {});
            reject(
              new Error(
                `Invalid content type for ${filename}: ${contentType} (Expected image/*)`
              )
            );
            return;
          }

          response.pipe(file);
          file.on("finish", () => {
            file.close();
            console.log(`Downloaded: ${filename}`);
            resolve();
          });
        } else {
          file.close();
          fs.unlink(filePath, () => {});
          reject(
            new Error(
              `Failed to download ${filename}: Status Code ${response.statusCode}`
            )
          );
        }
      })
      .on("error", err => {
        fs.unlink(filePath, () => {});
        reject(err);
      });
  });
};

async function downloadAll() {
  console.log("Starting download...");
  for (const img of images) {
    try {
      await downloadImage(img.url, img.filename);
    } catch (error) {
      console.error(`Error downloading ${img.filename}: ${error.message}`);
    }
  }
  console.log("Finished.");
}

downloadAll();
