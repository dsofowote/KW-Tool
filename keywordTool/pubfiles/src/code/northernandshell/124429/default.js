integration.meta = {
	"sectionID" : "124429",
	"siteName" : "Daily Star",
	"publisher" : "northernandshell",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1260]
};

integration.channelHome = ['/', '/showbiz-and-tv', '/sport', '/news', '/travel', '/life-style'];

integration.params = {

	'mf_siteId' : '681806',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "pub_Top, hidden_pub_TopRight",
	"plr_URLKeywords" : 1,
	"plr_FastInit" : true,
	'plr_PageScanExclude' : '.OUTBRAIN, div[class^="plista"], #gigyacomments, .stories'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#innercontainer").css({
			"padding-top" : "10px"
		});

		$("head").append("<style>#superbanner, #superbanner div:first-of-type{height:0px !important;padding:0px !important}</style>");
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/34722903/ns-network/inskin_passback', [[970,250]]).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script>";
};
