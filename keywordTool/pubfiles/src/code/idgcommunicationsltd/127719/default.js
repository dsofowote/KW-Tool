integration.meta = {
	'sectionID' : '127719',
	'siteName' : ' Computer World UK - Desktop - (US) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1330]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '858461',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1070,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true,
	'plr_ScrollAdjustment' : -55
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
   return "<script type=\"text/javascript\" src=\"https://ads.ayads.co/ajs.php?zid=17285\"><\\script>";
};
