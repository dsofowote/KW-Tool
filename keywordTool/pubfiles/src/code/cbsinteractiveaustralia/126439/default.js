integration.meta = {
	'sectionID' : '126439',
	'siteName' : 'TV.com - Desktop - (AU)',
	'platform' : 'desktop'
};

integration.flaggedTests = [];

integration.testParams = {
	'desktop_resolution' : [1246]
};

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '706968',
	"plr_ClickURL" : "",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 986,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_HideElementsByClass" : "ad, mpu_placeholder, bottom_leader",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		// your code here
		if ($("._bento").length) {
			integration.base.setCfg({
				'plr_ContentW' : 986
			});
			$('#header_bar, .tv_footer, .bottom_leader, .m.header').css({
				'width' : '986px',
				'margin' : '0 auto'
			});
			$("body").css({
				"padding-top" : "50px"
			});
			$(".m.tv_header_spacer").css({
				"height" : "0px"
			});
		} else {
			$('#header_bar, .tv_footer, .bottom_leader, .m.header').css({
				'width' : '1170px',
				'margin' : '0 auto'
			});
			$("body").css({
				"padding-top" : "50px"
			});
			$(".m.tv_header_spacer").css({
				"height" : "0px"
			});
		};
	}
});
