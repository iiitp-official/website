import json
import os
import re

filePath = os.path.join(os.path.dirname(__file__), 'clubs_scraped_detailed.json')
with open(filePath, 'r', encoding='utf-8') as f:
    data = json.load(f)

outPath = os.path.join(os.path.dirname(__file__), 'clubs_clean_texts.txt')
with open(outPath, 'w', encoding='utf-8') as out:
    for url, club_data in data.items():
        name = url.split('/')[-1]
        out.write("=" * 60 + "\n")
        out.write(f"CLUB KEY: {name}\n")
        out.write(f"URL: {url}\n")
        out.write(f"Title: {club_data['title']}\n")
        
        # Clean images
        clean_images = [img for img in club_data['images'] if img.startswith('http') and 'base64' not in img]
        out.write("IMAGES:\n")
        for img in clean_images[:10]:
            out.write(f"  - {img}\n")
            
        out.write("\nTEXT BLOCKS:\n")
        for tag, text in club_data['content']:
            if tag in ['style', 'script']:
                continue
            text = text.strip()
            if not text:
                continue
            if '/*--><![CDATA[/*' in text or '// ><!--' in text:
                continue
            out.write(f"  [{tag}] {text}\n")
        out.write("\n\n")

print(f"Clean texts saved to {outPath}")
