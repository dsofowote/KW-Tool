integration.meta = {
	'sectionID' : '125391',
	'siteName' : 'Luxury Insider - (Unpublished until approval) - Desktop - ( HK SG )',
	'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1320]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707357',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1060,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_StartScrollOnAnchor" : true,
	"plr_ScrollAdjustment" : 0,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
	}
});
