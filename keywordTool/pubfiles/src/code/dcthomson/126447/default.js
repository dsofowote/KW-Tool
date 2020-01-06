integration.meta = {
	'sectionID' : '126447',
	'siteName' : 'The Press and Journal - Desktop - (UK) ',
	'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '707010',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#pandj-app > div.article-view.view-pane > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#pandj-app > div.article-view.view-pane > header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -170,
			});
		}
		$('footer').css({
			'max-width' : '1000px',
			'margin' : '0 auto'
		});
		$('.leaderboard-container, .billboard').css({
			'display' : 'none'
		});
		$('html, #bottomAd, .wpc-dfp-onebyone > div').css({
			'background' : '#ededed'
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/4987/passbacks/press-and-journal-passbacks/PJ-inskin_passbacks', [[300, 250], [970, 250], [2, 2]]).display();\n<\\script>";
};
