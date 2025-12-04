const Jimp = require('jimp');

async function makeTransparent() {
    try {
        const image = await Jimp.read('/Users/carlosdiaz/.gemini/antigravity/brain/b3baa535-a0eb-4a43-80e0-5c7d3719f333/yumpeen_logo_architectural_y_wb_v2_1764792549493.png');

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const red = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];

            // If pixel is black (or very dark), make it transparent
            if (red < 30 && green < 30 && blue < 30) {
                this.bitmap.data[idx + 3] = 0; // Set alpha to 0
            }
        });

        await image.writeAsync('/Users/carlosdiaz/Documents/Personal/Proyectos/Yumpeen/logos/yumpeen-logo-white-transparent.png');
        console.log('Success: Transparent logo created.');
    } catch (err) {
        console.error('Error:', err);
    }
}

makeTransparent();
