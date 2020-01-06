integration.meta = {
	'sectionID' : '128075',
	'siteName' : 'Hello Magazine - Desktop - (AU)  ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1540]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '973715',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1280,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	"plr_HideElementsByID" : "mediaspace_wrapper, fixedTopBar, mainNav",
	"plr_HideElementsByClass" : "advertising",
	"plr_StartScrollOnAnchor" : true,
	"plr_ScrollAdjustment" : 105,
	'plr_URLKeywords' : 2,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$("head").append("<style type='text/css'> body {padding-top: 62px!important;}</style>");
		$("head").append("<style type='text/css'> footer {width: 1280px !important; margin: 0 auto;}</style>");
		$("head").append("<style type='text/css'> #outer-wrap {margin-top: 10px!important;}</style>");
		$("head").append("<style type='text/css'> .shareBar .news-share{width: 1280px; margin: 0 auto; left: 0; right: 0;}</style>");
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.on("adServed", function(e) {
	$('.ism-frame').parent().css({
		"z-index" : "9999"
	});
	$('#topBar, #secondaryBar').css({
		"z-index" : "99999"
	});
	$('body').addClass("adskin");
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width > 1297 || integration.custom.isSuper) {
		var sideWidth = (width - 1280) / 2;
		$(".back-top").css({
			"right" : sideWidth + 20
		});
	} else {
		$(".back-top").css({
			"right" : "10px"
		});
	}
}

