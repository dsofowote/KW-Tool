integration.meta = {
    'sectionID' : '129585',
    'siteName' : 'Daily Star - Desktop - ( UK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.channelHome = ['/', '/showbiz-and-tv', '/sport', '/news', '/travel', '/life-style'];

integration.params = {
    'mf_siteId' : '1085484',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1180,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
  	"plr_HideElementsByID" : "pub_Top, hidden_pub_TopRight",
  	"plr_URLKeywords" : 1,
      "plr_FastInit" : true,
      'plr_PageScanExclude' : ' #utility-links, .mod-header, #outbrainMidArticleSlot, #outbrainSidebarArticleSlot, .secondary, #outbrainFooterArticleSlot, .top-stories '
  	// 'plr_PageScanExclude' : '.OUTBRAIN, div[class^="plista"], #gigyacomments, .stories'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("footer, .solo, .article-page main").css({
            "margin" : "0 auto",
			"max-width" : "1180px"
        });
        $(".teaser").css({"padding-left": "5px"});
        $("head").append("<style>#superbanner, #superbanner div:first-of-type{height:0px !important;padding:0px !important}</style>");
        $("head").append("<style> #div-gpt-ad-top-slot, .top-slot {display: none !important;}</style>");
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\n  googletag.pubads().definePassback('/5293/tm-network/inskin_passback', [[970,250]])\n\n                    .setClickUrl('%%CLICK_URL_UNESC%%')\n\n                    .display();\n\n<\\script>";
};