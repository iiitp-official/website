import urllib.request
import re

url = 'https://www.iiitp.ac.in/page/bit-legion'
try:
    with urllib.request.urlopen(url) as response:
        html = response.read().decode('utf-8')
    
    # Print some of the lines containing div classes
    print("=== Found Div Classes ===")
    divs = re.findall(r'<div[^>]*class="([^"]+)"', html)
    for d in list(set(divs))[:30]:
        print(f"- {d}")
        
    print("\n=== Checking for Main Content or Article ===")
    if '<article' in html:
        print("Found <article>")
    if 'region-content' in html:
        print("Found 'region-content'")
    if 'node__content' in html:
        print("Found 'node__content'")
    if 'main-container' in html:
        print("Found 'main-container'")
        
    # Print a snippet around region-content
    match = re.search(r'(<div[^>]*region-content[\s\S]{0,1000})', html)
    if match:
        print("\n=== snippet around region-content ===")
        print(match.group(1))
except Exception as e:
    print("Error:", e)
