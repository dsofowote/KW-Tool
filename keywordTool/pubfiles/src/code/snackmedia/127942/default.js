integration.meta = {
	'sectionID' : '127942',
	'siteName' : 'NFL.com- (Homepage) - Desktop - (UK)  ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1500]
};

//for escaping iframe
function setWindow() {
	return currentWindow.top;
  }

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '953071',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1240,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_CheckOptOut' : true,
	'plr_ConsentString' : "BOWPib9OWPib9AKABBENBxoAAAAiBzP0f62Op96z0v7FFmhGGgaMKfqbQgIMAEsvQATy5kgAfqE4wDBAycRDE0JCMERAKABABMgYoiEAkgiEghQAg5AKABgQ",
	'plr_FastInit' : true,
	'plr_PageScanExclude' : ' #hd, #col2, #content-35237387, #page-footer '
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (integration.params.plr_CachedISAPResponse.PageSkinAd.settings.swFixedSides) {
			$("head").append("<style>.page-header-transition-manager-container > div:nth-of-type(1),.page-header-transition-manager-container > div:nth-of-type(2){position:fixed !important}</style>");
			integration.base.setCfg({
				"plr_AnchorFixedSides": true
			});
			var hh1 = $(".links-container").outerHeight();
			var hh2 = $(".page-header-wildcat-nav > div").outerHeight();
			var hh = hh1+hh2;
			//To prevent gaps between the navigation and top frame when the nav changes position
			$(document).scroll(function () {
				var scrollTop = $(document).scrollTop();
				var a = $(".page-header-transition-manager-container > div:eq(1)").css("transform");
				if (scrollTop < (hh1+hh2)){
					integration.base.setCfg({
						"plr_ScrollAdjustment": "0px"
					});
				}else if (a !== "matrix(1, 0, 0, 1, 0, -88)") {
					integration.base.setCfg({
						"plr_ScrollAdjustment": hh1 + hh2 + "px"
					});
				} else {
					integration.base.setCfg({
						"plr_ScrollAdjustment": hh1 + "px"
					});
				}
			});
		}

		$("#hd").css({
			"margin-bottom" : "0px"
		});

		$("body").css({
			"overflow" : "visible"
		});
		$(".rmq-63ac5709").css({
			"display" : "none"
		});
		$(".base.container, #page-footer").css({
			"max-width" : "1240px",
			"margin" : "0 auto"
		});

		$("body").append("<style> .rmq-e42d7359{max-width: 1240px; margin:0 auto !important;} .inskinLoaded .rmq-e850e4f9, div.rmq-82bdf44d.rmq-f9386497, div.rmq-4b621a01.rmq-a944b75d {padding-top: 0 !important;}</style>");
		$("#team-sites-header-bar").css({
			"max-width" : "1240px",
			"margin" : "0px auto"
		});

		$('#page-top-ad').css({
			'height' : '0px',
			'max-height' : '0px'
		});

		var footerWidth = 1240 - 320;
		$("#page-footer nav ul ul.rsv-c0aa54bb").css({
			"max-width" : footerWidth
		});
	}
});

integration.on("layoutChange", function(e) {
	$("body").addClass("inskinLoaded");
	$(".ism-frame").parent().addClass("inskinanchor");
	var totalHeight = 0;
	$(".page-header-transition-manager-container").children().each(function() {
		totalHeight = totalHeight + ($(this).outerHeight() - 13);
	});

	var hh1 = $(".links-container").outerHeight();
	var hh2 = $(".secondary-navigation").outerHeight();
	var hh3 = $(".page-header-wildcat-nav > div").outerHeight();
	var headerHeight = hh1 + hh2 + hh3;

	$("head").append('<style>.inskinanchor{top:' + headerHeight + 'px !important;}</style>');
	$("head").append('<style>.rsv-378dd4d0 > li{width: 9.2% !important;} .application-shell{position: relative;}</style>');
	$("head").append('<style>#content{width: 1240px !important; margin: 0 auto;}</style>');
	$("head").append('<style>#wrap{width: 1240px !important; margin: 0 auto;} .rsv-af50123d{margin: 0 !important;}</style>');
	$("head").append('<style>body{overflow: visible !important;} [data-test-id="facemask-footer-panel-list"]{width: 100% !important;}</style>');
	$("head").append('<style> @media (min-width: 992px){.inskinLoaded .rmq-aab6f7c7{margin: 0 !important;}}</style>');

	integration.base.setCfg({
		//'plr_ScrollAdjustment' : 0,
		'plr_PageHeightAdjustment' : -headerHeight
	});

});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script type=\"text/javascript\" src=\"//uk.ads.justpremium.com/adserve/js.php?zone=71384\"><\\script>";
};
