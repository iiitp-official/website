import json
import os
import base64
import re

filePath = os.path.join(os.path.dirname(__file__), 'clubs_scraped.json')
with open(filePath, 'r', encoding='utf-8') as f:
    data = json.load(f)

os.makedirs('../public/assets/clubs', exist_ok=True)
print("Checking for base64 images to decode...")

saved_images = {}

for url, club_data in data.items():
    name = url.split('/')[-1]
    saved_images[name] = []
    
    idx = 1
    for img in club_data.get('images', []):
        if img.startswith('data:image'):
            # It's a base64 image
            try:
                # Extract the base64 part
                header, base64_data = img.split(',', 1)
                # Find extension
                ext = 'png'
                if 'jpeg' in header or 'jpg' in header:
                    ext = 'jpg'
                elif 'gif' in header:
                    ext = 'gif'
                
                filename = f"{name}_{idx}.{ext}"
                dest_path = f"../public/assets/clubs/{filename}"
                
                # Decode and save
                with open(dest_path, 'wb') as img_file:
                    img_file.write(base64.b64decode(base64_data))
                    
                print(f"Decoded and saved: {filename}")
                saved_images[name].append(f"/assets/clubs/{filename}")
                idx += 1
            except Exception as e:
                print(f"Failed to decode base64 image for {name}: {e}")
        elif img.startswith('http'):
            # Just keep absolute URLs as is
            saved_images[name].append(img)

# Save the updated image lists to a summary file
summary_path = os.path.join(os.path.dirname(__file__), 'clubs_resolved_images.json')
with open(summary_path, 'w', encoding='utf-8') as f:
    json.dump(saved_images, f, indent=2)

print(f"Saved resolved images metadata to {summary_path}")
