import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join, parse } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = join(__dirname, '..', 'public/images');
const sizes = {
  small: { width: 200, height: 64 },
  medium: { width: 300, height: 96 },
  large: { width: 600, height: 192 }
};

const images = [
  'metalo-lauzas.webp',
  'baldai.webp',
  'elektronika.webp',
  'buitine-technika.webp'
];

const optimizeImages = async () => {
  try {
    for (const image of images) {
      const imagePath = join(imagesDir, image);
      const fileNameBase = parse(imagePath).name;
      
      console.log(`Processing ${image}...`);
      
      for (const [size, dimensions] of Object.entries(sizes)) {
        const outputPath = join(imagesDir, `${fileNameBase}-${size}.webp`);
        
        await sharp(imagePath)
          .resize(dimensions.width, dimensions.height, { fit: 'cover' })
          .webp({ quality: 75 })
          .toFile(outputPath);
        
        console.log(`Created: ${fileNameBase}-${size}.webp`);
      }
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
};

optimizeImages();