const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// === GALLERY API ===
app.get('/api/gallery', (req, res) => {
  const fs = require('fs');
  const galleryDir = path.join(__dirname, '../frontend/public/images/gallery');
  try {
    if (fs.existsSync(galleryDir)) {
      const files = fs.readdirSync(galleryDir);
      // Filter for image formats
      const images = files
        .filter(file => /\.(jpe?g|png|gif|webp|bmp)$/i.test(file))
        .map((file, index) => ({
          id: index + 1,
          image: `/images/gallery/${file}`
        }));
      return res.json(images);
    }
  } catch (error) {
    console.error("Error reading gallery folder:", error);
  }
  return res.json([]);
});

app.get('/api/health', (req, res) => {
  res.json({ status: ' BUP CoPC API is running' });
});

app.listen(PORT, () => {
  console.log(` BUP CoPC Backend running on http://localhost:${PORT}`);
  console.log(' Available APIs:');
  console.log('   → http://localhost:5000/api/gallery');
});