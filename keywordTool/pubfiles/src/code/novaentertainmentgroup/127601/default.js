integration.meta = {
	'sectionID' : '127601',
	'siteName' : 'Nova Entertainment Network - Desktop - (AU)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1540]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '762976',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1280,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ForceFrameBottom' : "0"
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameBottom = e.data.plr_FrameBottom;
		if ($("#nova-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#nova-header");
			var footerHeight = $("#nova-footer").outerHeight();
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -(299 + footerHeight),
				"plr_StartScrollOnAnchor" : true,
				"plr_ScrollAdjustment" : 84
			});
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/7426/NovaFM', [[1,1]]).setTargeting(\"Keyword\", \"inskin_test\") .setTargeting(\"pos\", \"1\")\n.display();\n<\\script>";
};
