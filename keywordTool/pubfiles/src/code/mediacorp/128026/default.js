integration.meta = {
	'sectionID' : '128026',
	'siteName' : 'Channel 8 News  - Desktop - ( SG )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1540]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '970016',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1280,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		$(".site-footer, .back-top").css({
			"margin" : "0 auto",
			"width" : "1280px"
		});

		$("body").css({
			"background-color" : "transparent"
		});

		$("#mdc-footer > div > nav.back-top > div > ul > li > a").css({
			"float" : "right"
		});

		$("#mdc-footer > div").css({
			"padding-left" : "44px",
			"padding-right" : "44px"
		});

		$("head").append("<style type='text/css'> .section-article > article > .articletools {position:static !important;}</style>");

		$("head").append("<style type='text/css'> .articletools > .sharetool > nav > ul > li, .articletools > .textsize > nav > ul > li {width:32px !important; display: inline-block !important;}</style>");

		$("head").append("<style type='text/css'> .articletools > .sharetool > nav {display:inline-block !important;}</style>");

		$("head").append("<style type='text/css'> .articletools {display:flex !important; position: initial!important; padding-bottom: 5px!important;}</style>");

		$("head").append("<style type='text/css'> .ms-head > div > div > nav > ul {margin-top: 26px!important;}</style>");

		if ($(".sect-nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".sect-nav");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -105,
				plr_ScrollAdjustment : -15
			});
		}
	}
});

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType === "PageSkinSuperwide" || e.data.productType === "PageSkinPlusSuperwide") {
			integration.custom.isSuper = true;
		}
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);

	integration.custom.InSkinBottomNav();

	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();

	$(".articlemedia .media-content.video-content").css({
		"background-color" : "none"
	});

	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
		var newStyles = ".media-content.video-content{margin-bottom:95px !important;}";
	} else {
		var newStyles = ".media-content.video-content{margin-bottom:0px !important;}";
	}
	
	document.getElementById("inskinStyles").innerHTML = newStyles
}
