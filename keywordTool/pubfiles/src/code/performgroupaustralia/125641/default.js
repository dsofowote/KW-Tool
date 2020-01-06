integration.meta = {
	'sectionID' : '125641',
	'siteName' : 'V8 Supercars - Desktop - (AU)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1520]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '706660',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1260,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_StartScrollOnAnchor" : true
};

integration.on('adCallResult', function(e) {
	$("#page, .stickyheader").css({
		"max-width" : "1260px",
		"margin" : "0 auto"
	});
	$("head").append("<style>.adupperhead{display: none !important;} .breadcrubs-list{padding-left: 15px;}</style>");
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/67970281/display_thirdparty_au/supercars_responsive', [728, 90]).setTargeting('Display_Passback', ['InSkin']).display();\n<\\script>";
};
