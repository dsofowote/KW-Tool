integration.meta = {
	'sectionID' : '125710',
	'siteName' : 'Evo',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
	
	
   'mf_siteId': '681743',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 970,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#header-group, #site-menus-sticky-wrapper").css({
			"margin" : "0 auto",
			"max-width" : "970px"
		});
		$("#site-menus").css({
			"max-width" : "970px"
		});
		$("head").append("<style>#InSkinBrowser0 .close:before{content: none;} #site-menus-sticky-wrapper{max-width: 970px !important; margin: 0 auto;}</style>");
		$("#feedbackify").hide();
	}
});

