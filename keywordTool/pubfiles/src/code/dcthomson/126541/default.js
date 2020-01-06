integration.meta = {
	'sectionID' : '126541',
	'siteName' : 'The Courier - Tablet - (UK) ',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708127',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var hHeight = $(".site-header").outerHeight();
		if ($(".site-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".site-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -hHeight,
			});
		}
		var headerHeight = $('#sso-login-bar').height();
		$('body').css({
			"padding-top" : headerHeight
		});
		$('#inskinanchor').css({
			"margin-top" : hHeight,
			'position' : 'relative'
		});
		$("head").append("<style>.block--advertising, .block--advertising > .wrap{display: none !important;} </style>");
		$('head').append('<style type="text/css">.sharing-bar.on {max-width: 980px; top: 100px !important;margin: 0 auto; left: 0; right: 0};</style>');
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			$('body').css({
				"padding-top" : headerHeight
			});
			$(' body > main').css({
				'max-width' : '980px',
				"margin" : "0"
			});
			$("head").append("<style>.sharing-bar.js-on{width: 980px !important; margin: 0 0 0 20px !important;}</style>");
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".wrapped, footer, .masthead").css({
				"max-width" : "980px",
				"margin-left" : "0",
				"width" : "100% !important"
			});
			$('body > nav > div').css({
				'margin-left' : '20px'
			});
			$('head').append('<style type="text/css">.sharing-bar.on {margin: 0; left: 20px; right: auto;}</style>');
		} else {
			$('body').css({
				"padding-top" : headerHeight
			});
			$(".masthead").css({
				"top" : "auto",
				"position" : "static"
			});
			$(".wrapped, footer, .masthead").css({
				"max-width" : "980px",
				"margin" : "0 auto",
				"width" : "100% !important"
			});
		}
		/* Sticky header on scroll */

		$(window).scroll(function() {
			if ($(window).scrollTop() > $('.ism-frame').parent().height()) {
				$('.masthead').css({
					"position" : "fixed",
					"top" : "0"
				});
			} else {
				$('.masthead').css({
					"position" : "static"
				});
			}
		});
		$(".masthead").css({
			"top" : "auto",
			"position" : "static"
		});
		$(".wrapped, footer, .masthead").css({
			"max-width" : "980px",
			"width" : "100% !important"
		});
	}
});

integration.on('layoutChange', function(e) {

	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.PageSkinSidePanel = e.data.plr_FrameSide;

	var ismNavTopAdjust = integration.custom.FrameTop + 132;
	console.log("TOP NAV IS " + integration.custom.FrameTop);
	$('body > nav').css({
		'top' : ismNavTopAdjust
	});
	$("#sso-login-bar").css({
		"max-width" : "calc(980px + " + integration.custom.FrameSideRight + "px + " + integration.custom.PageSkinSidePanel + "px)"
	});
});

/**** Raise Z-index of PageSkin ****/
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "3001"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/4987/passbacks/courier-passbacks/courier-inskin-passbacks', [[300, 250], [970, 250], [2, 2]]).display();\n<\\script>";
};
