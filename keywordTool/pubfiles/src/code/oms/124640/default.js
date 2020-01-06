integration.meta = {
	"sectionID" : "124640",
	"siteName" : "G�ttinger Tageblatt",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '713825',
	"plr_UseCreativeSettings" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 978,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $(".pdb-navbar").height();
		if ($(".pdb-navbar").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".pdb-navbar");
			integration.base.setCfg({
			plr_AnchorParent : "#inskinanchor",
			plr_PageHeightAdjustment : -headHeight
			});
		}
		$("#inskinanchor").css({
			"top" : headHeight,
			"position" : "relative"
		});

		integration._addPixel();
		$("#seite").css({
			"margin" : "46px auto",
			"float" : "none"
		});
		$("#ismIMG").css({
			"height" : "1px"
		});
	}
});

integration.on("adServed", function(e) {
	$("#banner2").css({
		"left" : "1084px"
	});

});

integration.on('layoutChange', function(e) {
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	integration.custom.ismScroll();
	$(window).on("scroll", function() {
		integration.custom.ismScroll();
	});
});

integration.custom.ismScroll = function() {
	var position = $(document).scrollTop() + $(window).height();
	var cutoff = $(document).height() - integration.custom.FrameBottom;
	var usabillaBottom = 0
	if (position > cutoff) {
		usabillaBottom = integration.custom.FrameBottom
	}

	$(".usabilla_live_button_container").css({
		"bottom" : usabillaBottom
	});
};
