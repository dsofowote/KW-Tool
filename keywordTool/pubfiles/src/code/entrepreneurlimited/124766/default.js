integration.meta = {
	'sectionID' : '124766',
	'siteName' : 'Here is the City - Desktop - ( HK SG UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	"desktop_resolution" : [1460]
};

integration.async = false;

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '681790',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true,
	'plr_URLKeywords' : 2,
	'plr_ServePassbackInIframe' : false
}

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameTop = e.data.plr_FrameTop;
		var headerHeight = $('#s-head').height();
		var leaderboardHeight = $('#ss-wrapper').height();
		var totalSubtHeight = integration.custom.FrameTop + headerHeight;
		var totalHeight = totalSubtHeight + leaderboardHeight;
		$('#s-head').css({
			//"top" : integration.custom.FrameTop
		});
		$("head").append("<style>#ss-wrapper{top:0px !important;position:relative !important}</style>");
		$('#ss-wrapper').css({
			"margin" : "0 auto",
			"width" : "1200px",
			"right" : "0",
			"left" : "0",
			"position" : "relative"
		});
		$('#container').css({
			"margin" : "0 auto",
			"width" : "1200px"
		});

		$("#main").css({
			"padding-top" : "0px"
		});
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	//integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		//integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$("#s-head").css({
			"top" : newheight
		});
	} else {
		$("#s-head").css({
			"top" : "0px"
		});
	}
}
/* Passback Tag */
window.ISMPassback = function() {
	return "<script>\nif (typeof parent.postMessage != 'undefined') { parent.postMessage(\"grvPassback\",\"*\"); }\n<\\script>";
};
