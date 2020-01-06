integration.meta = {
   'sectionID' : '127559',
   'siteName' : 'Fandom - Tablet - (SG)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '748385',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1064,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".wds-global-navigation-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".wds-global-navigation-wrapper");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -55,
			});
		}
		$(".article-wrapper, .featured-header, .videos-module, .fandom-newsletter-signup, .wds-global-footer, .article-bottom-leaderboard-desktop-wrapper, .recirculation-feed, .hero-block, .index-page-wrapper").css({
			"width" : "1064px",
			"margin" : "0 auto"
		});
		$(".WikiaTopAds").hide();
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".article-wrapper, .featured-header, .videos-module, .fandom-newsletter-signup, .wds-global-footer, .article-bottom-leaderboard-desktop-wrapper, .recirculation-feed, .hero-block, .index-page-wrapper").css({
				"margin-left" : "0px",
			});
			//Moving the nav back inline
			$(".wds-global-navigation-wrapper").css({
				"margin-left" : "-20px"
			});
		}
	}
});
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "11"
	});
});
integration.on("layoutChange", function(e) {
	integration.custom.PageSkinLeftPanel = e.data.plr_FrameSide;
	integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
	$(".floating-social").css({
		"left" : integration.custom.PageSkinLeftPanel
	});

});
/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\"><!--\ngoogle_ad_client = \"ca-pub-7983542246824243\";\n/* Passback InSkin */\ngoogle_ad_slot = \"2123991719\";\ngoogle_ad_width = 728;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};
