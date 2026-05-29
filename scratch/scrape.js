import fs from 'fs';

const urls = [
  'https://www.iiitp.ac.in/page/blueprint',
  'https://www.iiitp.ac.in/page/rang-0',
  'https://www.iiitp.ac.in/page/quantnum-club',
  'https://www.iiitp.ac.in/page/bit-legion',
  'https://www.iiitp.ac.in/page/c-cube',
  'https://www.iiitp.ac.in/life/professional/e-cell',
  'https://www.iiitp.ac.in/page/electic',
  'https://www.iiitp.ac.in/page/vanity-crew',
  'https://www.iiitp.ac.in/page/sports',
  'https://www.iiitp.ac.in/page/rofies',
  'https://www.iiitp.ac.in/page/localhost',
  'https://www.iiitp.ac.in/page/horizon',
  'https://www.iiitp.ac.in/page/abhinay',
  'https://www.iiitp.ac.in/page/q-riocity'
];

async function scrapeAll() {
  const results = {};
  for (const url of urls) {
    try {
      console.log(`Fetching ${url}...`);
      const res = await fetch(url);
      const html = await res.text();
      
      // Simple regex to extract title and body content
      const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : url;
      
      // Extract main content area (usually <article> or <div class="node__content"> or similar in Drupal)
      // Let's find images
      const imgRegex = /<img[^>]+src="([^"]+)"/g;
      const images = [];
      let match;
      while ((match = imgRegex.exec(html)) !== null) {
        let imgUrl = match[1];
        if (imgUrl.startsWith('/')) {
          imgUrl = 'https://www.iiitp.ac.in' + imgUrl;
        }
        if (!images.includes(imgUrl) && !imgUrl.includes('logo') && !imgUrl.includes('emblem') && !imgUrl.includes('gover')) {
          images.push(imgUrl);
        }
      }
      
      // Extract body text inside article or main content div
      // Let's find anything between <div class="node__content"> and the next closing div, or general p tags
      const pRegex = /<p>([\s\S]*?)<\/p>/g;
      const paragraphs = [];
      while ((match = pRegex.exec(html)) !== null) {
        const cleanP = match[1]
          .replace(/<[^>]+>/g, '') // remove HTML tags
          .replace(/&nbsp;/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
        if (cleanP.length > 10 && !cleanP.includes('Language') && !cleanP.includes('Skip to')) {
          paragraphs.push(cleanP);
        }
      }
      
      results[url] = {
        title,
        images: images.slice(0, 5),
        paragraphs: paragraphs.slice(0, 15)
      };
      console.log(`Success: ${title}, found ${images.length} images and ${paragraphs.length} paragraphs.`);
    } catch (err) {
      console.error(`Error fetching ${url}:`, err.message);
    }
  }
  
  fs.writeFileSync('scratch/clubs_scraped.json', JSON.stringify(results, null, 2));
  console.log('Saved to scratch/clubs_scraped.json');
}

scrapeAll();
