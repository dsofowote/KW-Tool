integration.meta = {
	'sectionID': '124248',
	'siteName': 'Hello Magazine - Desktop - (INT)',
	'platform': 'desktop'
};

integration.testParams = {
	'desktop_resolution': [1540]
};

integration.params = {
	'mf_siteId': '681758',
	"plr_UseCreativeSettings": true,
	'plr_ContentW': 1280,
	"plr_ContentType": "PAGESKINEXPRESS",
	"plr_PageAlignment": "center",
	"plr_HideElementsByID": "mediaspace_wrapper, fixedTopBar, mainNav",
	"plr_HideElementsByClass": "advertising",
	"plr_StartScrollOnAnchor": true,
	"plr_ScrollAdjustment": 20,
	'plr_URLKeywords': 2,
	'plr_FastInit': true,
	"plr_ConsentTimeout": 3,
	'plr_PageScanExclude' : '#head, #secondaryBar, .mainMenu, #mainfooter, .side-bar-right, .OUTBRAIN, .news-by-tag, #ntvTextBox'
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		$("head").append("<style type='text/css'> body {padding-top: 62px!important;}</style>");
		$("head").append("<style type='text/css'> footer {width: 1280px !important; margin: 0 auto;}</style>");
		$("head").append("<style type='text/css'> #outer-wrap {margin-top: 10px!important;}</style>");
		//$("head").append("<style type='text/css'> .shareBar .news-share{width: 1280px; margin: 0 auto; left: 0; right: 0;}</style>");
		$("head").append("<style type='text/css'> .container.featured {max-width: 1280px;}</style>");

		("#all").css({
			"margin-top": "15px"
		});

		var headHeight = $("#topBar").height() + $("#secondaryBar").height();
		integration.base.setCfg({
			plr_ScrollAdjustment: headHeight
		});

		integration.custom.floatingButtons();
		$(window).resize(function () {
			integration.custom.floatingButtons();
		});

		if (integration.params.plr_CachedISAPResponse.PageSkinAd.settings.swFixedSides) {
			integration.base.setCfg({
				"plr_ScrollAdjustment": 0,
			});
		}

		$("head").append("<style>.gigya-screen-displayed #topBar, .gigya-screen-displayed #secondaryBar, .gigya-screen-displayed #head{z-index: 0 !important;}</style>");
	}
});

integration.on("layoutChange", function (e) {
	$(".openNav.fRight, .search, .users.fLeft").on("click", function () {
		setTimeout(function () {
			if ($("body").hasClass("menu-left-open") || $("body").hasClass("search")) {
				integration.base.hideAd();
				$('#topBar, #secondaryBar, #head').css({
					"z-index": "0"
				});
			}
		}, 100);
	});
	$(".main-Over, .closeNav.fRight, .fRight").on("click", function () {
		setTimeout(function () {
			if ($("body").hasClass("menu-left-open") || $("body").hasClass("search")) {} else {
				integration.base.showAd();
				$('#topBar, #secondaryBar').css({
					"z-index": "99999"
				});
				$("#head").css({
					"z-index": "100000"
				});
			}
		}, 100);
	});

	if ($("body").hasClass("home")) {} else {
		var topBarHeight = $("#topBar").height();
		var secondaryBarHeight = $("#secondaryBar").height();
		var bodyTop = topBarHeight + secondaryBarHeight;
		$("head").append("<style>body{padding-top : " + bodyTop + "px !important;}</style>");
	}
});

integration.on("adServed", function (e) {
	$('.ism-frame').parent().css({
		"z-index": "9999"
	});
	$('#topBar, #secondaryBar').css({
		"z-index": "99999"
	});
	$("#head").css({
		"z-index": "100000"
	});
	$('body').addClass("adskin");
});

integration.custom.floatingButtons = function () {
	var width = $(window).width();
	var sideWidth = (width - 1280) / 2;
	$(".back-top").css({
		"right": sideWidth + 20
	});
}


/* Passback Tag */
window.ISMPassback = function() {
    return "<script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'><\\script>\n<div id='gpt-passback'>\n  <script>\n     window.googletag = window.googletag || {cmd: []};\n       googletag.cmd.push(function() {\n         googletag\n           .defineSlot('/87824813/Hellomagazine/passback/inskin', [970, 250], 'gpt-passback')\n           .addService(googletag.pubads())\n           .setTargeting('position', 'megabanner')\n           .setTargeting('place', 'ATF')\n         googletag.pubads().set('page_url', 'www.hellomagazine.com');\n         googletag.enableServices();\n         googletag.display('gpt-passback');\n     });\n  <\\script>\n</div>";
};