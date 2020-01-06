integration.meta = {
	"sectionID" : "125201",
	"siteName" : "Kotaku",
	"publisher" : "future",
	"platform" : "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1240]
};

integration.params = {

  'mf_siteId': '681827',

	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 980,
	"plr_UseFullVersion" : true,
	'plr_PageHeightAdjustment' : -120,
	"plr_HideElementsByClass" : "commercial",
	"plr_StartScrollOnAnchor" : true,
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('head').prepend('<style id="ISM_PS">.site-footer, .future-company-footer{ max-width:980px; margin: 0 auto} body{ background-image: none !important; } .site-container > .commercial--leaderboard{ margin: 0px; height: 0px;} </style>');
		if ($("#header-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter('#header-wrapper');
			integration.base.setCfg({
				plr_AnchorParent : '#inskinanchor'
			});
		}
	}
});

integration.on("adServed", function(e) {
	$('.ism-frame').parent().css({
		'z-index' : '11'
	});
	$(window).resize(function() {
		if ($('.site-container').width() < 970) {
			$('#ISM_PS').remove();
			integration.base.unloadAd();
		}
	});
});

/* Passback Tag */
/*window.ISMPassback = function() {
 return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">    googletag.pubads().definePassback(\n    \"/8644/Passback_Kotaku\", [728, 90])\n.setTargeting(\"passback\", \"inskin\").display();\n<\\script>";
 };*/
 window.ISMPassback = function() {
     return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback(\"/10518929/Passback_Kotaku/Inskin\", [728, 90]).display();\n<\\script>";
 };
