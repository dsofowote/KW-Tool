integration.meta = {
	"sectionID" : "124410",
	"siteName" : "TV.com",
	"publisher" : "cbs",
	"platform" : "tablet"
};




integration.telemetry.setup({
	'keywords' : true,
	'url' : true,
	'ad-served' : true,
	'base-ready' : true,
	'ad-call-response' : true,
	'ad-call' : true,
	'failed-test' : true,
	'impression' : true,
	'custom' : true, 
	'window-load': true
});

integration.testParams = {};

integration.params = {
	
	
  'mf_siteId': '681737',
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

window.ISMPassback = function() {
	return "<script type=\"text/javascript\"><!--\ngoogle_ad_client = \"ca-pub-2679103605715789\";\n/* ATF - 728x90 */\ngoogle_ad_slot = \"6761856601\";\ngoogle_ad_width = 728;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};
