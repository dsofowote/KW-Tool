integration.meta = {
	"sectionID" : "125275",
	"siteName" : "4OD Publisher bookings",
	"publisher" : "channel4"
};

integration.testParams = {
	"desktop_resolution" : [ 1260 ]
};

integration.params = {
	"srv_SectionID" : "125275",
	'mf_siteId' : '707261',
	"plr_SideScroll" : false,
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentW" : 1160,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_FrameTop" : 90,
	"plr_FrameSide" : 130,
	"plr_FrameBottom" : 90,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByClass" : "flashEnabled",
	"plr_HideElementsByID" : "c4ad-Top,c4ad-Middle1"
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#app > div, #app, body").addClass("ism");
		$("head").append("<style type=\"text/css\">#app div.ism, #app.ism, body.ism{height: auto !important;}</style>");
	}
});

integration.on("adServed", function(e) {
	$("body").css({
		"overflow" : "visible"
	});
	$('.ism-frame-inner > a').css({
		'background-color' : 'transparent'
	});
	$('.ism-frame').css({
		'z-index' : '1001'
	});
	$('.page-bgLink').removeAttr('href');
	$('.bg-editorialPageSkin').css({
		'margin-top' : '0'
	});
	$(".class, .app").css({
		"height" : "auto"
	});
	$(".leaderboardAdvert").css({
		"min-height" : "0"
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.browserSize();
	$(window).on("resize", function() {
		integration.custom.browserSize();
	});
	$(".nav__list__item").on("click", function() {
		setTimeout(function() {
			if ($(".nav__list__item--searchMenu").hasClass("nav__list__item--open")) {
				$("#app, body").removeClass("ism");
			} else {
				$("#app, body").addClass("ism");
			}
		}, 10);
	});
});

integration.custom.browserSize = function() {
	var windowWidth = $(window).width();
	if (windowWidth < 1420) {
		integration.base.unloadAd();
	}
}
