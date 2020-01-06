integration.meta = {
    'sectionID' : '130043',
    'siteName' : 'Motor1 - Desktop - (IT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1284]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1101505',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
        var headerHeight = $(".m1-header-main").outerHeight();
		if ($(".m1-header-main").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".m1-header-main");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
			});
		}
		$(".top-banner-placeholder").hide();
        $('head').append('<style type="text/css">[id^="page_index_"] {margin: 0 auto !important}</style>');
        $('head').append('<style type="text/css">.ism-anchor {top: '+headerHeight+'px; z-index: 5}</style>');
        $('head').append('<style type="text/css">.m1-top-slider-wrapper {padding-top: '+headerHeight+'px}</style>');
        $(".m1-header-ad, #page_skin_top").css({"display": "none"});

		$("head").append("<style id='ismResize'></style>");
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.ismResize();
	$(window).on("resize", function() {
		integration.custom.ismResize();
	});
});

integration.custom.ismResize = function() {
	var shareBoxLeft = ($(window).width() - 1024) / 2;
	$("#ismResize").html("#floating_share_box{left: " + shareBoxLeft + "px !important;}");
}


