integration.meta = {
	'sectionID' : '128415',
	'siteName' : 'Schoener Wohnen - Desktop - ( AT CH DE )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1010939',
	'plr_PageAlignment' : 'custom',
	'plr_FramePositionCSS' : 'left: -90px; margin: 0 auto;',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true,
	'plr_CheckOptOut' : true,
	'plr_ConsentString' : 'BOfG0SiOfG0SiAKABBENBxoAAAAiCAKAAUABUADIAIAAZABEACPAE4ATwBLAEIA'
};

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "6"
	});
});
