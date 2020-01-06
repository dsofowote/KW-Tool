integration.meta = {
   'sectionID' : '127441',
   'siteName' : 'Zuhause Wohnen',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '721858',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 974,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("#ganske-container").css({
		   "float" : "none"
	   });
   }
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"right" : "100px"
	});
});