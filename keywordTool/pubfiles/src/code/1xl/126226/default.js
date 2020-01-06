integration.meta = {
	'sectionID' : '126226',
	'siteName' : 'Iconic News - Desktop - (IE)',

	'platform' : 'desktop',
	'restrictions' : ''
};





integration.testParams = {
	'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706930',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1170,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		$(".cookieOptIn, .header, .main-content, .footer, div.container-fluid").css({
			"max-width" : "1170px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$(".footer").css({
			"padding-bottom" : "0"
		});
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$(".cookieOptIn").css({
			"margin-top" : newheight
		});
	} else {
		$(".cookieOptIn").css({
			"margin-top" : "0px"
		});
	}
};

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"//uk.ads.justpremium.com/adserve/js.php?zone=66678\"><\\script>";
};
