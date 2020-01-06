integration.meta = {
   'sectionID' : '128132',
   'siteName' : 'NFL.com - Desktop - (Asia) ',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1500]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '980496',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1240,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_PageHeightAdjustment' : -145
};


integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#hd.global").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#hd.global");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}

		$("#hd").css({
			"margin-bottom" : "0px"
		});

		$("body").css({
			"overflow" : "visible"
		});
		$(".base.container, #page-footer").css({
			"max-width" : "1240px",
			"margin" : "0 auto"
		});

		$("body").append("<style>.rmq-e42d7359{max-width: 1240px; margin:0 auto !important;} .inskinLoaded .rmq-e850e4f9{padding-top: 0 !important;}</style>");

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
	var hh3 = $(".rsv-9639b18e").outerHeight();
	var headerHeight = hh1 + hh2 + hh3;

	$("head").append('<style>.inskinanchor{top:' + headerHeight + 'px !important;} #page-top-ad{margin: 155px auto 100px !important;}</style>');
	$("head").append('<style>#content{width: 1240px !important; margin: 0 auto;} .rsv-c0aa54bb > li{width: 7% !important;}</style>');
	$("head").append('<style>#wrap{width: 1240px !important; margin: 0 auto;} .rsv-af50123d{margin: 0 !important;}</style>');
	$("head").append('<style>body{overflow: visible !important;} #content{margin-top: 150px !important;}</style>');
	$("head").append('<style> @media (min-width: 992px){.inskinLoaded .rmq-aab6f7c7{margin: 0 !important;}}</style>');
});

integration.on('adServed', function(e) {
	var headHeight = $("header").outerHeight();
	$(".ism-frame").parent().css({
		"top" : headHeight
	});
});
