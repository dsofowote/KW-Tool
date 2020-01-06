integration.meta = {
	"sectionID": "124245",
	"siteName": "Daily Express",
	"publisher": "northernandshell",
	"platform": "desktop"
};

integration.testParams = {
	"desktop_resolution": [1240]
};

integration.channelHome = [
   '/',
   '/news',
   '/news/uk',
   '/sport',
   '/sport/football',
   '/news/politics',
   '/showbiz',
   '/news/world',
   '/news/sunday',
   '/finance',
   '/news/politics'
];

integration.params = {
	'mf_siteId': '681751',
	// 'plr_PageScanExclude': ".right-column, #mainFooter, script",
	"plr_ContentType": "PAGESKINEXPRESS",
	"plr_PageAlignment": "center",
	"plr_UseCreativeSettings": true,
	"plr_ContentW": 980,
	"plr_UseFullVersion": true,
	"plr_URLKeywords": 2,
	"plr_HideElementsByID": "",
	"plr_HideElementsByClass": "superbanner, advert",
	'plr_BarneyThresholdClicks': 4,
	'plr_BarneyThresholdRate': 1,
	"plr_FastInit": true,
	"plr_ConsentTimeout" : 3,
	'plr_PageScanExclude' : ' #header_addons, .navigation, .sub-nav, .right-column, .mainFooter, script '
};

integration.on("adCallResult", function (e) {
	if (e.data.hasSkin) {
		if ($("body > .bodywrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("body > .bodywrapper");
			integration.base.setCfg({
				plr_AnchorParent: "#inskinanchor"
			});
		}
		$('body').css({
			'overflowX': 'visible'
		});
		$('').css({
			'height': '0px'
		});
		$('#superbanner div').first().css({
			'height': '0px'
		});
		$("head").append("<style>.headerShell.mini .innerShell .inner{display: none !important;} #superbanner, #superbanner div:first-of-type{height:0px !important;}</style>");
		$("#innercontainer").css({
			"padding-top": "10px"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/34722903/ns-network/inskin_passback', [[970,250]]).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script>";
};
