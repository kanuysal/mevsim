import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dirs = ['./public/images', './public/media'];

async function convertAll() {
    for (const dir of dirs) {
        const outputDir = path.join(dir, 'png');
        if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

        const files = fs.readdirSync(dir).filter(file => file.endsWith('.webp'));
        
        console.log(`🚀 Processing directory: ${dir}`);
        for (const file of files) {
            const inputPath = path.join(dir, file);
            const outputPath = path.join(outputDir, file.replace('.webp', '.png'));
            
            try {
                await sharp(inputPath).png().toFile(outputPath);
                console.log(`✅ Converted: ${file}`);
            } catch (err) {
                console.error(`❌ Error ${file}:`, err.message);
            }
        }
    }
    console.log('✨ All extra assets converted to PNG!');
}

convertAll();
