import json
import os
import re

filePath = os.path.join(os.path.dirname(__file__), 'clubs_scraped_detailed.json')
with open(filePath, 'r', encoding='utf-8') as f:
    data = json.load(f)

summary_md = []

def clean_tag_text(tag, text):
    return f"[{tag}] {text}"

for url, club_data in data.items():
    name = url.split('/')[-1]
    title = club_data['title']
    images = club_data['images']
    content = club_data['content'] # list of [tag, text]
    
    summary_md.append(f"# CLUB: {name}")
    summary_md.append(f"URL: {url}")
    summary_md.append(f"Title: {title}")
    summary_md.append(f"Images count: {len(images)}")
    for img in images:
        summary_md.append(f"  - {img}")
        
    summary_md.append("\nText Blocks:")
    for tag, text in content:
        # Check if text is contact info
        is_contact = any(x in text.lower() for x in ['email', 'instagram', 'head', 'contact', 'president', 'secretary'])
        contact_str = " (CONTACT INFO)" if is_contact else ""
        summary_md.append(f"  {tag}: {text}{contact_str}")
    summary_md.append("\n" + "="*80 + "\n")

outPath = os.path.join(os.path.dirname(__file__), 'clubs_extracted_summary.txt')
with open(outPath, 'w', encoding='utf-8') as f:
    f.write("\n".join(summary_md))

print(f"Extracted summary saved to {outPath}")
