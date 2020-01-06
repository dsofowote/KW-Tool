integration.meta = {
	"sectionID" : "124740",
	"siteName" : "Honest John",
	"publisher" : "honestjohn",
	"platform" : "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1262]
};

integration.params = {
	'mf_siteId' : '706257',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1002,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_PageScanExclude' : ' #main-nav, .links, #rightContent '
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script>\nwindow.top.postMessage({action:'passback',keyword:'inskin_passback'}, '*');\n<\\script>";
};
