integration.meta = {
	"sectionID" : "124586",
	"siteName" : "ETNet",
	"publisher" : "etnet",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1250]
};

integration.params = {
	'mf_siteId' : '707376',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 990,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "DivTopBanner"
};

integration.on("layoutChange", function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	$("body").addClass("inskinLoaded");
	integration.base.setCfg({
		"plr_PageHeightAdjustment": 0
	});

	$("#FooterDisclaimer").css({
		"padding" : "0 20px"
	});

	$('#Sitemap').css({
		'top' : (integration.custom.FrameTop + 35) + 'px'
	});

	$("#ProductContainer, #MemContainer, #PopSetting").css({
		"top" : (integration.custom.FrameTop + 104) + 'px'
	});

	$("#TopBannerNew").css({
		"display" : "none"
	});

	$("header, footer, #ChannelMenuContainer, #Sitemap").css({
		"max-width" : "990px",
		"margin" : "0 auto",
		"left" : "0",
		"right" : "0"
	});

	$("head").append("<style>header{margin-top:0px !important}</style>");
	$("head").append("<style>.inskinLoaded #ChannelMenuContainer.fixed{top:0px !important}</style>");
});
