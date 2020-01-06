integration.meta = {
	'sectionID' : '127718',
	'siteName' : 'Mac World - Desktop - (US)   ',
	'platform' : 'desktop'
};

integration.testParams = {
	"desktop_resolution" : [1360]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '857126',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(window).scroll(function() {
			$("#sidebarHolder.fixedSide").css({
				"width" : "332px"
			});
		});
	}
});

integration.on("layoutChange", function(e) {
	inSkinHeaderHeight = e.data.plr_FrameTop;
	try {
		window.mwInskinActiveCall(inSkinHeaderHeight);
	} catch (e) {
	}
});
/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/4082\"><\\script>";
};
