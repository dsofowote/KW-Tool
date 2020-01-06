integration.meta = {
    'sectionID' : '128831',
    'siteName' : 'CharlieIntel - Tablet - (UK)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1037180',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1021,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
    	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    	$("head").append("<style>._3zEEtS_0KXn3fBbZiqO5nS{right: " + integration.custom.FrameSideRight + "px !important;}</style>");
    	$('#td-outer-wrap').css({
			"width" : "1021px",
			"margin" : "0 auto"
		});
		/* content width divided by 2 */
		$(".td-scroll-up").css({
			"right" : integration.custom.FrameSideRight
		});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $("head").append("<style>#td-outer-wrap{margin: 0 !important;} .td-menu-background{display: none !important;}</style>");
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/175840252/MMPlus/Dexerto/CharlieIntel/Passback/728x90', [[728,90]]).setTargeting('Passback', ['InSkin']).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script>\t";
};