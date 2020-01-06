integration.meta = {
	'sectionID' : '126150',
	'siteName' : 'Polygon - Desktop - UK',
	
	'platform' : 'desktop',
	'restrictions' : ''
};




integration.testParams = {
	'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706882',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		//$(".top_clickers").hide();
		$(".m-site-nav").css({
			"position" : "fixed",
			"top" : "0px"
		});
		$("body").css({
			"margin-top" : "51px"
		});
		$("#body-wrapper").css({
			"margin-top" : "-25px",
			"z-index" : "5"
		});
		$("#polybar_spacer, #body-wrapper > .m-ad__leaderboard").css({
			"height" : "0px",
			"margin" : "0"
		});
		$("head").append("<style>#polybar_spacer{height:0px !important;}</style>");
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "6"
	});
});
/*
integration.on("layoutChange", function(e) {
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
		$(".m-site-nav").css({
			"margin-top" : newheight
		});
	} else {
		$(".m-site-nav").css({
			"margin-top" : "0px"
		});
	}
};
*/
window.ISMPassback = function() {
  return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">    googletag.pubads().definePassback(\n    \"/8644/Games_Polygon/dfp-passback/Inskin\", [728, 90]).display();\n<\\script>";
};