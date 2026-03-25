import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const TARGET_DIR = 'public/images';
const MAX_WIDTH = 1200;
const QUALITY = 75;

async function optimizeImages() {
  const files = fs.readdirSync(TARGET_DIR).filter(file => file.endsWith('.webp'));
  
  console.log(`🚀 Starting image optimization in ${TARGET_DIR} (${files.length} images)...`);

  for (const file of files) {
    const inputPath = path.join(TARGET_DIR, file);
    const outputPath = path.join(TARGET_DIR, `optimized_${file}`);

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      let pipeline = image;
      if (metadata.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH);
      }

      await pipeline
        .webp({ quality: QUALITY, effort: 6 })
        .toFile(outputPath);

      // Replace original with optimized
      fs.unlinkSync(inputPath);
      fs.renameSync(outputPath, inputPath);
      
      const newSize = fs.statSync(inputPath).size;
      console.log(`✅ Optimized ${file}: ${Math.round(metadata.size / 1024)}KB -> ${Math.round(newSize / 1024)}KB`);
    } catch (err) {
      console.error(`❌ Error optimizing ${file}:`, err);
    }
  }

  console.log('✨ All images optimized.');
}

optimizeImages();
