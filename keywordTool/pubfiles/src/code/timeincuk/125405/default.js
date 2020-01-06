integration.meta = {
	'sectionID' : '125405',
	'siteName' : 'Good To Know - Tablet - (INT exc. UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '707284',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_URLKeywords" : 1,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$('body').addClass("keystone-premium-inskin");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("head").append("<style>#wrapper, #footer, #content, #header{margin: 0 !important;}</style>");
			$("head").append("<style>#header{margin-left: 20px !important; left: inherit; right: inherit;}</style>");
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
		$("head").append("<style>.has-adverts .header-advert {height : 0 !important;}</style>");
		$("head").append("<style>#header{margin: 0 auto; left: 0; right: 0;}</style>");
		$("head").append("<style>#wrapper{padding-top:0px !important;} #content{width: auto !important;}</style>");
		$("#footer, #content").css({
			"width" : "1200px",
			"margin" : "0 auto"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return inskinPassback();
};

