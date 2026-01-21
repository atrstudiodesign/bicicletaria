import AdmZip from 'adm-zip';
import path from 'path';

const zipPath = 'C:\\Users\\agtra\\Downloads\\drive-download-20260121T022143Z-1-001.zip';

try {
  const zip = new AdmZip(zipPath);
  const zipEntries = zip.getEntries();
  zipEntries.forEach(entry => {
    console.log(entry.entryName);
  });
} catch (e) {
  console.error(`Error reading zip: ${e.message}`);
}
