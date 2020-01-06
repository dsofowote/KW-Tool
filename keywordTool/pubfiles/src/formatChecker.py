import sys; print(sys.version)
import array as arr
import os
import json
import csv

filelist = []
for root, dirs, files in os.walk(".", topdown=False):
    i = 0
    for name in files:
            if name.endswith("default.js"):
                i =  i + 1
                filenames = os.path.join(root, name)
                stringLen = len(filenames)
                stripped = filenames[2:stringLen]
                filelist.append(stripped)
depLength = len(filelist)
depCount = depLength - 1
listDict = []
e = 0
while e < depCount:
    with open(filelist[e]) as h:
            j = 0
            # for line in h:
            #     if not "Pagelead Video" in line:
            #        
            if not "Pagelead Video" in filelist[e]:
                print(filelist[e])
                filepathstr = str(filelist[e])
                sectionId = filepathstr[-17:-11]
                listDict.append(sectionId)
    e = e + 1
                # print(sources)

with open('/home/dsofowote/public_html/keywordTool/pubfiles/src/formatCheck.json', 'w') as json_file:
    json.dump(listDict, json_file)