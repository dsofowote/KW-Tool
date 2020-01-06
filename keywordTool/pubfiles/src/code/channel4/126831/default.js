integration.meta = {
   'sectionID' : '126831',
   'siteName' : ' UKTV - (Publisher Bookings) - Desktop - (UK',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '707667',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#site-footer").css({
			"max-width" : "1000px",
			"margin" : "0 auto",
			"position" : "fixed"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinBotPanel = e.data.plr_FrameBottom;
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	var bottomFrame = integration.custom.PageSkinBotPanel;
	if (winheight + scrolltop < docheight - bottomFrame) {
		$("#site-footer").css({
			"position" : "fixed",
			/* for IE */
			"left" : "none",
			"right" : "none",
			"width" : "1000px"
		});
	} else {
		$("#site-footer").css({
			"position" : "relative",
			"margin-top" : "-43px"
		});
	}
}