import json
import os

filePath = r"c:\Users\Aanoush Surana\website\iiitp-website\scratch\clubs_scraped_detailed.json"
with open(filePath, 'r', encoding='utf-8') as f:
    data = json.load(f)

keywords = ['fest', 'event', 'workshop', 'contest', 'activity', 'activities', 'competition', 'session', 'bootcamp', 'tournament', 'conclave', 'seminar', 'hackathon', 'round', 'play', 'street', 'show', 'exhibition', 'performance', 'project', 'achievement', 'initiative']

output = []
for url, club_data in data.items():
    name = url.split('/')[-1]
    output.append("=" * 80)
    output.append(f"CLUB KEY: {name}")
    output.append(f"Title: {club_data['title']}")
    output.append("=" * 80)
    
    # Let's extract sentences or list items containing activities/fests keywords, or headings/list items.
    events_found = []
    for tag, text in club_data['content']:
        text_clean = text.strip()
        if not text_clean:
            continue
        
        # If it is a heading or list item, or contains keywords
        is_heading_or_li = tag in ['h2', 'h3', 'h4', 'strong', 'li', 'em']
        has_keyword = any(kw in text_clean.lower() for kw in keywords)
        
        if is_heading_or_li or has_keyword or (len(text_clean) > 10 and len(text_clean) < 300):
            # Clean up unwanted boilerplate
            if not any(x in text_clean.lower() for x in ['/*-->', 'styles', 'document.get', 'window.font', 'google-analytics', 'mis no:', 'mobile no:', 'branch:', 'email:', 'instagram:']):
                events_found.append((tag, text_clean))
                
    # Filter and format
    for tag, text in events_found[:40]: # limit to 40 per club for readability
        output.append(f"  [{tag}] {text}")
    output.append("\n\n")

outPath = r"c:\Users\Aanoush Surana\website\iiitp-website\scratch\extracted_detailed_activities.txt"
with open(outPath, 'w', encoding='utf-8') as f:
    f.write("\n".join(output))

print(f"Extracted info written to {outPath}")
