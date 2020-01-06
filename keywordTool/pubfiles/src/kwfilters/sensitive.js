/********************************************************************************************************/
/* IMPORTANT NOTE ABOUT INVAID AD CALL OPTION (BELOW)                                                   */
/* --------------------------------------------------                                                   */
/* This option will make all requests to pages with these keywords be flagged as invalid inventory.     */
/* This will increase the discrepancy on a site. It should NOT be used on Campaign Ad Tag integrations. */
/* If used on Site Ad Tag integrations this should be noted in the Lookup Tool and used with caution.   */
/**
//
// example keyword list:
//

var myList = {
  sources: ['url', 'title', 'keywords', 'page'],
  keywords: {}
};
kwLists.push(myList);

// add keywords to the list:
myList.keywords["attack"] = {'keyword': 'sensitive_content', 'fullWord': false};
**/
/********************************************************************************************************/

var front_end_exclude = {
    sources: ['url', 'title'],
    keywords: {}
}
  
kwLists.push(front_end_exclude);
front_end_exclude.keywords["attack"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["behead"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["blast"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["bomb"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["child,porn"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["child,sex"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["explosion"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["explosive"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["extremist"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["incest"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["jihad"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["massacre"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["murder"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["paedo"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["plane,crash"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["terror"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["suicide"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["sex,assault"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["sex,abuse"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["sex traffick"] = {'keyword': false, 'fullWord': false};
front_end_exclude.keywords["mass shooting"] = {'keyword': false, 'fullWord': false};

front_end_exclude.keywords["isil"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["isis"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["islamic state"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["rape"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["raped"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["rapes"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["raping"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["rapist"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["shooter"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["shooters"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["shooting"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["slave"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["slaves"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["slavery"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["gunman"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["stephen paddock"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["sayfullo"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["saipov"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["allahu akbar"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["devin kelley"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["gunmen"] = {'keyword': false, 'fullWord': true};
front_end_exclude.keywords["sri lanka"] = {'keyword': false, 'fullWord': true};

/* Mile end exclusions start */
front_end_exclude.keywords['fire'] = {'keyword': false, 'fullWord': true}; 
front_end_exclude.keywords['east london tower'] = {'keyword': false, 'fullWord': true}; 
front_end_exclude.keywords['block blaze'] = {'keyword': false, 'fullWord': true}; 
front_end_exclude.keywords['flat blaze'] = {'keyword': false, 'fullWord': true};  
front_end_exclude.keywords['wellington way'] = {'keyword': false, 'fullWord': true}; 
front_end_exclude.keywords['12th floor flat'] = {'keyword': false, 'fullWord': true}; 
front_end_exclude.keywords['grafton house'] = {'keyword': false, 'fullWord': true}; 
/* Mile end exclusions end */
/*
 * Coop sensitive keywords 
 * */

var coop_exclude = {
    sources: ['url', 'title'],
    keywords: {}
}
kwLists.push(coop_exclude);

coop_exclude.keywords["coop"] = {'keyword': 'sensitiveCoop', 'fullWord': false };
coop_exclude.keywords["funeral"] = {'keyword': 'sensitiveCoop', 'fullWord': false };