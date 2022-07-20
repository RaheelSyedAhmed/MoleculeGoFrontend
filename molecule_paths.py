import json

f = ""
with open('./data/base.json', 'r') as base:
    f = base.read()

parsed_file = json.loads(f)


count = 0
for base in parsed_file:
    count += 1
    if count > 20 and str(base["thumbnail_fn"]).strip() != "": # Skips amino acids and non-thumbnail bases
        
        message = str(base['pk']).replace("-","") + ": require(\"../assets/molecule_images/" + base["local_path"] + "\"),"
        print(message)