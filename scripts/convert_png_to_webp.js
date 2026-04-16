import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './public/textures/png';
const outputDir = './public/textures';

const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.png'));

async function convert() {
    console.log(`🚀 Starting reverse conversion of ${files.length} files to WebP...`);
    
    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file.replace('.png', '.webp'));
        
        try {
            await sharp(inputPath)
                .webp({ quality: 90 }) // High quality for rebranding
                .toFile(outputPath);
            console.log(`✅ Converted & Overwritten: ${path.basename(outputPath)}`);
        } catch (err) {
            console.error(`❌ Error converting ${file}:`, err.message);
        }
    }
    
    console.log('✨ Success! Originals in ./public/textures have been updated with your edited versions.');
}

convert();
