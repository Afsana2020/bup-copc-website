// generate-gallery.js
// Run this from the "frontend" folder: node generate-gallery.js
// It scans frontend/public/images/gallery and writes frontend/public/data/gallery.json

const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'public', 'images', 'gallery');
const outputDir = path.join(__dirname, 'public', 'data');
const outputFile = path.join(outputDir, 'gallery.json');

if (!fs.existsSync(galleryDir)) {
  console.error('Gallery folder not found:', galleryDir);
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(galleryDir);

const images = files
  .filter(file => /\.(jpe?g|png|gif|webp|bmp)$/i.test(file))
  .sort()
  .map((file, index) => ({
    id: index + 1,
    image: `/images/gallery/${file}`
  }));

fs.writeFileSync(outputFile, JSON.stringify(images, null, 2));
console.log(`✅ gallery.json created with ${images.length} images at ${outputFile}`);