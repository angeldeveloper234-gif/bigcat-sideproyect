const fs = require('fs');
const path = require('path');

const brainPath = 'C:/Users/usuario/.gemini/antigravity/brain/49678de2-fc47-42b1-a50e-32b38c08d196/.system_generated/steps';
const files = {
  guadalajara: '599/output.txt',
  cdmx: '600/output.txt',
  monterrey: '601/output.txt',
  queretaro: '602/output.txt',
  leon: '603/output.txt'
};

let outputStr = 'export const RESTAURANT_CLIENTS = {\n';

for (const [city, fileRelPath] of Object.entries(files)) {
  const filePath = path.join(brainPath, fileRelPath);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    try {
      const data = JSON.parse(content);
      const features = data.features || (data.data ? data.data.features : []) || [];
      outputStr += `  ${city}: [\n`;
      features.slice(0, 10).forEach((f, index) => {
        const name = f.properties.name || f.properties.name_preferred || 'Restaurante';
        const address = f.properties.full_address || f.properties.place_formatted || 'Dirección Conocida';
        const coords = f.geometry.coordinates; // [lng, lat]
        const comma = index === Math.min(features.length - 1, 9) ? '' : ',';
        outputStr += `    { name: ${JSON.stringify(name)}, address: ${JSON.stringify(address)}, coords: [${coords[0]}, ${coords[1]}] }${comma}\n`;
      });
      outputStr += `  ],\n`;
    } catch (e) {
      console.error('Error parsing', city, e);
    }
  } else {
    console.error('File not found', filePath);
  }
}
outputStr += '};\n';
fs.writeFileSync('C:/Users/usuario/.gemini/antigravity/brain/49678de2-fc47-42b1-a50e-32b38c08d196/scratch/restaurants.ts', outputStr);
console.log('Done!');
