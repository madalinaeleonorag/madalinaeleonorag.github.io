const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const projectRoot = path.resolve(__dirname, '..');
const svgPath = path.join(projectRoot, 'public', 'assets', 'portfolio-preview.svg');
const pngPath = path.join(projectRoot, 'public', 'assets', 'portfolio-preview.png');

sharp(svgPath)
  .resize(1200, 630, { fit: 'cover' })
  .png({ quality: 95 })
  .toFile(pngPath)
  .then(() => {
    const stats = fs.statSync(pngPath);
    console.log(`Created preview PNG: ${pngPath}`);
    console.log(`File size: ${stats.size} bytes`);
  })
  .catch((error) => {
    console.error('Failed to create preview PNG:', error);
    process.exit(1);
  });
