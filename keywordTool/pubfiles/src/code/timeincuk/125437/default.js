integration.meta = {
	'sectionID' : '125437',
	'siteName' : 'Trusted Reviews - Tablet - (INT exc. UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '707526',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 1,
	"plr_FastInit" : true
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
			$("head").append('<style>#wrapper, .header--fixed{margin-left: 0 !important;}</style>');
			integration.custom.ScrollEdge();
		}
	}
});

integration.custom.ScrollEdge = function() {
	$(window).scroll(function() {
		if ($('nav').css("position") === "fixed" && $(window).scrollTop() > 0) {
			$('.header.has-double-tier nav').css({
				"left" : "41%"
			});
		}
	});
};

/* Passback Tag */
window.ISMPassback = function() {
	return inskinPassback();
};
