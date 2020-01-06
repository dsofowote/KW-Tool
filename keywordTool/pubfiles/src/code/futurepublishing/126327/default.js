integration.meta = {
	'sectionID' : '126327',
	'siteName' : 'Gamesradar - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {


	'mf_siteId' : '706789',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		try {
			window.dfp.applying('inskin');
		} catch(e) {
		}
		$("body").addClass("inskinLoaded");
			 var stylesCSS = '<style type="text/css">';
			 stylesCSS += '.inskinLoaded .moreLatest-1-0{width:100%;margin:0 auto;}';
			 stylesCSS += '.inskinLoaded div.stickyContainer, .inskinLoaded .mobile-leaderboard-320-50{height: 0 !important;}';
			 stylesCSS += '</style>'
		$('head').append(stylesCSS);

	}
});


integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("head").append("<style>.inskinLoaded .primary-nav.single-tier .burgerbar .nav-list{top:" + integration.custom.FrameTop + "px;}</style>");
	$("head").append("<style>.inskinLoaded .button-search{margin-top:" + integration.custom.FrameTop + "px; margin-right:" + integration.custom.FrameSideRight + "px;}</style>");
	$("head").append("<style>.inskinLoaded .search-box{width:calc(100% - " + integration.custom.FrameSideRight + "px) !important;margin-top:" + integration.custom.FrameTop + "px; left:0px}</style>");
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "99999999999"
	});
});

integration.on("adClose", function(e) {
	 $("body").removeClass("inskinLoaded");
	 //$("#inskinanchor").remove();
	 integration.telemetry.recordCustom("Ad Closed / User Agent: " + navigator.userAgent + "");
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback(\"/10518929/Passback_GamesRadar/Inskin\", [320, 50]).display();\n<\\script>";
};
