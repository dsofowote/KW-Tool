integration.meta = {
   'sectionID' : '126907',
   'siteName' : 'Sunshine Coast Daily - Desktop - (AU)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707840',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 980,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('#body-ct-bg').css({
		  "display" : "none" 
	   });
	   $('.hat').css({
		   "width" : "980px",
		   "margin" : "auto"
	   });
	   $('.pull-left').css({
		   "padding-left" : "3px"
	   });
	   $('.hat-search').css({
		   "padding-right" : "3px"
	   });
   }
});
