integration.meta = {
	'sectionID' : '124683',
	'siteName' : 'U Travel - Desktop',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707619',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1220,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var stickyHeadHeight = $(".progress-header").height();
		integration.base.setCfg({
			plr_ScrollAdjustment : stickyHeadHeight
		});
		$(".uk-sticky-placeholder").css({
			"max-width" : "1220px",
			"margin" : "0 auto"
		});
		$("#top-banner").css({
			"margin-top" : "10px"
		});
		$("#global-menu, #ulifestyle-header").css({
			"position" : "relative"
		});
		$(".stick-share").css({
			"left" : "0",
			"right" : "0"
		});
		$("#section-bar, .stick-share, #global-menu, .ub-footer").css({
			"max-width" : "1220px",
			"margin" : "0 auto"
		});
		$("head").append('<style>section.article-head .img-bg, section.break {max-width : 1220px; margin: 0 auto;} </style>');
		$('head').append('<style type="text/css">body > div.uk-sticky-placeholder > div {max-width: 1240px;margin: 0 auto;left: 0; right: 0;}</style>');
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	integration.custom.ismScroll();
	$(window).on("scroll", function() {
		integration.custom.ismScroll();
	});
	var placeHolder = $(".uk-sticky-placeholder")[0];
	var navTop = placeHolder.getBoundingClientRect().y;
	$(".channel-fixed-menu.uk-sticky-init.uk-active").css({
		"top" : navTop
	});
});

integration.custom.ismScroll = function() {
	var position = $(document).scrollTop() + $(window).height();
	var limit = $(document).height() - integration.custom.FrameBottom;
	var sideBottom = 0;
	if (position > limit) {
		sideBottom = position - limit;
	};
	$(".page-right-sticky.stick").css({
		"bottom" : sideBottom
	});
}
