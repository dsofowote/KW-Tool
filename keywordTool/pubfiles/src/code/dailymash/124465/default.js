integration.meta = {
   'sectionID' : '124465',
   'siteName' : 'Daily Mash - Tablet - (UK)',
   'platform' : 'tablet'
};

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

integration.testParams = {};

integration.params = {
    'mf_siteId': '681820',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1002,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_HideElementsByClass" : "",
	"plr_URLKeywords" : 2,
	'plr_PageScanExclude' : "#sidebar, .TaboolaDesktop, .trc_rbox_container, #bottom_modules"
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
   return "<div data-glade data-ad-unit-path=\"/4183072/DailyMash_InSkinTabletPASSBACK_1x1\" height=\"1\" width=\"1\"></div>\n\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};