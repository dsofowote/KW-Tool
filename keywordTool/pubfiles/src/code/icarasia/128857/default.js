integration.meta = {
    'sectionID' : '128857',
    'siteName' : 'CarList MY - Desktop - ( MY )',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1037837',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1120,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var hHeight = $('nav.header').height();
		$("body").addClass('inskinLoaded');
		$('.inskinLoaded, .body__header--sticky-top .header, .editors-pick--sticky, .element-sticky-bottom').css({
			"max-width" : "1120px",
			"margin" : "0 auto",
			'left' : 0,
			'right' : 0
		});
		if ($('.header').css("position") === "fixed") {
			$('main').css({
				"margin-top" : hHeight
			});
		} else if ($('.header').css("position") === "relative") {
			$('main').css({
				"margin-top" : 0
			});
		}
		$("head").append("<style>body.inskinLoaded{padding-top: 0 !important;}</style>");
		$("head").append("<style> #sticky-slide-1:checked ~ .sticky-control-2, #sticky-slide-2:checked ~ .sticky-control-3, #featured-slide-1:checked ~ .slide-control-2{right: -20px !important;}</style>");
		$("head").append("<style> .editors-pick--pagination:hover #featured-slide-2:checked ~ .slide-control-1, .editors-pick--sticky:hover #sticky-slide-2:checked ~ .sticky-control-1, .editors-pick--sticky:hover #sticky-slide-3:checked ~ .sticky-control-2{left: -20px !important;}</style>");
	}
});

integration.on("adServed", function(e) {
	//Move the chat-up box inside the content
	var myMarginRight = parseInt($("body").css("marginRight"));
	$("head").append("<style>.intercom-borderless-frame, #intercom-container .intercom-messenger-frame, #intercom-container .intercom-launcher-frame, #intercom-container .intercom-launcher-discovery-frame{right: " + (myMarginRight + 10) + "px !important;} </style>");
	//Move scroll-to-top button inside the content
	var myMarginLeft = parseInt($("body").css("marginLeft"));
	$("head").append("<style>.scroll-to-top__icon{left: " + (myMarginLeft + 10) + "px !important;}</style>");
	$(".ism-frame").parent().css({
		"z-index" : "9999"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel && $('.header').css("position") === "fixed") {
		$('.js-header--sticky-top').css({
			"top" : integration.custom.PageSkinTopPanel
		});
	} else if (height > integration.custom.PageSkinTopPanel && $('.header').css("position") === "fixed") {
		$('.js-header--sticky-top').css({
			"top" : 0
		});
	}
}
