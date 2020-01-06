integration.meta = {
   'sectionID' : '126078',
   'siteName' : 'Sky Sports - Tablet - Non UK',
   
   'platform' : 'tablet',
   'restrictions' : ''
};




integration.testParams = {};

integration.params = {
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1024,
	"plr_URLKeywords" : 1,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("advert--site-takeover");
		$('.site-header, .advert--banner-wrap, .site-footer').css({
			'width' : '1024px',
			'margin' : '0 auto'
		});
		$('.advert--banner-wrap').hide();

		$('body').css({
			'overflow' : 'visible'
		});

		// format the site for PageSkin Edge
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {

			$('.site-header, .advert--banner-wrap, .site-footer, .site-wrapper, .breaking-news-banner__inner').css({
				'margin-left' : '0px'
			});
			integration.base.setCfg({
				plr_PageAlignment : 'left'

			});

		}

	}
});

window.ISMPassback = function() {
  return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n  googletag.pubads().definePassback(\n   \"/20346936/skysports\", [728, 90])\n  .setClickUrl(\"%%CLICK_URL_UNESC%%\")\n  .display();\n<\\script>";
};