const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'clubs_scraped.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const summary = {};

for (const [url, clubData] of Object.entries(data)) {
  const name = url.split('/').pop();
  
  // Clean paragraphs: filter out copyright and address lines
  const cleanParagraphs = (clubData.paragraphs || []).filter(p => {
    const text = p.toLowerCase();
    if (text.includes('indian institute of information technology') ||
        text.includes('gat no') ||
        text.includes('vill -') ||
        text.includes('po -') ||
        text.includes('tah -') ||
        text.includes('maharashtra-') ||
        text.includes('copyright ©') ||
        text.includes('all rights reserved')) {
      return false;
    }
    return true;
  });

  // Filter images to only absolute URLs, excluding base64
  const cleanImages = (clubData.images || []).filter(img => img.startsWith('http') && !img.includes('base64'));

  summary[url] = {
    name: name,
    title: clubData.title,
    imagesCount: cleanImages.length,
    images: cleanImages,
    paragraphsCount: cleanParagraphs.length,
    paragraphs: cleanParagraphs
  };
}

fs.writeFileSync(path.join(__dirname, 'clubs_summary.json'), JSON.stringify(summary, null, 2));

console.log('Summary of clubs scraped data:');
for (const [url, info] of Object.entries(summary)) {
  console.log(`- ${info.name} (${url}):`);
  console.log(`  Title: ${info.title}`);
  console.log(`  Images: ${info.imagesCount}`);
  console.log(`  Paragraphs: ${info.paragraphsCount}`);
  if (info.paragraphs.length > 0) {
    console.log(`  Sample Text: "${info.paragraphs[0].substring(0, 100)}..."`);
  } else {
    console.log('  Sample Text: NONE');
  }
}
