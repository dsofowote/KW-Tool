integration.meta = {
	'sectionID' : '125751',
	'siteName' : 'TV Player',
	
	'platform' : 'desktop',
	'restrictions' : ''
};




integration.testParams = {
	'desktop_resolution' : [1279]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706390',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_GetContentHeightVersion' : 2,
	//'plr_PageHeightAdjustment' : -88,
	//'plr_AnchorParent' : '#inskinanchor',
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.content-wrap .container-fluid {max-width: 1020px !important;}</style>");
	};
});

/**** Constrain Top Navigation within PageSkin ****/
integration.on("layoutChange", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "15"
	});
	//responsive related code
	CSSchange = false;
	integration.custom.makeCSSchange();
	$(window).resize(function() {
		integration.custom.makeCSSchange();
	});
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$("header, .content-wrap .content .navbar").css({
			"margin-top" : newheight
		});
	} else {
		$("header, .content-wrap .content .navbar").css({
			"margin-top" : "0px"
		});
	}
}

integration.custom.makeCSSchange = function() {
	var browserw = $(window).width();
	if (browserw > 1279 && !CSSchange) {
		CSSchange = true;
		$("header, footer, .navbar").css({
			"max-width" : "1020px",
			"left" : "50%",
			"margin-left" : "-510px"
		});
		var awidth = $(".navbar-nav .active").width();
		var apos = $(".navbar-nav .active").position().left;
		var leftbar = Math.round(Math.round(awidth / 2) + apos + 14);
		var rightbar = 1020 - leftbar;

		$("head").append("<style>.navbar-nav .active::before {width: " + leftbar + "px !important;}</style>");
		$("head").append("<style>.navbar-nav .active::after {width: " + rightbar + "px !important;}</style>");
	} else if (browserw < 1279 && CSSchange) {
		CSSchange = false;
		$("header, footer, .navbar").css({
			"max-width" : "100%",
			"left" : "0px",
			"margin-left" : "0px"
		});
		$("head").append("<style>.navbar-nav .active::before {width: 2000px !important;}</style>");
		$("head").append("<style>.navbar-nav .active::after {width: 2000px !important;}</style>");
	}
}

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type='text/javascript' src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/132483327/00123', [1, 1]).display();\n<\\script>";
};