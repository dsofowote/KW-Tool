import sys; print(sys.version)
import array as arr
import os
import json
import csv

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
    e = 1
    while e < depCount:
        a = 0

        f = open(filelist[e], 'r')
        filepathstr = str(filelist[e])
        sectionId = filepathstr[-18:-12]
        fileContents = f.read()
        kwNameLen = len(kwlist[d])
        stripped = kwNameLen - 3
        kwName = kwlist[d][0:stripped]

        g = open(dataList[e], 'r')
        a = 0
        b = []
        siteName = ""
        sources = []

        with open("/home/dsofowote/public_html/keywordTool/pubfiles/src/kwfilters/" + kwlist[d]) as h:
            j = 0
            for line in h:
                if "sources :" in line or "sources:" in line:
                    if j == 0:
                        j = j + 1
                        so = line.split(":")
                        if len(so) > 1:
                            so1 = so[1].split(",")
                            # print(so1[1])
                            no = 0
                            solen = len(so1)
                            #print(so1, solen)
                            while solen > no:
                                ws = so1[no].isspace()
                                r = so1[no].replace("[", "")
                                t = r.replace("]", "")
                                u = t.replace(",", " -")
                                y = u.replace("'", "")
                                if not y == True:
                                    if not y == "\n" or  y == " \n":
                                    # print(no,y)
                                        sources.append(y)
                                no = no + 1
                    elif j == 1:
                        sources.append(" (Note: Contains other scan setups)")
                        j = j + 1
                a = a + 1
                # print(sources)

        if kwlist[d] in fileContents:
            print("Keyword List - ",kwlist[d], "| Section ID - ",sectionId)
            g = {kwName  : sectionId}
            #List version
            if kwName in kwDict:
                kwDict =  [{kwName  : sectionId}]
            elif not g in kwDict:
                kwDict.append({kwName : sectionId})

            a = str(a)
            # b = {"List Name" : kwName + " (" + a + ")" }
            b = {"List Name" : kwName, "File Length" : a, "Scan Type" : sources}

            print(b)
            if not b in listDict:
                # listDict.append({"List Name" : kwName + " (" + a + ")" })
                listDict.append({"List Name" : kwName, "File Length" : a, "Scan Type" : sources})
            e = e + 1
           
        else:
            e = e + 1
    d = d + 1

os.unlink('/home/dsofowote/public_html/keywordTool/pubfiles/src/sectionList.json')
os.unlink('/home/dsofowote/public_html/keywordTool/pubfiles/src/keyList.json')

with open('/home/dsofowote/public_html/keywordTool/pubfiles/src/sectionList.json', 'w') as json_file:
    json.dump(kwDict, json_file)
with open('/home/dsofowote/public_html/keywordTool/pubfiles/src/keyList.json', 'w') as json_file:
    json.dump(listDict, json_file)