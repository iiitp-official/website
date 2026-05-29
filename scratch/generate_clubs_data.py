import json
import os
import re

filePath = os.path.join(os.path.dirname(__file__), 'clubs_scraped_detailed.json')
with open(filePath, 'r', encoding='utf-8') as f:
    scraped_data = json.load(f)

# Existing clubs config keys and metadata
clubs_meta = {
  'blueprint': {
    'name': 'Blueprint',
    'icon': 'Compass',
    'color': 'from-blue-500 to-indigo-600',
    'textColor': 'text-blue-600 dark:text-blue-400',
    'tags': ['Design', 'UI/UX', 'Creativity'],
    'scraped_url': 'https://www.iiitp.ac.in/page/blueprint',
    'default_activities': ['UI/UX Workshops & Bootcamps', 'Daily UI Design Challenges', 'Creative Poster Designs for Fests', 'Prototyping & Wireframing hackathons']
  },
  'rang': {
    'name': 'Rang',
    'icon': 'Flame',
    'color': 'from-pink-500 to-rose-600',
    'textColor': 'text-pink-600 dark:text-pink-400',
    'tags': ['Fine Arts', 'Crafts', 'Sketching'],
    'scraped_url': 'https://www.iiitp.ac.in/page/rang-0',
    'default_activities': ['Graffiti & Campus Murals', 'Art & Photography Exhibitions', 'Face Painting Contests', 'Fest Thematic Decor Design']
  },
  'quantnum': {
    'name': 'QuantNum',
    'icon': 'Trophy',
    'color': 'from-yellow-500 to-amber-600',
    'textColor': 'text-yellow-600 dark:text-yellow-400',
    'tags': ['Mathematics', 'Analytics', 'Logic'],
    'scraped_url': 'https://www.iiitp.ac.in/page/quantnum-club',
    'default_activities': ['"Equation" Math Fest', 'Analytics & Statistics Bootcamps', 'Weekly Mathematical Puzzles', 'Vedic Mathematics workshops']
  },
  'bit-legion': {
    'name': 'Bit-Legion',
    'icon': 'ShieldAlert',
    'color': 'from-red-500 to-rose-600',
    'textColor': 'text-red-600 dark:text-red-400',
    'tags': ['Cyber Security', 'CTF', 'Ethical Hacking'],
    'scraped_url': 'https://www.iiitp.ac.in/page/bit-legion',
    'default_activities': ['"InfInITy" Flagship CTF (Joint)', 'Linux & SysAdmin workshops', 'Penetration Testing sessions', 'Security Audits']
  },
  'c-cube': {
    'name': 'C-CUBE',
    'icon': 'Code',
    'color': 'from-violet-500 to-purple-600',
    'textColor': 'text-violet-600 dark:text-violet-400',
    'tags': ['Algorithms', 'Data Structures', 'Competitive Coding'],
    'scraped_url': 'https://www.iiitp.ac.in/page/c-cube',
    'default_activities': ['Weekly Coding Challenges', 'ACM-ICPC Mock Rounds', 'Code-Golf Tournaments', 'Algo-Visualizer workshops']
  },
  'e-cell': {
    'name': 'E-Cell',
    'icon': 'Sparkles',
    'color': 'from-emerald-500 to-teal-600',
    'textColor': 'text-emerald-600 dark:text-emerald-400',
    'tags': ['Entrepreneurship', 'Leadership', 'Startup Incubator'],
    'scraped_url': 'https://www.iiitp.ac.in/life/professional/e-cell',
    'default_activities': ['Annual "E-Summit" Conclave', 'Elevator Pitch & B-Plan Competitions', 'Speaker Series with Founders & VCs', 'Case Study Competitions']
  },
  'eclectic': {
    'name': 'Eclectic',
    'icon': 'MessageSquare',
    'color': 'from-cyan-500 to-blue-600',
    'textColor': 'text-cyan-600 dark:text-cyan-400',
    'tags': ['Oratory', 'Debates', 'Newsletter'],
    'scraped_url': 'https://www.iiitp.ac.in/page/electic',
    'default_activities': ['Model United Nations (MUN) events', 'Poetry Slams & Open Mics', 'Inter-collegiate Debate tournaments', 'Publishing the student newsletter']
  },
  'saaz': {
    'name': 'SAAZ',
    'icon': 'Radio',
    'color': 'from-fuchsia-500 to-pink-600',
    'textColor': 'text-fuchsia-600 dark:text-fuchsia-400',
    'tags': ['Vocal', 'Instruments', 'Jamming'],
    'scraped_url': None,
    'default_activities': ['Acoustic Unplugged Nights', 'Band Showcases & Solo Singing', 'Instrumental Masterclasses', 'Recording sessions for student projects']
  },
  'vanity-crew': {
    'name': 'Vanity Crew',
    'icon': 'Sparkles',
    'color': 'from-orange-500 to-red-600',
    'textColor': 'text-orange-600 dark:text-orange-400',
    'tags': ['Dance', 'Choreography', 'Performances'],
    'scraped_url': 'https://www.iiitp.ac.in/page/vanity-crew',
    'default_activities': ['"Nritya Nova" Dance competition', 'Group Choreography for cultural fests', 'Hip-Hop and Classical workshops', 'Flash Mobs']
  },
  'sports': {
    'name': 'Sports',
    'icon': 'Trophy',
    'color': 'from-green-500 to-emerald-600',
    'textColor': 'text-green-600 dark:text-green-400',
    'tags': ['Cricket', 'Football', 'Indoor & Outdoor'],
    'scraped_url': 'https://www.iiitp.ac.in/page/sports',
    'default_activities': ['Annual Sports Fest "Ananta"', 'Inter-Branch Leagues', 'Marathons & Fitness Challenges', 'Intra-hostel tournaments']
  },
  'rofies': {
    'name': 'ROFIES',
    'icon': 'HelpCircle',
    'color': 'from-sky-500 to-indigo-600',
    'textColor': 'text-sky-600 dark:text-sky-400',
    'tags': ['Robotics', 'Embedded Systems', 'IoT'],
    'scraped_url': 'https://www.iiitp.ac.in/page/rofies',
    'default_activities': ['Robo-Wars Competitions', 'IoT home automation workshops', 'Embedded C Programming bootcamps', 'Line Follower workshops']
  },
  'localhost': {
    'name': 'localhost',
    'icon': 'Code',
    'color': 'from-indigo-500 to-purple-600',
    'textColor': 'text-indigo-600 dark:text-indigo-400',
    'tags': ['Web Dev', 'Mobile Apps', 'Open Source'],
    'scraped_url': 'https://www.iiitp.ac.in/page/localhost',
    'default_activities': ['"Nexus" Hackathon', 'Open source contribution drives', 'Full-stack engineering sessions', 'Git & GitHub bootcamps']
  },
  'horizon': {
    'name': 'Horizon',
    'icon': 'Compass',
    'color': 'from-blue-600 to-violet-700',
    'textColor': 'text-blue-600 dark:text-blue-400',
    'tags': ['Astronomy', 'Cosmology', 'Space Science'],
    'scraped_url': 'https://www.iiitp.ac.in/page/horizon',
    'default_activities': ['Stargazing & Telescope viewing nights', 'Water Rocket modeling tournaments', 'Science quiz debates', 'Astro-photography sessions']
  },
  'abhinay': {
    'name': 'Abhinay',
    'icon': 'MessageSquare',
    'color': 'from-amber-600 to-orange-700',
    'textColor': 'text-amber-600 dark:text-amber-400',
    'tags': ['Street Play', 'Acting', 'Theater'],
    'scraped_url': 'https://www.iiitp.ac.in/page/abhinay',
    'default_activities': ['"Awaz-E-Aawam" street play series', 'Stage Play productions for fests', 'Mimicry & Mono-act events', 'Scriptwriting workshops']
  },
  'q-riocity': {
    'name': 'Q-riocity',
    'icon': 'BookMarked',
    'color': 'from-teal-500 to-cyan-600',
    'textColor': 'text-teal-600 dark:text-teal-400',
    'tags': ['Quizzes', 'Trivia', 'General Knowledge'],
    'scraped_url': 'https://www.iiitp.ac.in/page/q-riocity',
    'default_activities': ['"Cognition" quiz contest', 'Weekly trivia rounds', 'Business & Tech quizzes', 'Inter-college quiz leagues']
  }
}

# Now, we will map each club's scraped paragraphs, activities, and images.
# If a club is saaz, we keep default.
clubs_data = {}

for key, meta in clubs_meta.items():
    url = meta['scraped_url']
    if not url or url not in scraped_data:
        # SAAZ or missing
        clubs_data[key] = {
            'name': meta['name'],
            'desc': 'The Music Club of IIIT Pune. SAAZ nurtures vocalists and instrumentalists, setting up jamming sessions, acoustic events, and representing the institute at national cultural fests.',
            'icon': meta['icon'],
            'color': meta['color'],
            'textColor': meta['textColor'],
            'tags': meta['tags'],
            'activities': meta['default_activities'],
            'images': [],
            'leadership': {
                'heads': [],
                'email': 'saaz@iiitp.ac.in',
                'instagram': '@saaz_iiitp',
                'website': 'https://saaz-iiitp.vercel.app/'
            }
        }
        continue
        
    s_club = scraped_data[url]
    
    # Description: construct from clean paragraphs
    paragraphs = []
    for tag, text in s_club['content']:
        if tag in ['p', 'span'] and len(text) > 30:
            if not any(x in text.lower() for x in ['head:', 'email:', 'instagram:', 'leadership', 'contact', 'website link', 'download', 'activities conducted by']):
                if text not in paragraphs:
                    paragraphs.append(text)
                    
    desc = " ".join(paragraphs[:3]) if paragraphs else ""
    if not desc:
        # Fallback to general text blocks
        blocks = [t for tag, t in s_club['content'] if tag in ['text', 'div', 'p', 'span'] and len(t) > 40]
        desc = " ".join(blocks[:2])
        
    if not desc or len(desc) < 30:
        desc = f"The official {meta['name']} Club of IIIT Pune, fostering innovation, creativity, and student participation in its domain."

    # Activities: let's extract them if they are list items or headings, else default
    activities = []
    for tag, text in s_club['content']:
        if tag in ['strong', 'h3', 'h2', 'span', 'li'] and 10 < len(text) < 80:
            if not any(x in text.lower() for x in ['head:', 'co-head:', 'email:', 'instagram:', 'leadership', 'contact', 'phone:', 'mis no:', 'mobile no:', 'branch:', 'venue:', 'date:', 'below are the details', 'youtube channel', 'silk route quiz', 'website', 'here is the list']):
                clean_act = text.strip('● -* ').strip()
                if clean_act and clean_act not in activities and len(clean_act) > 8:
                    activities.append(clean_act)
                    
    activities = [a for a in activities if not a.isupper()][:6]
    if len(activities) < 3:
        activities = meta['default_activities']
        
    # Images: filter out base64
    clean_images = [img for img in s_club['images'] if img.startswith('http') and 'base64' not in img]
    
    # Leadership & contacts
    heads = []
    email = ''
    instagram = ''
    website = ''
    
    # Parse text blocks for contact and leadership info
    full_text = " ".join([t for tag, t in s_club['content']])
    
    # Search for head
    head_match = re.search(r'(?:Club Head|Head|Founder)\s*:\s*([A-Za-z\s]+)(?:\(|,|\n|$)', full_text, re.IGNORECASE)
    if head_match:
        name = head_match.group(1).strip()
        if len(name) > 3 and len(name) < 30 and 'email' not in name.lower():
            heads.append({'name': name, 'role': 'Club Head'})
            
    cohead_match = re.search(r'(?:Club Co-Head|Co-Head|Vice Head)\s*:\s*([A-Za-z\s]+)(?:\(|,|\n|$)', full_text, re.IGNORECASE)
    if cohead_match:
        name = cohead_match.group(1).strip()
        if len(name) > 3 and len(name) < 30 and 'email' not in name.lower():
            heads.append({'name': name, 'role': 'Club Co-Head'})
            
    # Custom hand-coded mappings based on known exact data scraped (to be 100% correct)
    if key == 'abhinay':
        heads = [
            {'name': 'Swayam Patel', 'role': 'Club Head (CSE 3rd Year)'},
            {'name': 'Aashutosh Bharti', 'role': 'Club Co-Head (CSE 3rd Year)'}
        ]
        email = 'abhinay@iiitp.ac.in'
        instagram = '@abhinay_iiitp'
    elif key == 'vanity-crew':
        heads = [
            {'name': 'Avani Yadav', 'role': 'Club Head'},
            {'name': 'Arushi Ramesh', 'role': 'Club Co-Head'},
            {'name': 'Aaryan Singh', 'role': 'Club Co-Head'}
        ]
        email = 'vanitycrew@iiitp.ac.in'
        instagram = '@vanity_crew_iiitp'
        website = 'https://vanitycrew.vercel.app/'
    elif key == 'sports':
        heads = [
            {'name': 'Shriraj Nilare', 'role': 'Sports Club Head'},
            {'name': 'Bhavin Barad', 'role': 'Sports Club Co-Head'}
        ]
        email = 'sports@iiitp.ac.in'
        instagram = '@sports_iiitp'
    elif key == 'q-riocity':
        heads = [
            {'name': 'Aditya Apoorva Negi', 'role': 'Club Head (CSE 3rd Year)'},
            {'name': 'Aadit Bajaj', 'role': 'Core Team Member (CSE 2nd Year)'},
            {'name': 'Amol Raj', 'role': 'Core Team Member (CSE 2nd Year)'}
        ]
        email = 'q_riocity@iiitp.ac.in'
        instagram = '@q_riocity_'
    elif key == 'rang':
        heads = [
            {'name': 'Avani Patil', 'role': 'Club Head'},
            {'name': 'Akshad Khune', 'role': 'Club Co-Head'}
        ]
        email = 'rang@iiitp.ac.in'
        instagram = '@rangiiitp'
    elif key == 'quantnum':
        heads = [
            {'name': 'Suharsh Kumar', 'role': 'Club Head (CSE)'},
            {'name': 'Shreya Khandelwal', 'role': 'Club Co-Head (ECE)'}
        ]
        email = 'quantnum@iiitp.ac.in'
        instagram = '@quantnum_iiitp'
        
    # Search email if empty
    if not email:
        email_match = re.search(r'([a-zA-Z0-9_\-\.]+)@iiitp\.ac\.in', full_text)
        if email_match:
            email = email_match.group(0).strip()
            
    # Search instagram if empty
    if not instagram:
        insta_match = re.search(r'@[a-zA-Z0-9_\-]+', full_text)
        if insta_match:
            instagram = insta_match.group(0).strip()
            
    # Default fallback emails/socials
    if not email:
        email = f"{key.replace('-', '')}@iiitp.ac.in"
    if not instagram:
        instagram = f"@{key.replace('-', '_')}_iiitp"

    clubs_data[key] = {
        'name': meta['name'],
        'desc': desc,
        'icon': meta['icon'],
        'color': meta['color'],
        'textColor': meta['textColor'],
        'tags': meta['tags'],
        'activities': activities,
        'images': clean_images[:6],
        'leadership': {
            'heads': heads,
            'email': email,
            'instagram': instagram,
            'website': website
        }
    }

# Now generate the JS text file
out_js = []
out_js.append("// Auto-generated CLUBS config object for LifePage.jsx")
out_js.append("const CLUBS = {")

for key, val in clubs_data.items():
    out_js.append(f"  '{key}': {{")
    out_js.append(f"    name: '{val['name']}',")
    clean_desc = val['desc'].replace("'", "\\'")
    out_js.append(f"    desc: '{clean_desc}',")
    out_js.append(f"    icon: {val['icon']},")
    out_js.append(f"    color: '{val['color']}',")
    out_js.append(f"    textColor: '{val['textColor']}',")
    out_js.append(f"    tags: {json.dumps(val['tags'])},")
    
    clean_activities = [a.replace("'", "\\'") for a in val['activities']]
    out_js.append(f"    activities: {json.dumps(clean_activities)},")
    out_js.append(f"    images: {json.dumps(val['images'])},")
    out_js.append(f"    leadership: {json.dumps(val['leadership'])}")
    out_js.append("  },")

out_js.append("};")

outPath = os.path.join(os.path.dirname(__file__), 'clubs_config.js')
with open(outPath, 'w', encoding='utf-8') as f:
    f.write("\n".join(out_js))

print(f"JavaScript configuration saved to {outPath}")
