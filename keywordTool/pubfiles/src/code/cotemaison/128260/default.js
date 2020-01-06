integration.meta = {
	'sectionID' : '128260',
	'siteName' : 'Cote Maison - Desktop - ( FR )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '994944',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : 0
			});
		}
		$("body > div.footer, .nav_footer").css({
			"width" : "1000px",
			"margin" : "0 auto"
		});
		$("html, body").css({
			"overflow" : "visible"
		});
		$("body").css({
			'padding-top' : "8em"
		});
		$("head").append("<style>.block_module_event_kiosk:after, .block_module_event_kiosk:before {background: none !important;}</style>");
		$("head").append("<style>.scroll_to_top{left: 73% !important;} .block_pub_mbtop{display: none !important;} body #page{margin-top: 0 !important;}</style>");
	}
	
});

integration.on("layoutChange", function(e) {
	integration.custom.scroll();
	$(window).scroll(function() {
		integration.custom.scroll();
	});
});

integration.custom.scroll = function() {
	var headerHeight = $('.header').height();
	if ($('#header').hasClass('headroom_not_top')) {
		integration.base.setCfg({
			"plr_ScrollAdjustment" : 50
		});
	} else {
		integration.base.setCfg({
			"plr_ScrollAdjustment" : headerHeight
		});
	}
};

integration.on("adServed", function(e) {
	$('.ism-frame').parent().css({
		'z-index' : '99'
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "https://www6.smartadserver.com/ac?out=js&nwid=2898&siteid=180446&pgid=865308&fmtid=60311&tgt=origine%inskinmedia&visit=s&tmstp=[timestamp]&clcturl=[countgo]";
};

