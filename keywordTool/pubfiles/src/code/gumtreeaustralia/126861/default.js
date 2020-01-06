integration.meta = {
	'sectionID' : '126861',
	'siteName' : 'Gumtree - Tablet - (AU) ',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

function setWindow() {
    return currentWindow.top;
  }

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707198',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1240,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $('.header__top-layer').height();
		integration.base.setCfg({
			'plr_PageHeightAdjustment' : -headHeight
		});
		$("head").append("<style>#homenew{margin: 0 auto !important;}</style>");
		$("head").append("<style>#qualaroo_dnt_frame{display: none !important;}</style>");
		$("#homenew").css({
			"max-width" : "1240px",
		});
		$(".footer, .container--max-width").css({
			"max-width" : "1240px !important",
			"margin" : "0 auto"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			$("#SEARCH_BAR, .page, .header-upper-deck, .header-lower-deck, #SITE_FOOTER, #cars").css({
				"max-width" : "1240px",
			});
			$("head").append("<style>#homenew {margin-left: 0 !important;} </style>");
			$("head").append("<style>#cars {margin-left: 0 !important;} </style>");
			$(".page, #SEARCH_BAR, .header-upper-deck, .header-lower-deck, #SITE_FOOTER").css({
				"margin" : "0px"
			});
			$(".page, #SITE_FOOTER").css({
				"padding" : "20px"
			});
		}
	}
});

// integration.on("adServed", function(e) {
// 		var headHeight = $('.header__top-layer').height();
// 		console.log(headHeight);
// 		integration.base.setCfg({
// 			'plr_PageHeightAdjustment' : -headHeight
// 		});
// });

/* Passback Tag */
window.ISMPassback = function() {
	return "<!-- Start GPT Async Tag -->\n<script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'><\\script>\n<script>\n  var gptadslots = [];\n  var googletag = googletag || {cmd:[]};\n<\\script>\n<script>\n  googletag.cmd.push(function() {\n    //Adslot 1 declaration\n    gptadslots.push(googletag.defineSlot('/30720440/inskin/tablet', [[970,250],[320,100]], 'div-gpt-ad-26621-1')\n                             .addService(googletag.pubads()));\n\n    googletag.pubads().enableSingleRequest();\n    googletag.enableServices();\n  });\n<\\script>\n<!-- End GPT Async Tag -->";
};
