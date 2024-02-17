const fs = require('fs').promises;
const path = require('path');

async function generatePortfolioItems() {
    const portfolioDir = path.join(__dirname, '../components/portfolio/projects');
    const files = await fs.readdir(portfolioDir);
    const portfolioItems = [];

    for (const file of files) {
        if (file.endsWith('.js') && !file.endsWith('-metadata.js')) {
            const fname = file.replace('.js', '');
            const metadataModule = await import(path.resolve(portfolioDir, `${fname}-metadata.js`));
            const metadata = metadataModule.default;
            if (metadata) {
                portfolioItems.push(metadata);
            }
        }
    }

    const content = `const portfolioItems = ${JSON.stringify(portfolioItems, null, 2)};\n\nexport default portfolioItems;`;
    await fs.writeFile(path.join(__dirname, '../../src/content/portfolioItems.js'), content, 'utf8');
}

generatePortfolioItems().catch(console.error);
