integration.meta = {
	'sectionID' : '126090',
	'siteName' : 'Entertainment Daily - Desktop',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.channelHome = ['/', 'news/', 'tv/', 'real-life/', 'style/', 'quizzes-polls/', 'video/'];

integration.testParams = {
	'desktop_resolution' : [1320]
};

integration.flaggedTests = [];

integration.params = {

  'mf_siteId': '681718',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1060,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	"plr_PageScanExclude" : ".sidebar, #ad-articlefooter, script"
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#header_wrapper, #header_ticker_wrapper").css({
			"max-width" : "1150px",
			"margin" : "0 auto"
		});
		$("#footer").css({
			"max-width" : "1150px",
			"margin" : "0 auto",
			"display" : "block"
		});
		$("body").css({
			"background" : "none"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type='text/javascript' src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/108455924/EDUK_SKIN1X1_PASSBACK_A', [1, 1]).display();\n<\\script>";
};
