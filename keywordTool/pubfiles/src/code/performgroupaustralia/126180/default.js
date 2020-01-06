integration.meta = {
   'sectionID' : '126180',
   'siteName' : 'CricBuzz - Desktop - AU',
   
   'platform' : 'desktop',
   'restrictions' : ''
};

integration.testParams = {
   'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707073',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 980,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : 'leaderboard',
   'plr_HideElementsByClass' : 'ad-unit'
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("body > .cb-footer").css({
   		"max-width" : "980px",
   		"margin" : "0 auto",
   		"left" : "0",
   		"right" : "0"
   	});
   	$(".cb-footer").css({
   		"display" : "table",
   		"float" : "none"
   	});
   	$("#leaderboard").css({
		   "min-height" : "0px"
	   });
   }
});
