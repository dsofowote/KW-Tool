integration.meta = {
   'sectionID' : '126045',
   'siteName' : 'Johnston Press RON - Tablet - ( UK )',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
  'mf_siteId': '681681',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 992,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body > footer").css({
			"padding-bottom" : "0px"
		});
		if (e.data.productType == "PageSkinTablet2" || e.data.format == "Pageskin") {
			$("head").append("<style> body {width : 1192px;} </style>");
		/*	$("body").css({
				"width" : "1192px"
			});*/
		}
		if (e.data.productType == "PageSkinPlusTablet" || e.data.format == "Pageskin Plus") {
			$("head").append("<style> body {width : 1252px;} </style>");
		/*	$("body").css({
				"width" : "1252px"
			});*/
		}
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style> body {width : 992px;} </style>");
		}
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1002"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "  <script src='https://www.googletagservices.com/tag/js/gpt.js'>\n    googletag.pubads().definePassback('/70228659/MediaForce/Interstitial', [[1,1]]).setClickUrl('%%CLICK_URL_UNESC%%').display();\n  <\\script>";
};
