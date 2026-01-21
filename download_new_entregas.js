import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  { url: 'https://www.r3bikeshop.com/uploads/entregas/COMPRADORES%20R3BIKESHOP%20(1).jpg', filename: 'COMPRADORES R3BIKESHOP (1).jpg' },
  { url: 'https://www.r3bikeshop.com/uploads/entregas/COMPRADORES%20R3BIKESHOP%20(2).jpg', filename: 'COMPRADORES R3BIKESHOP (2).jpg' },
  { url: 'https://www.r3bikeshop.com/uploads/entregas/COMPRADORES%20R3BIKESHOP%20(3).jpg', filename: 'COMPRADORES R3BIKESHOP (3).jpg' },
  { url: 'https://www.r3bikeshop.com/uploads/entregas/COMPRADORES%20R3BIKESHOP%20(4).jpg', filename: 'COMPRADORES R3BIKESHOP (4).jpg' },
  { url: 'https://www.r3bikeshop.com/uploads/entregas/COMPRADORES%20R3BIKESHOP%20(5).jpg', filename: 'COMPRADORES R3BIKESHOP (5).jpg' },
  { url: 'https://www.r3bikeshop.com/uploads/entregas/COMPRADORES%20R3BIKESHOP%20(7).jpg', filename: 'COMPRADORES R3BIKESHOP (7).jpg' },
  { url: 'https://www.r3bikeshop.com/uploads/entregas/COMPRADORES%20R3BIKESHOP%20(8).jpg', filename: 'COMPRADORES R3BIKESHOP (8).jpg' },
  { url: 'https://www.r3bikeshop.com/uploads/entregas/COMPRADORES%20R3BIKESHOP%20(9).jpg', filename: 'COMPRADORES R3BIKESHOP (9).jpg' },
  { url: 'https://www.r3bikeshop.com/uploads/entregas/nossasentregasr3bikeshop2.webp', filename: 'nossasentregasr3bikeshop2.webp' }
];

const dir = path.join(process.cwd(), 'client', 'public', 'uploads', 'entregas');

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(dir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        file.close();
        fs.unlink(filePath, () => {}); // Delete the file async
        reject(new Error(`Failed to download ${filename}: Status Code ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file async
      reject(err);
    });
  });
};

async function downloadAll() {
  for (const img of images) {
    try {
      await downloadImage(img.url, img.filename);
    } catch (error) {
      console.error(error.message);
    }
  }
}

downloadAll();
