integration.meta = {
	"sectionID" : "125025",
	"siteName" : "Bikeradar",
	"publisher" : "immediatemedia",
	"platform" : "desktop"
};

integration.testParams = {
    'desktop_resolution' : [1240]
};

integration.params = {
	'mf_siteId' : '681760',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 980,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "top-banner",
	"plr_HideElementsByClass" : "mpu, intext-safe, global-header",
	"plr_URLKeywords" : 1
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('ad-inskin-active');
		$("head").append("<style>.global-banner{display: none !important;} .global-header{margin-top: 0 !important;}</style>");
		$("head").append("<style>.bottom-navbar-wrap.fixedNav{width: 1000px; margin: 0 auto; left: 0; right: 0;}</style>");

	}
});
integration.on("adServed", function(e) {
	/* Publisher's ad-served tracking pixel */
	$('.global-header, #page-canvas, #site-footer').css({
		'max-width' : '1000px',
		'width' : '100%',
		'margin' : '0 auto'
	});
	$('.footer-image').css({
		'left' : '-100px'
	});
	$('.ism-frame').parent().css({
		'z-index' : '10000'
	});
	$('body').css({
		'overflow-x' : 'auto'
	});
	$('head').append('<style>.InSkinBrowser tr:nth-of-type(odd){background:transparent !important}</style>');
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type='text/javascript' src='https://www.googletagservices.com/tag/js/gpt.js'>\n\ngoogletag.pubads().addEventListener('slotRenderEnded', function(event) {\n \n console.log(event);\n \nvar h = event.size[0];\nif(w==728)\n{\nself.frameElement.style.setProperty (\"width\", '728px');\nself.frameElement.style.setProperty (\"height\",'90px');\n}\n \n});\n googletag.pubads().definePassback('176986657/tracking.immediate.co.uk/bikeradar-passback', [[970,250],[728,90]]).setTargeting('thirdparty',['inskin']).display();\n<\\script>";
};
