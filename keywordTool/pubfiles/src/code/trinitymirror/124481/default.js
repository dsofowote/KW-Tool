integration.meta = {
    'sectionID' : '124481',
    'siteName' : 'mirror.co.uk - Tablet - (UK)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '706224',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
		$(".mod-pancakes").css({"grid-template-columns": "1fr", "max-width": "1024px"});
		$(".swipeable, footer").css({"max-width": "1024px", "margin": "0 auto"});
		$("#section-links").css({"padding-left": "100px"});
		$("#utility-links").css({"padding-left": "25px"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".mod-pancakes, .swipeable, footer").css({"margin-left": "0px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<!-- PassBack AdSlot 1 for Ad Unit 'mirror.co.uk' ### Size: [[970,250]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/5293/mirror.co.uk', [[970,250]])\n.setClickUrl('%%CLICK_URL_UNESC%%')\n.display();\n<\\script>\n<!-- End -->";
};
