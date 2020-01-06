import sys; print(sys.version)
import array as arr
import os
import json
import csv
import re

filelist = ["Test entry"]
dataList = []
for root, dirs, files in os.walk(".", topdown=False):
    i = 0
    for name in files:
            if name.endswith("default.dep"):
                filenames = os.path.join(root, name)
                stringLen = len(filenames)
                stripped = filenames[2:stringLen]
                filelist.append(stripped)
            if name.endswith("default.js"):
                filenames = os.path.join(root, name)
                stringLen = len(filenames)
                stripped = filenames[2:stringLen]
                dataList.append(stripped)
            i =  i + 1
depLength = len(filelist)
depCount = depLength - 1

os.listdir('/home/dsofowote/public_html/keywordTool/pubfiles/src/kwfilters/')
kwlist = os.listdir('/home/dsofowote/public_html/keywordTool/pubfiles/src/kwfilters/')
kwDict = []
listDict = []

d = 0
while d < len(kwlist):
        print(d, len(kwlist))
        kwNameLen = len(kwlist[d])
        stripped = kwNameLen - 3
        kwName = kwlist[d][0:stripped]

        a = 0
        b = []
        sources = []

        with open("/home/dsofowote/public_html/keywordTool/pubfiles/src/kwfilters/" + kwlist[d]) as h:
            print(h.name)
            if not h.name.endswith("kw_content.js") or h.name.endswith("kw_title.js") or h.name.endswith("kw_url.js"):
                for line in h:
                    if not "sources :" in line or "sources:" in line:
                        h = re.search(r'\[(.*)\]', line)
                        if h:
                                m = h.group(0)
                                m = m.replace("'","")
                                m = m.replace("[","")
                                m = m.replace("]","")
                                m = m.replace('"','')
                                m = m.replace('/','')
                                print(line, m)
                                sources.append(m)
                                b = {kwName : m}
                                # listDict.append({"List Name" : kwName + " (" + a + ")" })
                                listDict.append({kwName : m})
        d = d + 1

os.unlink('/home/dsofowote/public_html/keywordTool/pubfiles/src/wordList.json')
with open('/home/dsofowote/public_html/keywordTool/pubfiles/src/wordList.json', 'w') as json_file:
    json.dump(listDict, json_file)