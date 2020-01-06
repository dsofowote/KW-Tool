integration.meta = {
    'sectionID' : '128603',
    'siteName' : 'Viu - (Publisher Booking) - Desktop - ( HK PH SG TH )',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1025513',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1340,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".v-topnav").css({
			"z-index" : "1000"
		});
	}
});

integration.on('adServed', function(e) {
	var navHeight = $(".v-topnav").height();
	$(".v-topnav").parent().css({
		"margin-top" : navHeight
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.ismNavScroll();
	$(window).on("scroll", function() {
		integration.custom.ismNavScroll();
	});
});

integration.custom.ismNavScroll = function() {
	var scrollTop = $(document).scrollTop();
	var navTop = integration.custom.FrameTop - scrollTop;
	if (scrollTop > integration.custom.FrameTop) {
		navTop = 0;
	}
	$(".v-topnav").css({
		"top" : navTop
	});
}
