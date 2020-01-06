integration.meta = {
	'sectionID' : '126546',
	'siteName' : 'Look (Competitions) - Tablet - (UK',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707080',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 990,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('body').css({
				"max-width" : "990px"
			});
		}
		$("head").append("<style>#footer{max-width: 990px;} .header-advert{height: 0 !important;}</style>");
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return inskinPassback();
};
