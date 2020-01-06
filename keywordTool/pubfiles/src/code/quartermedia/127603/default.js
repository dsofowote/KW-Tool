integration.meta = {
	'sectionID' : '127603',
	'siteName' : 'Ad Hoc News - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '764609',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1140,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_GetContentHeightVersion" : 2,
	//"plr_EnableActiveResize" : false,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#ip_page_wrapper").parent().css({
		"position" : "relative"
	});
	}
});


