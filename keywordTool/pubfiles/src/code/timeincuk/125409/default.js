integration.meta = {
   'sectionID' : '125409',
   'siteName' : 'NON UK Instyle PageSkin Tablet',

   'platform' : 'tablet',
   'restrictions' : ''
};


//

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706359',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#page, nav, .top-leaderboard-ad, .region.region-footer-top, #skip-link > a").css({
			"max-width" : "1020px"
		});
		$("head").append("<style>#header > nav.sticky{position:relative;}</style>");


    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {

			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#page, #footer, .region.region-bottom").css({
				"margin-left" : "0px"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$('#cookie-warning').appendTo($('#page-inner'));
	/* Logic to call function on publishers page */
	try {
		ipc.inskin.callback();
	} catch (e) {
	}
});

/* Passback Tag
window.ISMPassback = function() {
   return "<script src=\"http://www.googletagservices.com/tag/js/gpt.js\">\n googletag.pubads().definePassback('/18711560/instyle', [[970, 250]])\n .display();\n<\\script>";
}; */
