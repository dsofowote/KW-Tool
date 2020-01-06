integration.meta = {
	'sectionID' : '128924',
	'siteName' : 'LoveProperty - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1220]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1042555',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var width = $(window).width();
		var sideWidth = (width - 960) / 2;
		$("#header-module, .page-nav__wrapper").css({
			"max-width" : "960px",
			"margin" : "0 auto"
		});
		$("head").append("<style>.to-top{left: " + sideWidth + "px !important;} </style>")
	}
});
integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	})
});
integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = winheight + scrolltop + integration.custom.PageSkinBottomPanel - docheight;
		$(".to-top").css({
			"margin-bottom" : footermargin + "px"
		});
	} else {
		$(".to-top").css({
			"margin-bottom" : "0"
		});
	}
};

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://uk.ads.justpremium.com/adserve/js.php?zone=49373\"><\\script>";
};
