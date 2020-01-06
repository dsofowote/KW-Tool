integration.meta = {
	"sectionID" : "125132",
	"siteName" : "Verdens Gang",
	"publisher" : "schibsted",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
	'mf_siteId' : '707368',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1010,
	"plr_UseFullVersion" : true,
	"plr_GetContentHeightVersion" : 1,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var headHeight = $("._3r-np").height();
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
		if ($("._3r-np").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("._3r-np");
			integration.base.setCfg({
				'plr_AnchorParent' : "#inskinanchor",
				'plr_PageHeightAdjustment' : -40
			});
		}
		$("#inskinanchor").css({
			"top" : headHeight,
			"position" : "relative"
		});
		$("._1nmGi, .navbar, footer").css({
			"width" : "1010px",
			"margin" : "auto"
		});
	}
});
