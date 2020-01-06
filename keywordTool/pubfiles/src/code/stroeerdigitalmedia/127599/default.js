integration.meta = {
	'sectionID' : '127599',
	'siteName' : 'Cosmopolitan - Tablet - (DE)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '762743',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#wrapper, .wrapperFooter, .outerWrapper").css({
			"width" : "980px",
			"margin" : "0 auto"
		});
		$("head").append("<style>header.navigation nav section.navtab ul.topLevel > li > a{padding: 8px 12px 0.3rem !important;}</style>");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.custom.IsEdge = true
			$("#wrapper, .wrapperFooter, .outerWrapper").css({
				"margin-left" : "0px"
			});
			$(".pageFooter").css({
				"margin" : "0 auto"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});
integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	if (integration.custom.IsEdge) {
		$(".adRow").css({
			"margin-right" : "255px"
		});
	}
});
