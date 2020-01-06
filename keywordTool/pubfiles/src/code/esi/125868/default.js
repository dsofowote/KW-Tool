integration.meta = {
	"sectionID" : "125868",
	"siteName" : "The Independent - Desktop - US",
	"publisher" : "independent",
	"platform" : "desktop"
};

integration.telemetry.setup({ 
	'keywords': true,
	'url': true,
	'ad-served': true,
	'base-ready': true,
	'ad-call-response': true,
	'ad-call': true,
	'failed-test': true,
	'impression': true,
	'custom': true
});

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.params = {
	'mf_siteId' : '706506',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_URLKeywords': 2,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adServed', function(e) {
	$('body').addClass('wrapped_by_ads');
	$("#mastfooter").css({
		"max-width" : "1000px",
		"margin" : "0 auto"
	});
	if ($("body > header").length == 1) {
		$("<div id='inskinanchor'></div>").insertAfter("body > header");
		integration.base.setCfg({
			plr_AnchorParent : "#inskinanchor"
		});
	} else {
		integration.base.setCfg({
			plr_AnchorParent : "#content"
		});
	}
	try {
		if ( typeof window.grid != 'undefined') {
			window.grid.recalculate();
		}
	} catch(e) {
	}
});