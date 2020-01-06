integration.meta = {
	'sectionID' : '128133',
	'siteName' : 'NFL.com - Tablet - (Asia) ',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '980497',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -156,
	'plr_FastInit' : true,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.rmq-4b621a01.rmq-a944b75d, .rmq-4b621a01{padding-top:10px !important;} #wrap{margin-top:90px !important;}</style>");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			integration.custom.isEdge = true;
			$("head").append('<style>.inskinLoaded #content{width: 990px !important; margin-left: 10px !important; margin-right: 10px !important;}</style>');
			$("head").append('<style>.rsv-c0aa54bb{width: calc(100% - 160px) !important;}</style>');
			$("head").append('<style>#wrap{margin-top:90px;margin-left: 0px !important;}</style>');
		}
	}
});

integration.on('adServed', function(e) {
	var homePage = $(".nfl-responsive").length;
	console.log(homePage);
	if (homePage >= 1) {
		$(".ism-frame").parent().css({
			"top" : "200px"
		});
	} else {
		$(".ism-frame").parent().css({
			"top" : "152px"
		});
	}
});

integration.on("layoutChange", function(e) {
	$("[data-container-id*='home-page']").css({
		"overflow-x" : "hidden"
	});

	$("[data-test-id*='facemask-column']").css({
		"overflow-x" : "auto"
	});

	$("body").addClass("inskinLoaded");
	$(".ism-frame").parent().addClass("inskinanchor");
	var totalHeight = 0;
	$(".page-header-transition-manager-container").children().each(function() {
		totalHeight = totalHeight + ($(this).outerHeight() - 12);
	});
	//$("head").append('<style>.inskinanchor{top: ' + totalHeight + 'px !important;}</style>');
	$("head").append('<style>.rsv-c0aa54bb{width: calc(100% - 110px) !important;}</style>');
	$("head").append('<style>#content{width: 1000px !important; margin: 0 auto;}</style>');
	$("head").append('<style>#wrap{width: 1000px !important; margin: 0 auto;}</style>');
	$("head").append('<style>@media (min-width: 992px){.inskinLoaded .rsv-ae9db127 > .rmq-92843856{margin-left: 0 !important; margin-right: 0 !important;}}</style>');
	$("head").append('<style>@media (min-width: 992px){.inskinLoaded .rmq-aab6f7c7{width: 1000px !important; margin: 0 !important;}}</style>');
	$("head").append('<style>#bd{margin-left: 0px !important;}</style>');
	$("head").append('<style>body{overflow: visible !important;}</style>');
});
