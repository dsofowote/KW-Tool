integration.meta = {
	'sectionID' : '125929',
	'siteName' : 'NFL.com',
	'platform' : 'tablet',
	'restrictions' : ''
};

//for escaping iframe
function setWindow() {
	return currentWindow.top;
  }

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706632',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	//'plr_Responsive' : true,
	//'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -156,
	'plr_FastInit' : true,
	'plr_CheckOptOut' : true,
	'plr_ConsentString' : "BOWPib9OWPib9AKABBENBxoAAAAiBzP0f62Op96z0v7FFmhGGgaMKfqbQgIMAEsvQATy5kgAfqE4wDBAycRDE0JCMERAKABABMgYoiEAkgiEghQAg5AKABgQ",
	'plr_PageScanExclude' : ' #page-footer, .css-tb5wki '
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.rmq-4b621a01.rmq-a944b75d, .rmq-4b621a01{padding-top:10px !important;}</style>");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			integration.custom.isEdge = true;
			$("head").append('<style>.inskinLoaded #content{width: 990px !important; margin-left: 10px !important; margin-right: 10px !important;}</style>');
			$("head").append('<style>.rsv-c0aa54bb{width: calc(100% - 160px) !important;}</style>');
			$("head").append('<style>#wrap{margin-left: 0px !important;}</style>');
		}
	}
});

integration.on('adServed', function(e) {
	console.log("test");
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

integration.on("layoutChange", function (e) {
	$("body").addClass("inskinLoaded");
	$(".ism-frame").parent().addClass("inskinanchor");
	var totalHeight = 0;

	$(".page-header-transition-manager-container").children().each(function () {
		totalHeight = totalHeight + ($(this).outerHeight() - 16);
	});

	// var hh1 = $(".links-container").outerHeight();
	// var hh2 = $(".page-header-wildcat-nav > div").outerHeight();
	// var hh3 = $(".page-navigation").outerHeight();
	// var headerHeight = hh1 + hh2 + hh3;
	//
	var hh1 = $(".links-container").outerHeight();
	var hh2 = $(".score-strip-list-container").outerHeight();
	var headerHeight = hh1 + hh2;

	$("head").append('<style>.inskinanchor{top:' + headerHeight + 'px} #page-top-ad{display: none;}</style>');
	$("head").append('<style>.rsv-378dd4d0 > li{width: 5.2% !important;} .application-shell{position: relative;}</style>');
	$("head").append('<style>#content{width: 985px !important; margin: 0 auto;}</style>');
	$("head").append('<style>#wrap{width: 985px !important; margin: 0 auto;} .rsv-af50123d{margin: 0 !important;}</style>');
	$("head").append('<style>body{overflow: visible !important;} #content{margin-top: 150px !important;}.rmq-a944b75d{margin-top:-150px !important}</style>');
});

