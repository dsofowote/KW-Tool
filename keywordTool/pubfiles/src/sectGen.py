import sys; print(sys.version)
import array as arr
import os
import json
import csv

filelist = []
for root, dirs, files in os.walk(".", topdown=False):
    i = 0
    for name in files:
            if name.endswith("default.dep"):
                i =  i + 1
                filenames = os.path.join(root, name)
                stringLen = len(filenames)
                stripped = filenames[2:stringLen]
                filelist.append(stripped)
depLength = len(filelist)
depCount = depLength - 1

os.listdir('/home/dsofowote/public_html/keywordTool/pubfiles/src/kwfilters/')
kwlist = os.listdir('/home/dsofowote/public_html/keywordTool/pubfiles/src/kwfilters/')
kwDict = []

e = 0
while e < depCount:
    d = 0
    f = open(filelist[e], 'r')
    fileContents = f.read()
    filepathstr = str(filelist[e])
    sectionId = filepathstr[-18:-12]
    
    while d < len(kwlist):  
        kwNameLen = len(kwlist[d])
        stripped = kwNameLen - 3
        kwName = kwlist[d][0:stripped]
        g = { sectionId : kwName }
        if kwName in fileContents:
            print("Section ID - ",sectionId, "KW Name - ",kwName)
            if not g in kwDict:
                kwDict.append({ sectionId : kwName })
                d = d + 1
        else:
            d = d + 1
    e = e + 1

os.unlink('/home/dsofowote/public_html/keywordTool/pubfiles/src/sectList.json')
with open('/home/dsofowote/public_html/keywordTool/pubfiles/src/sectList.json', 'w') as json_file:
    json.dump(kwDict, json_file)