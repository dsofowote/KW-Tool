integration.meta = {
	'sectionID' : '126440',
	'siteName' : 'TV.com - Tablet - (AU)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707027',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 986,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".m.tv_header_spacer").css({
			"height" : "0px"
		});
		if ($("._bento").length) {
			$("body").css({
				"padding-top" : "50px"
			});
		} else {
			integration.base.setCfg({
				'plr_ContentW' : 1170
			});
			$("body").css({
				"padding-top" : "50px"
			});
		};
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$(".header_bar").css({
				"margin-left" : "-20px"
			});
			$(".outer, ._bento, .tv_footer > .container").css({
				"margin-left" : "0"
			});
			if ($("._bento").length) {
				$(".leader_bottom, .top_ad_wrapper").css({
					"margin-left" : "0"
				});
			} else {
				$(".leader_bottom, .top_ad_wrapper").css({
					"margin-left" : "100px"
				});
			}
			integration.base.setCfg({
				"plr_PageAlignment" : "left"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".tv_footer").css("margin", "0 auto");
	$("#InSkinFrameLeft_myTabletSkin").css("z-index", 3);
	$("#InSkinFrameRight_myTabletSkin").css("z-index", 3);
	$(".ism-frame").css("z-index", "3");

}); 