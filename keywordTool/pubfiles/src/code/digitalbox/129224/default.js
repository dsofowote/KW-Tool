integration.meta = {
    'sectionID' : '129224',
    'siteName' : 'DailyMash - Tablet - (UK) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [
    '/news.html',
    '/sport.html',
    '/politics.html',
    '/opinion.html',
    '/features/agony-aunt.html',
    '/features/horoscopes.html',
    '/mash-books.html',
    '/'
 ];

integration.params = {
    'mf_siteId' : '1066165',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    "plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_HideElementsByClass" : "",
    "plr_URLKeywords" : 2,
    'plr_PageScanExclude' : ' #footer, .navbar, #sidebar '
	// 'plr_PageScanExclude' : "#sidebar, .TaboolaDesktop, .trc_rbox_container, #bottom_modules"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		// make necessary changes for PST Edge
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("#wrapper").css({
				"margin-left" : "0"
			});
			$("#ecd_opt_in_banner").css({
				"width" : "1002px"
			});
			integration.base.setCfg({
				plr_PageAlignment : "left"
			})
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/108455924/Mash-skin-passback', [1, 1]).display();<\\script>";
};
