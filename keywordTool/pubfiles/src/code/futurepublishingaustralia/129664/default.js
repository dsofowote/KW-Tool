integration.meta = {
    'sectionID' : '129664',
    'siteName' : 'Techradar - Desktop - (NZ)  ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1232]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086272',
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
