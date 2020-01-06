integration.meta = {
	'sectionID' : '124800',
	'siteName' : 'Leipzig Live - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706727',
	'plr_PageAlignment' : 'left',
	'plr_ContentW' : 978,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('clearfix');
		var navHeight = $('.pdb-navbar').height();
		if ($(".pdb-navbar").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".pdb-navbar");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor"
			});
		}
		$("head").append("<style>.page{margin: 0 !important;} .pdb-navbar{left: 0 !important;} .clearfix:after{content: ''; display: table; clear: both;} </style>");
		$('#inskinanchor').css({
			"margin-top" : navHeight,
			"position" : "relative"
		});
	}
});
