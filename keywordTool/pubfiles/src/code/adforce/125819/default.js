integration.meta = {
   'sectionID' : '125819',
   'siteName' : 'Irish Examiner',
   
   'platform' : 'desktop',
   'restrictions' : ''
};

integration.testParams = {
   'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707718',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_URLKeywords' : 2
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$(".top-bar, footer").css({
   		"max-width" : "1000px",
   		"margin" : "0 auto"
   	});
   }
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000000"
	});
});
