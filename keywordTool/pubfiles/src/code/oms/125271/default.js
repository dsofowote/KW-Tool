integration.meta = {
  "sectionID": "125271",
  "siteName": "Auto.de",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {
  "desktop_resolution": [0]
};

integration.params = {
	'mf_siteId' : '706460',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "left",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 992,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "",
  'plr_BarneyThresholdClicks' : 4,
  'plr_BarneyThresholdRate' : 0,
  "plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('.wrapper').css({
		  "float" : "none" 
	   });	   
   }
});