integration.meta = {
	'sectionID' : '128080',
	'siteName' : 'Hello Magazine - Smartphone - (IE)',
	'platform' : 'smartphone'
};




integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '973720',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : 80
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("pageskinServed");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.pageskinServed body{overflow-x:visible}';
		stylesCSS += '.pageskinServed html{overflow-x:hidden}';
		stylesCSS += '@media screen and (max-width: 320px) {.pageskinServed footer#mainfooter .back-top{right: 20% !important;}}';
		stylesCSS += '.pageskinServed footer#mainfooter .back-top{right: 24% !important;}';
		stylesCSS += '.pageskinServed .AR_1.ob-widget{min-width: 0 !important}';
		stylesCSS += '.pageskinServed #top-banner{height:0}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);

	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
	$("head").append("<style>.pageskinServed .ob-widget-section{width: calc(100% - " + integration.custom.FrameSideRight + "px);}</style>");
	$("head").append("<style>.pageskinServed .row.new.related{margin-right:0px;}</style>");
	$("head").append("<style>.pageskinServed div[id*='google_ads_iframe']{margin-left: -8px !important;}</style>");
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = integration.custom.PageSkinBottomPanel;
		$("head").append("<style>.pageskinServed .news-share{margin-bottom: " + footermargin + "px;}</style>");
	} else {
		$("head").append("<style>.pageskinServed .news-share{margin-bottom: 0px;}</style>");
	}
}

integration.custom.laychange = function() {
	var wwidth = $(window).width();
	var cont = wwidth - integration.custom.FrameSideRight;
	$("head").append("<style>.pageskinServed #all{max-width: " + cont + "px;}</style>");
	$("head").append("<style>.pageskinServed .news-share{max-width: " + cont + "px;}</style>");
	$("head").append("<style>.pageskinServed #secondaryBar{max-width: " + wwidth + "px;}</style>");
}

integration.on('adClose', function(e) {
	$("body").removeClass("pageskinServed");
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/87824813/Hellomagazine/passback/inskin', [[320, 50], [320, 100]]).display();\n<\\script>";
};
