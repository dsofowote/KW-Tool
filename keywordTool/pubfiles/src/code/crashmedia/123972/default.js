integration.meta = {
	"sectionID" : "123972",
	"siteName" : "Crash.net",
	"publisher" : "crashmedia",
	"platform" : "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1260]
};

function setWindow() {
	return currentWindow.top;
};

integration.params = {
	'mf_siteId' : '681705',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_HideElementsByClass" : "ad",
	'plr_UseFullVersion' : true,
	'plr_FastInit' : true,
	"plr_ScrollAdjustment" : 26,
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($(".menu-area").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".menu-area");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -50
			});
		}
		$("head").append("<style>#footer-wrapper{max-width: 1000px !important; margin: auto;}</style>");
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1005"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/6316\"><\\script>";
};
