integration.meta = {
	'sectionID' : '124997',
	'siteName' : 'Top Gear',
	
	'platform' : 'desktop',
	'restrictions' : ''
};




integration.testParams = {
	'desktop_resolution' : [1580]
};

integration.flaggedTests = [];

integration.params = {
	
   'mf_siteId': '681730',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1320,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('ad-inskin-active');
		$("header, footer, .l-before-footer").css({
			"max-width" : "1320px",
			"margin" : "0 auto"
		});
		$("head").append("<style>.is-fixed .header__inner{max-width:1320px; width:100%; margin: 0 auto;}</style>")
		$("#block-ad-manager-top-slot").hide();
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
	$(window).resize(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$(".header__inner").css({
			"top" : "0",
			"position" : "relative"
		});
	} else {
		$(".header__inner").css({
			"margin-top" : "0px",
			"top" : "0px",
			"position" : "fixed"
		});
	}
}

/* Passback Tag */
window.ISMPassback = function() {
   return "<!-- PassBack for InSkin - 'tracking.immediate.co.uk/topgear-passback' ### Size: [[728,90]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\n\n  googletag.pubads().definePassback('/176986657/tracking.immediate.co.uk/topgear-passback', [[728,90]])\n                    .setTargeting('pos', ['%%PATTERN:pos%%'])\n                    .setTargeting('thirdparty', ['inskin'])\n                    .display();\n<\\script>\n<!-- End -->";
};