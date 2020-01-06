integration.meta = {
	"sectionID" : "125537",
	'siteName' : 'Planet Rugby',

	'platform' : 'tablet'
};




integration.testParams = {};

integration.params = {


	'mf_siteId' : '706341',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1180,
	"plr_UseFullVersion" : true,
	"plr_URLKeywords" : 1,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".pr-ad-banner, .advert--leaderboard, #oop").hide();
		$(".wrap").css({
			"width" : "1180px"
		});
		$("body").css({
			"background" : "none"
		});
		$(".wrap").css({
			"background-color" : "#000000"
		});
		integration._addPixel();
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			$("#siteContainerInner, .footer").css({
				"margin-left" : "0px"
			});
			$(".navigation--primary").css({
				"left" : "0"
			});
			$("head").append("<style>.stickyNav { transform: translateX(0); -webkit-transform: translateX(0); -ms-transform: translateX(0); margin-left: 20px;}</style>");
			integration.custom.IsEdge = true;
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
});



/* Passback Tag */
window.ISMPassback = function() {
  return "<!--  Begin Rubicon Project Tag -->\n<!--  Site: Sky UK Planet Rugby - RTB Only   Zone: PC ROS   Size: Leaderboard  -->\n<script language=\"JavaScript\" type=\"text/javascript\">\nrp_account   = '7908';\nrp_site      = '18346';\nrp_zonesize  = '54690-2';\nrp_adtype    = 'js';\nrp_smartfile = '[SMART FILE URL]';\n<\\script>\n<script type=\"text/javascript\" src=\"https://ads.rubiconproject.com/ad/7908.js\"><\\script>\n<!--  End Rubicon Project Tag -->";
};
