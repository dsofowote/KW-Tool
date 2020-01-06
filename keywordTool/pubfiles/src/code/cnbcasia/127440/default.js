integration.meta = {
	'sectionID' : '127440',
	'siteName' : 'CNBC - (PUBLISHER BOOKING) - Desktop - (ASIA)',
	'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '721526',
	'plr_PageAlignment' : 'center',
	'plr_ContentW': 1295,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -50
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
