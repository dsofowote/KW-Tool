integration.meta = {
	'sectionID' : '127690',
	'siteName' : 'L\'express - Desktop - (  FR )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '781584',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true,
	"plr_StartScrollOnAnchor" : true,
	'plr_URLKeywords' : 1
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
		$("body > div.footer").css({
			"width" : "1000px",
			"margin" : "0 auto"
		});
		$("body").css({
			"overflow" : "visible"
		});
		$("class").css({
			"attr" : "value"
		});
		$("head").append("<style>.block_module_event_kiosk:after, .block_module_event_kiosk:before {background: none !important;}</style>");
		$("head").append("<style>.scroll_to_top{display:none !important;}</style>");
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
			"plr_ScrollAdjustment" : 52
		});
	} else {
		integration.base.setCfg({
			"plr_ScrollAdjustment" : headerHeight
		});
	}
};

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://securite.01net.com/ac?out=js&nwid=13&siteid=291877&pgid=1074380&fmtid=95&tgt=origine%3Dinskin&visit=s&gdpr_consent=[sas_gdpr_consent]&tmstp=[timestamp]\"><\\script>";
};
