integration.meta = {
	'sectionID' : '129012',
	'siteName' : 'RugbyPass - Tablet - (INT) ',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1045465',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1320,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $("header").outerHeight();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		integration.custom.FrameSide = e.data.plr_FrameSide;
		$('#top-header-ad, .home-trending, .brightcove-playlist-section, .home-ad-section, .editors-pick-postcasts-social, .home-fixed-banner,.footer-row, #content').css({
			"max-width" : '1320px',
			"margin" : '0 auto'
		});
		$('.home-fixed-banner').css({
			'left' : integration.custom.FrameSide
		});
		$('.home-fixed-banner-bottom').css({
			'position' : 'static'
		});
		$('body, #template').css({
			'overflow' : 'visible'
		});
		$("head").append("<style>.social-large.fixed{left: auto !important; right: " + integration.custom.FrameSideRight + "px !important;}</style>");
		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(" header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight,
				plr_ScrollAdjustment : -headHeight
			});
		}

		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('header').css({
				'left' : '-20px',
				'width' : '102%'
			});
			$('#content, footer').css({
				'margin' : 0
			});
			$('.home-fixed-banner').css({
				'left' : integration.custom.PageSkinFrameSideRight
			});
			$('.container').css({
				'padding' : '0 60px 0 30px'
			});
			$("head").append("<style>footer .footer-container, .footer-row{margin: 0 !important; padding: 0;}</style>");
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>(function(w,t,d,s){d=w.document;w.ggv2id=t;s=d.createElement('script');s.async=true;s.src='https://js.gumgum.com/services.js';d.getElementsByTagName('head')[0].appendChild(s);}(top,'14ac3a73'));<\\script>";
};
