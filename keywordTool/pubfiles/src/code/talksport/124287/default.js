integration.meta = {
	'sectionID' : '124287',
	'siteName' : 'TalkSport - Desktop - (INT)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '681762',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('.sun-header-bg').height() + $('.sun-header--nav').height() + $('.sub-nav__container').height();
		if ($("#main-content").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#main-content > div:first-child");
			integration.base.setCfg({
				'plr_AnchorParent' : '#inskinanchor',
				'plr_PageHeightAdjustment' : -headerHeight

			});
			$('html').css({
				"height" : "100%"
			});
			$('body').css({
				"max-height" : "100%"
			});
		}
		$("head").append("<style>#main-articles, footer, .sun-header-bg.scrolling, .sun-header--nav.sun-header__mini{max-width: 980px !important; margin: 0 auto; left: 0 !important; right: 0 !important;}</style>");
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/3048/d.talksport/passback/Skin', [1, 1]).display();\n<\\script>";
};

