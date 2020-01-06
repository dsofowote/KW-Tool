integration.meta = {
   'sectionID' : '125824',
   'siteName' : 'PC Advisor - Desktop - (INT ex UK)',
   'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '723277',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentW" : 1100,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_FastInit" : true,
	"plr_HideElementsByClass" : "",
	"plr_ConsentTimeout" : 3
};

integration.on("adServed", function(e) {
	$("#wrapper").css({
		"padding-top" : "40px"
	});
	$("#subHeader").css({
		"position" : "relative",
		"top" : "0px"
	});
	$("#topNav, #subHeader").css({
		"max-width" : "1100px",
		"left" : "0",
		"right" : "0",
		"margin-right" : "auto",
		"margin-left" : "auto"
	});
	$("#siteFooter").css({
		"max-width" : "1100px",
		"margin" : "0 auto"
	});
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
		$("#topNav").css({
			"top" : newheight
		});
	} else {
		$("#topNav").css({
			"margin-top" : "0px",
			"top" : "0px"
		});
	}
}
/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/22310\"><\\script>";
};
