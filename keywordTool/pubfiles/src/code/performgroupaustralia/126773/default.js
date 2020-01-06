integration.meta = {
	'sectionID': '126773',
	'siteName': 'Goal.com - Smartphone - (AU)',
	'platform': 'smartphone'
};



integration.testParams = {
	'mobile_resolution': [360]
};

integration.params = {
	'plr_ComscoreDevice': 'desktop',
	'mf_siteId': '707119',
	'plr_FluidAnchor': true,
	'plr_Fluid': true,
	'plr_Responsive': true,
	'plr_ShowCloseButton': true,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	"plr_FastInit": true
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var windowWidth = $(window).width();
		var contentWidth = windowWidth - integration.custom.FrameSideRight;
		console.log(windowWidth, contentWidth);

		if ($("body > .widget-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > .widget-header");
			integration.base.setCfg({
				plr_AnchorParent: "#inskinanchor",
				plr_PageHeightAdjustment: -50
			});
		}
		if (windowWidth <= 360) {
			$("body").addClass("inskinLoaded");
			var stylesCSS = '<style id="inskinStyles" type="text/css">';
			stylesCSS += 'body.inskinLoaded{overflow:visible}';
			stylesCSS += '.inskinLoaded .body > iframe{width: 100%; height: auto;}';
			stylesCSS += '.inskinLoaded .page-container{min-width:' + contentWidth + 'px;max-width:' + contentWidth + 'px;}';
			//stylesCSS += '.inskinLoaded .tbl-feed-card, .inskinLoaded .trc_elastic .trc_rbox, .inskinLoaded .trc_rbox_div{max-width:' + (contentWidth - 40) + 'px;}';
			stylesCSS += '.layout-master.inskinLoaded {min-width:' + contentWidth + 'px;}';
			stylesCSS += '</style>';
			$('head').append(stylesCSS);
		} else {
			$("body").addClass("inskinLoaded");
			var stylesCSS = '<style id="inskinStyles" type="text/css">';
			stylesCSS += 'body.inskinLoaded{overflow:visible}';
			stylesCSS += '.inskinLoaded .body > iframe{width: 100%; height: auto;}';
			stylesCSS += '.inskinLoaded .page-container{min-width:' + contentWidth + 'px;max-width:' + contentWidth + 'px;}';
			stylesCSS += '</style>';
			$('head').append(stylesCSS);
		}
	}
});

integration.on('layoutChange', function (e) {
	$("[data-element='sliding-container'] > .news-card-media-slider").last().addClass("inskinSpecial");
	$("head").append("<style>.inskinSpecial{margin-left: -28px;}</style>");
	$(window).on('orientationchange', function () {
		$("[data-element='sliding-container'] > .news-card-media-slider").last().removeClass("inskinSpecial");
	});
});

integration.on('adServed', function (e) {
	var hh1 = $(".widget-ad-masthead").outerHeight();
	var hh2 = $(".widget-header").outerHeight();
	var headHeight = hh1 + hh2;

	if (hh1 !== 0){
		$(".ism-frame").parent().css({
			"top": headHeight,
			"position": "relative"
		});
	}

	$(".page-container").css({
		"margin-top": "45px"
	});

	integration.base.setCfg({
		plr_PageHeightAdjustment: headHeight
	});
});

integration.on('adClose', function (e) {
	$('body').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
	setTimeout(function () {
		$("[data-element='sliding-container'] > .news-card-media-slider").last().removeClass("inskinSpecial");
	}, 1000);
});

/* Passback Tag */
window.ISMPassback = function () {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/67970281/DISPLAY_OWNED_GBL/goalcom_responsive', [320, 50]).display();\n<\\script>";
};