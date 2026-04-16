import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './public/textures';
const outputDir = path.join(inputDir, 'png');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.webp'));

async function convert() {
    console.log(`🚀 Starting conversion of ${files.length} files...`);
    
    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file.replace('.webp', '.png'));
        
        try {
            await sharp(inputPath)
                .png()
                .toFile(outputPath);
            console.log(`✅ Converted: ${file} -> ${path.basename(outputPath)}`);
        } catch (err) {
            console.error(`❌ Error converting ${file}:`, err.message);
        }
    }
    
    console.log('✨ Conversion complete! Files are in ./public/textures/png');
}

convert();
