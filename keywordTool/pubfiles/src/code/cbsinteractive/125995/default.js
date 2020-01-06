integration.meta = {
	'sectionID' : '125995',
	'siteName' : 'Gamespot - Tablet',
	
	'platform' : 'tablet',
	'restrictions' : ''
};




integration.telemetry.setup({ 
	'keywords': true,
	'url': true,
	'ad-served': true,
	'base-ready': true,
	'ad-call-response': true,
	'ad-call': true,
	'failed-test': true,
	'impression': true,
	'custom': true,
	'window-load': true
});

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '706676',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1170,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		if ($("#site-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#site-wrapper");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$("#site-wrapper, #footer").css({
			"max-width" : "1170px",
			"margin" : "0 auto"
		});
		$("#footer > .container").css({
			"max-width" : "1160px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#site-wrapper, #footer").css({
				"margin-left" : "0"
			});
		}
	}
});

window.ISMPassback = function() {
  return "<script type=\"text/javascript\"><!--\ngoogle_ad_client = \"ca-pub-2679103605715789\";\n/* ATF - 728x90 */\ngoogle_ad_slot = \"6761856601\";\ngoogle_ad_width = 728;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};