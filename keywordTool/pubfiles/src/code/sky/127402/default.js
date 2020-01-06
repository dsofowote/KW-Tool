integration.meta = {
   'sectionID' : '127402',
   'siteName' : 'Sky Sports - (Publisher Bookings) Tablet- (UK)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '717455',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1010,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_PageScanExclude' : ' .site-nav-desktop, .site-footer, .outbrain-module, .most-popular '
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('.sdc-site-au__takeover').hide();
		$("body").addClass("advert--site-takeover");
		$('.site-header, .advert--banner-wrap, .site-footer').css({
			'width' : '1010px',
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