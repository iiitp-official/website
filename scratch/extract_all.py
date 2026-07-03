import pdfplumber
import json
import os

pdf_files = {
    "PS-HSS-AP-Temp.pdf": {"dept": "ASH", "sub": "hss", "type": "shortlisted"},
    "ASH-Temp-Math-NS.pdf": {"dept": "ASH", "sub": "math", "type": "non_shortlisted"},
    "ASH-TeMP-Math-PS.pdf": {"dept": "ASH", "sub": "math", "type": "shortlisted"},
    "AP-Temp-ECE-PS.pdf": {"dept": "ECE", "sub": None, "type": "shortlisted"},
    "AP-Temp-ECE-NS.pdf": {"dept": "ECE", "sub": None, "type": "non_shortlisted"},
    "AP-ASH-Temp-HSS-NS.pdf": {"dept": "ASH", "sub": "hss", "type": "non_shortlisted"},
    "AP-Temp-CSE-PS-NS.pdf": {"dept": "CSE", "sub": None, "type": "mixed"}
}

data = {
    "assistant-professor": {
        "title": "Shortlistings for Assistant Professor (Temporary)",
        "departments": {
            "CSE": {
                "pdf": "/documents/AP-Temp-CSE-PS-NS.pdf",
                "shortlisted": [],
                "non_shortlisted": []
            },
            "ECE": {
                "shortlistedPdf": "/documents/AP-Temp-ECE-PS.pdf",
                "nonShortlistedPdf": "/documents/AP-Temp-ECE-NS.pdf",
                "shortlisted": [],
                "non_shortlisted": []
            },
            "ASH": {
                "math": {
                    "shortlistedPdf": "/documents/ASH-TeMP-Math-PS.pdf",
                    "nonShortlistedPdf": "/documents/ASH-Temp-Math-NS.pdf",
                    "shortlisted": [],
                    "non_shortlisted": []
                },
                "hss": {
                    "shortlistedPdf": "/documents/PS-HSS-AP-Temp.pdf",
                    "nonShortlistedPdf": "/documents/AP-ASH-Temp-HSS-NS.pdf",
                    "shortlisted": [],
                    "non_shortlisted": []
                }
            }
        }
    }
}

def clean_text(text):
    if not text: return ""
    return text.replace("\n", " ").strip()

def parse_pdf(file_name, config):
    file_path = os.path.join(r"d:\github_repos\My Projects\iiitp-website\public\documents", file_name)
    with pdfplumber.open(file_path) as pdf:
        all_rows = []
        for page in pdf.pages:
            tables = page.extract_tables()
            for table in tables:
                for row in table:
                    all_rows.append([clean_text(cell) for cell in row])
        
        # Remove header
        if len(all_rows) > 0 and 'S. No.' in all_rows[0][0]:
            header = all_rows[0]
            all_rows = all_rows[1:]
        
        # Determine target list
        if config["dept"] == "CSE" and config["type"] == "mixed":
            for row in all_rows:
                if len(row) >= 3:
                    item = {"sNo": row[0], "formNo": row[1], "remarks": row[3] if len(row)>3 else ""}
                    if "Yes" in row[2]:
                        data["assistant-professor"]["departments"]["CSE"]["shortlisted"].append(item)
                    elif "No" in row[2]:
                        data["assistant-professor"]["departments"]["CSE"]["non_shortlisted"].append(item)
        else:
            target_list = []
            for row in all_rows:
                if len(row) >= 2:
                    item = {"sNo": row[0], "formNo": row[1]}
                    if len(row) >= 3:
                        item["remarks"] = row[2]
                    target_list.append(item)
            
            if config["dept"] == "ASH":
                data["assistant-professor"]["departments"]["ASH"][config["sub"]][config["type"]] = target_list
            else:
                data["assistant-professor"]["departments"][config["dept"]][config["type"]] = target_list

for file_name, config in pdf_files.items():
    print(f"Parsing {file_name}...")
    parse_pdf(file_name, config)

out_path = r"d:\github_repos\My Projects\iiitp-website\src\data\shortlistings.json"
with open(out_path, "w") as f:
    json.dump(data, f, indent=2)
print("Saved to", out_path)
