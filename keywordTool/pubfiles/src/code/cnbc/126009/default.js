integration.meta = {
    'sectionID' : '126009',
    'siteName' : 'CNBC - Desktop - ( INT exc. ASIA AU UK )',
    'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [integration.custom.res]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706469',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1295,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	'plr_FastInit' : true
};

var headHeight;

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
			$("#MainContent, .Footer-container, .FeaturedBreaker-slideContainer").css({"margin": "0 auto", "max-width": "1290px"});
			$(".Footer-gridContainer").css({"padding": "0 10px"});
			$("#standalone-header").parent().css({"top": "0", "position": "absolute"});
			$(".TopBanner-container, #dart_wrapper_topbanner").css({"display": "none"});
    }
});

integration.on('adServed', function(e) {
	var headHeight = $(".GlobalNavigation-container").outerHeight();
	$('head').append('<style type="text/css">.ism-anchor {margin-top : '+headHeight+'px !important;}</style>');
	$(document).scroll(function() {
		var headHeight = $(".GlobalNavigation-container").outerHeight();
		$('head').append('<style type="text/css">.ism-anchor {margin-top : '+headHeight+'px !important;}</style>');
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- PassBack AdSlot 1 for Ad Unit 'nbcu.cnbc' ### Size: [[970,250]] --><script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/2620/nbcu.cnbc', [[970,250]]).display();\n<\\script><!-- End -->";
};