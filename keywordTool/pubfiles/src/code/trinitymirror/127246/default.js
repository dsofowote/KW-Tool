integration.meta = {
   'sectionID' : '127246',
   'siteName' : 'Trinity Mirror regionals - Tablet - (UK) ',
   'platform' : 'tablet'
};




integration.testParams = {};

integration.params = {

	'mf_siteId' : '707051',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1024,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_URLKeywords" : 2
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
		$(".mod-pancakes").css({"grid-template-columns": "1fr", "max-width": "1024px"});
		$(".swipeable, footer").css({"max-width": "1024px", "margin": "0 auto"});
		$("#section-links").css({"padding-left": "100px"});
		$("#utility-links").css({"padding-left": "25px"});
		$(".related-column").css({"padding-left": "5px"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".mod-pancakes, .swipeable, footer").css({"margin-left": "0px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<!-- PassBack AdSlot 1 for Ad Unit 'tm-network/inskin_passback' ### Size: [[970,250]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5293/tm-network/inskin_passback', [[970,250]])\n.setClickUrl('%%CLICK_URL_UNESC%%')\n.display();\n<\\script>\n<!-- End -->";
};