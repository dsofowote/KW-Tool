integration.meta = {
	"sectionID" : "124567",
	"siteName" : "Daily Star  ",
	"publisher" : "northernandshell",
	"platform" : "tablet"
};

integration.testParams = {};

integration.channelHome = ['/', '/showbiz-and-tv', '/sport', '/news', '/travel', '/life-style'];

integration.params = {
	'mf_siteId' : '681728',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_Responsive" : true,
	"plr_PageWidthAdjustment" : -44,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_URLKeywords" : 1,
	"plr_FastInit" : true,
	'plr_PageScanExclude' : '.OUTBRAIN, div[class^="plista"], #gigyacomments, .stories'
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			var siteW = Math.max(screen.width, screen.height);
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			$('.page-header, .page-content, .page-footer').css({
				'margin-left' : '0px'
			});
			$('#pub_Top').css({
				'width' : siteW + 'px'
			});
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/34722903/ns-network/inskin_passback', [[970,250]]).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script>";
};

