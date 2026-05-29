import json
import os

filePath = os.path.join(os.path.dirname(__file__), 'clubs_scraped_detailed.json')
with open(filePath, 'r', encoding='utf-8') as f:
    data = json.load(f)

outPath = os.path.join(os.path.dirname(__file__), 'print_out.txt')
with open(outPath, 'w', encoding='utf-8') as out:
    for url, club_data in data.items():
        name = url.split('/')[-1]
        out.write("=" * 60 + "\n")
        out.write(f"CLUB: {name.upper()}\n")
        out.write(f"URL: {url}\n")
        out.write("IMAGES:\n")
        for img in club_data['images']:
            out.write(f"  - {img}\n")
            
        out.write("\nTEXT BLOCKS:\n")
        for tag, text in club_data['content']:
            out.write(f"  [{tag}] {text}\n")
        out.write("\n\n")

print(f"Cleaned info printed to {outPath}")
