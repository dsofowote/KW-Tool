integration.meta = {
	'sectionID' : '125468',
	'siteName' : 'RTE - Desktop - ( IE UK US )',
	'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1035951',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').css({
			"width" : "1100px",
			"margin" : "0 auto"
		});
		
		$('.masthead-advert-container').css({
			"position" : "relative"
		});
		$("head").append("<style>.panel-hero-carousel > .carousel-prev{left: 0 !important;} .panel-hero-carousel > .carousel-next{left: auto !important; right: 0 !important;}</style>");
		$("head").append("<style>.panel-carousel .slick-arrow.carousel-prev, .panel-player-carousel .slick-arrow.carousel-prev{left: 0rem !important;}</style>");
		$("head").append("<style>.panel-carousel .slick-arrow.carousel-next, .panel-player-carousel .slick-arrow.carousel-next{right: 0rem !important;}</style>");
		$("head").append("<style>html{overflow: visible !important;}</style>");
	}
});

integration.on('adServed', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 1000);
});