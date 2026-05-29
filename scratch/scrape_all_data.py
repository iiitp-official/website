import urllib.request
from html.parser import HTMLParser
import json
import re
import os

urls = [
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
]

class DrupalContentParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_content = False
        self.div_depth = 0
        self.text_blocks = []
        self.images = []
        self.current_tag = None
        self.title = ""

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        
        # Check if we are entering the node__content or region-content div
        if not self.in_content:
            if tag == 'div' and ('class' in attrs_dict) and ('node__content' in attrs_dict['class'] or 'region-content' in attrs_dict['class']):
                self.in_content = True
                self.div_depth = 1
            elif tag == 'article':
                self.in_content = True
                self.div_depth = 1
        else:
            if tag == 'div':
                self.div_depth += 1
            
            # Extract images within content
            if tag == 'img' and 'src' in attrs_dict:
                src = attrs_dict['src']
                if src.startswith('/'):
                    src = 'https://www.iiitp.ac.in' + src
                # Filter out standard logo/emblems
                if not any(x in src.lower() for x in ['logo', 'emblem', 'gover', 'facebook', 'twitter', 'linkedin', 'instagram', 'youtube']):
                    if src not in self.images:
                        self.images.append(src)
                        
            self.current_tag = tag

    def handle_endtag(self, tag):
        if self.in_content:
            if tag == 'div':
                self.div_depth -= 1
                if self.div_depth == 0:
                    self.in_content = False
            elif tag == 'article':
                self.in_content = False
        self.current_tag = None

    def handle_data(self, data):
        if self.in_content:
            text = data.strip()
            # Clean up text
            text = text.replace('\xa0', ' ').replace('&nbsp;', ' ')
            text = re.sub(r'\s+', ' ', text)
            if text and len(text) > 2:
                # Exclude footer-like texts that might leak in
                if not any(x in text.lower() for x in ['copyright ©', 'all rights reserved', 'gat no', 'vill -', 'talegaon']):
                    self.text_blocks.append((self.current_tag or 'text', text))

def scrape():
    results = {}
    for url in urls:
        print(f"Scraping {url}...")
        try:
            req = urllib.request.Request(
                url, 
                headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
            )
            with urllib.request.urlopen(req) as response:
                html = response.read().decode('utf-8', errors='ignore')
                
            # Extract Title
            title_match = re.search(r'<title>([^<]+)<\/title>', html, re.IGNORECASE)
            title = title_match.group(1).strip() if title_match else url
            
            # Parse Content
            parser = DrupalContentParser()
            parser.feed(html)
            
            results[url] = {
                'title': title,
                'images': parser.images,
                'content': parser.text_blocks
            }
            print(f"  Done: found {len(parser.images)} images and {len(parser.text_blocks)} text blocks.")
        except Exception as e:
            print(f"  Error: {e}")
            
    # Save results
    output_path = os.path.join(os.path.dirname(__file__), 'clubs_scraped_detailed.json')
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2)
    print(f"Saved detailed data to {output_path}")

if __name__ == '__main__':
    scrape()
