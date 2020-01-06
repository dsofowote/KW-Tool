integration.meta = {
    'sectionID' : '129586',
    'siteName' : 'Daily Star - Tablet - (UK)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = ['/', '/showbiz-and-tv', '/sport', '/news', '/travel', '/life-style'];

integration.params = {
    'mf_siteId' : '1085485',
    'plr_PageAlignment' : 'center',
    'plr_Responsive' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    "plr_PageWidthAdjustment" : -44,
  	"plr_URLKeywords" : 1,
	  "plr_FastInit" : true,
	  'plr_PageScanExclude' : ' #utility-links, .mod-header, #outbrainMidArticleSlot, #outbrainSidebarArticleSlot, .secondary, #outbrainFooterArticleSlot, .top-stories '
  	// 'plr_PageScanExclude' : '.OUTBRAIN, div[class^="plista"], #gigyacomments, .stories'
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
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\n  googletag.pubads().definePassback('/5293/tm-network/inskin_passback', [[970,250]])\n\n                    .setClickUrl('%%CLICK_URL_UNESC%%')\n\n                    .display();\n\n<\\script>";
};
