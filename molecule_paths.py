import json

f = ""
with open('./data/base.json', 'r') as base:
    f = base.read()

parsed_file = json.loads(f)



count = 0
base_thumbnails = []
for base in parsed_file:
    count += 1
    if count > 20 and str(base["thumbnail_fn"]).strip() != "": # Skips amino acids and non-thumbnail bases
        base_thumbnails.append(base['thumbnail_fn'])
        message = str(base['pk']).replace("-","") + ": require(\"../assets/molecule_images/BASE_" + base["thumbnail_fn"] + "\"),"
        #print(message)
print(sorted(base_thumbnails))