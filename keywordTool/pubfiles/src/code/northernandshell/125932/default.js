integration.meta = {
	"sectionID" : "125932",
	"siteName" : "'OK - Desktop - INT exc UK IRE",
	"publisher" : "northernandshell",
	"platform" : "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1260]
};

integration.params = {
	'mf_siteId' : '706666',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]"
};

integration.on("adServed", function(e) {
	$("head").append("<style>body{ overflow-x : auto; } body div#page{ position : static }</style>")
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- PassBack AdSlot 1 for Ad Unit 'ns-network/inskin_passback' ### Size: [[970,250]] --><script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/34722903/ns-network/inskin_passback', [[970,250]]).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script>";
};
