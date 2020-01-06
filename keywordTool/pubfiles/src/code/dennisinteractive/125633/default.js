integration.meta = {
   'sectionID' : '125633',
   'siteName' : 'Expert Reviews - Desktop - (INT)',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [1480]
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '707517',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1220,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_URLKeywords' : 2
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#page").css({
			"max-width" : "1220px",
			"margin" : "0 auto",
			"overflow" : "hidden",
			"padding" : "0"
		});
		$("head").append("<style>#feedbackify, #feedbackify .fby-screen{z-index: 50 !important;}</style>");
		$("#header-group").css({
			"z-index" : "150"
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
}); 

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\">\nvar ayads_impressioncount='%%CACHEBUSTER%%';\n<\\script><script type=\"text/javascript\" src=\"http://ads.ayads.co/ajs.php?zid=3542\"><\\script>";
};