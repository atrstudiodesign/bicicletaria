import fs from 'fs';
import path from 'path';

const dir = 'client/public/uploads/promo';
const files = fs.readdirSync(dir);

files.forEach(file => {
  try {
    const newName = decodeURIComponent(file);
    if (newName !== file) {
      fs.renameSync(path.join(dir, file), path.join(dir, newName));
      console.log(`Renamed: ${file} -> ${newName}`);
    }
  } catch (e) {
    // If malformed, manually replace common ones
    const newName = file.replace(/%20/g, ' ').replace(/%2C/g, ',').replace(/%2/g, ''); // Handle the truncated %2
    if (newName !== file) {
      fs.renameSync(path.join(dir, file), path.join(dir, newName));
      console.log(`Manually Renamed: ${file} -> ${newName}`);
    }
  }
});
