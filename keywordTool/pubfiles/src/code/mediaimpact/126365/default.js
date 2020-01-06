integration.meta = {
	'sectionID' : '126365',
	'siteName' : 'Bild der Frau - Tablet - (INT)',
	'platform' : 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707884',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1044,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('.article .article__header .article__header__multi__container, #nav-main').css({
			"max-width" : "1044px",
			"width" : "100%",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			$('head').append('<style type="text/css">.page-wrapper {margin: 0 !important;}</style>');
			$('.full-width.white, .article .article__header .article__header__multi__container').css({
				"margin-left" : "20px"
			});
			$('head').append('<style type="text/css">#nav-main {left: 20px !important;}</style>');

			var docScroll;
			$(window).scroll(function() {
				docScroll = $(window).scrollTop();
				if (docScroll >= 130) {
					$('head').append('<style type="text/css">#nav-main {left: 20px !important;margin:0 !important;}</style>');
				} else {
					$('head').append('<style type="text/css">#nav-main {left: 0 !important;margin:0 !important;}</style>');
				}
			});

			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	$('head').append('<style type="text/css">.full-width.white {top: ' + integration.custom.PageSkinTopPanel + 'px !important;max-width: 1044px; left: 0; right: 0;margin: 0 auto;position: fixed !important;}</style>');

	$("head").append("<style id='ismNavScroll'></style>");
	integration.custom.ismNavScroll();
	$(window).on("scroll", function() {
		integration.custom.ismNavScroll();
	});
});

integration.custom.ismNavScroll = function() {
	var topScroll = $(window).scrollTop();
	if (topScroll >= 280) {
		$("#ismNavScroll").html(".full-width.white {top: 0px !important;position: fixed !important;}");
	} else {
		$("#ismNavScroll").html(".full-width.white {top: " + integration.custom.PageSkinTopPanel + "px !important;position: absolute !important; display:none;}");
	}
}
