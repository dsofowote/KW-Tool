integration.meta = {
	"sectionID" : "125112",
	"siteName" : "Aachener Nachrichten",
	"publisher" : "oms",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707375',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 960,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_FastInit": true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('#login_bar').css({
			'left' : '100px'
		});
		$('#login-bar-toggle').css({
			'margin-left' : '100px'
		});
	}
});

integration.on("layoutChange", function(e) {
	var PageSkinLeftPanel = e.data.plr_FrameSide;
	$('.ism-frame').css({
		'z-index' : '600'
	});
	$('#login_bar').css({
		'left' : PageSkinLeftPanel
	});
	$('#login-bar-toggle').css({
		'margin-left' : PageSkinLeftPanel
	});
});
