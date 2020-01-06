integration.meta = {
	'sectionID' : '128411',
	'siteName' : 'Stern - Desktop - ( AT CH DE )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1010114',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_CheckOptOut' : true,
	'plr_ConsentString' : 'BOfG0SiOfG0SiAKABBENBxoAAAAiCAKAAUABUADIAIAAZABEACPAE4ATwBLAEIA',
	'plr_URLKeywords' : 1
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".page").css({
			"width" : "960px",
			"margin" : "0 auto"
		});
		$(".stern-gutscheinbox ul li a").css({
			"position" : "static"
		});
		$("#wallpaper_1").css({
			"display" : "none"
		});
		$(".stern-gutscheinbox-scroll .arrowbtn").css({
			"right" : "50px"
		});
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
	}
});
