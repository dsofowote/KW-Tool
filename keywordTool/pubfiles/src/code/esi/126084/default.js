integration.meta = {
	"sectionID" : "126084",
	"siteName" : "The Independent",
	"publisher" : "independent",
	"platform" : "tablet"
};




integration.testParams = {};

integration.params = {
	'mf_siteId' : '706754',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_URLKeywords': 2,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("body > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		} else {
			integration.base.setCfg({
				plr_AnchorParent : "#content"
			});
		}
		$("head").append("<style> #leaderboard { max-height : 0px!important; margin : 0px!important; } </style>");
		$('body').addClass('wrapped_by_ads');
		$("#mastfooter, #content > div.region.region-content > article > div.dark-background > div").css({
			"max-width" : "1000px",
			"margin" : "0 auto",
			"width" : "100%",
			"left" : "0",
			"right" : "0"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('#content').css({
				'margin-left' : '0px'
			});
			$("body").css({
				"width" : "initial"
			});
			$("#mastfooter, #content > div.region.region-content > article > div.dark-background > div").css({
				"margin" : "0",
				"margin-left" : "20px"
			});
		}
		try {
			if ( typeof window.grid != 'undefined') {
				window.grid.recalculate();
			}
		} catch(e) {
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type='text/javascript' src='http://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/71347885/main_passback/indy/inskin/test', [728, 90]).display();\n<\\script>";
};