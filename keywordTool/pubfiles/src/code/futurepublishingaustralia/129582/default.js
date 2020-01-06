integration.meta = {
    'sectionID' : '129582',
    'siteName' : 'Techradar - Desktop - (ASIA) ',
    'platform' : 'desktop'
};

integration.telemetry.setup({
	'keywords': true,
	'url': true,
	'ad-served': true,
	'base-ready': true,
	'ad-call-response': true,
	'ad-call': true,
	'failed-test': true,
	'impression': true,
	'custom': true
});

integration.testParams = {
	'desktop_resolution' : [1232]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085481',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 972,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
  	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
  	"plr_HideElementsByClass" : "advertBlock"
};


integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".primary-nav, #document-footer, #main, #dfp_advert_4").css({
			"max-width" : "970px",
			"margin-left" : "auto",
			"margin-right" : "auto"
		});
	}
});
