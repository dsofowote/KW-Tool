integration.meta = {
	'sectionID' : '126265',
	'siteName' : 'Daily Express - Tablet - (US)',
	'platform' : 'tablet'
};




integration.testParams = {};

integration.params = {
	'mf_siteId' : '707106',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_Responsive" : true,
	'plr_URLKeywords' : 2,
	"plr_PageWidthAdjustment" : -44,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('#superbanner').css('height', '0px');
		$('.addToHomeIOS7').hide();
	}
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$('.container').css('margin-left', '0px');
			$('body').css('overflow-x', 'visible');
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/34722903/ns-network/inskin_passback', [[970,250]]).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script>";
};
