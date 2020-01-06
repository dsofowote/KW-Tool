integration.meta = {
	'sectionID' : '128204',
	'siteName' : 'Time Out AU - Desktop - (AU)  ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '989602',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -22
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var width = $(window).width();
		var floatingWidth = width/5 + 30;
		$("head").append("<style>.newsletterWidget{right: "+ floatingWidth +"px !important;}</style>");
		$('#main-container, #content, .ad-header').css({
			"width" : "1100px",
			"margin" : "0 auto"
		});
		
		$("head").append('<style>.sticky-lg, .js-header-ad-wrapper > .sticky{left: 0 !important; right: 0 !important;}</style>');
		$("head").append('<style>.js-header-ad-wrapper > .sticky, div.container{width: 1100px !important; margin: 0 auto !important;}</style>');
	}

});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "9999"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var headerHeight = $('div.navigation-wrapper').height();
	if ($('div.navigation-wrapper').hasClass('sticky-lg')) {
		integration.base.setCfg({
			plr_ScrollAdjustment : headerHeight
		});
	} else {
		integration.base.setCfg({
			plr_ScrollAdjustment : 0
		});
	}
}