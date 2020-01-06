integration.meta = {
   'sectionID' : '126141',
   'siteName' : 'Woman & Home - Tablet - (INT exc. UK)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
   'mf_siteId' : '709881',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1200,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$('body').addClass("keystone-premium-inskin");
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append('<style>#wrapper, .InSkin .header--fixed{margin-left: 0 !important;} .header-advert-wrapper{left: calc(60% - ' + integration.custom.FrameSideRight + 'px) !important;}</style>');
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return inskinPassback();
};

