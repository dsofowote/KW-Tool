integration.meta = {
	'sectionID' : '127720',
	'siteName' : 'Tech World - Desktop - (US)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1340]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '858462',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1080,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true,
	'plr_ScrollAdjustment' : -60
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#skinFlexContainer, .siteFooter, .header-section__wrapper, #stickyAdWrapper").css({
			"width" : "1070px",
			"margin" : "0 auto",
		});
		$("head").append("<style>.top-lb--sticky{width: 1070px !important; margin: 0 auto;}</style>");
		$("head").append("<style>.top-lb--sticky, .stickyHeader .header-section__wrapper, .sticky-header .header-section__wrapper, .beSticky{left: 0 !important; right: 0 !important;}</style>");
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\" src=\"https://ads.ayads.co/ajs.php?zid=9856\"><\\script>";
};
