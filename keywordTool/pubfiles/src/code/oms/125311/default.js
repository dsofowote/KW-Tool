integration.meta = {
	"sectionID" : "125311",
	"siteName" : "Hurriyet",
	"publisher" : "oms",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706418',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 960,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			$("header, .hurMainPage, .footer.clr, body > .hurContainer").css({
				"margin-left" : "0px",
				"max-width" : "960px"
			});
			integration.custom.PageSkinEdgeTrue = 1;
		} else {
			$("header, .footer.clr").css({
				"margin" : "0 auto",
				"max-width" : "960px"
			});
			$(".hurBox.AvrAllBox.clr").css({
				"clear" : "both"
			});
			integration.custom.PageSkinEdgeTrue = 0;
		}
		$("head").append('<style> .subMenu.js-toggle {max-width : 960px; margin-left : -480px; left : 50%; } .InSkinNav.fixed-top.socialMenu {position: static; box-shadow: 0px;}</style>');
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinLeftPanel = e.data.plr_FrameSide;
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel + 80) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$('.socialMenu').addClass('InSkinNav');
		$('.socialMenu').css({
			'max-width' : "960px",
			"margin-left" : "0px",
			"left" : "0%"
		});
	} else {
		var width = $(window).width();
		$('.socialMenu').removeClass('InSkinNav');
		if (integration.custom.PageSkinEdgeTrue == 1) {
			$('.socialMenu').css({
				'max-width' : "960px",
				"margin-left" : integration.custom.PageSkinLeftPanel
			});
		} else {
			$('.socialMenu').css({
				'max-width' : "960px",
				"margin-left" : "-480px",
				"left" : "50%"
			});
		}
	}
}; 