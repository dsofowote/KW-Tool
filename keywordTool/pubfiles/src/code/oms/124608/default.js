integration.meta = {
	"sectionID" : "124608",
	"siteName" : "Aachener Zeitung",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706430',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "[id^=google_ads_],brightcovePlayerContainer",
	"plr_HideElementsByClass" : "",
	"plr_FastInit" : true,
	'plr_ContentW': 978
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
				$("#park-main, .park-footer__wrapper").css({
						"margin" : "0 auto"
				});
				$(".park-footer").css({
						"width" : "978px",
						"margin" : "0 auto"
				});
				$(".park-fakebody").css({
						"margin-top" : "0px",
						"padding-top" : "0px"
				});
				$(".park-header").css({
						"margin-bottom" : "0px"
				});
				$("head").append("<style>.park-fakebody>:not(.park-fakebody__contents):not(#iamsendbox):not(#google_pubconsole_console){top: 0px !important;}</style>");
    }
});
