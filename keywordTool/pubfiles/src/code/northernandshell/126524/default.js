integration.meta = {
   'sectionID' : '126524',
   'siteName' : 'Daily Star - Desktop - (AU)',
   'platform' : 'desktop'
};

integration.disableKWFilters = true;




integration.testParams = {
   'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '708152',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "pub_Top, hidden_pub_TopRight",
	"plr_URLKeywords" : 1,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#innercontainer").css({
			"padding-top" : "10px"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/34722903/ns-network/inskin_passback', [[970,250]]).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script>";
};