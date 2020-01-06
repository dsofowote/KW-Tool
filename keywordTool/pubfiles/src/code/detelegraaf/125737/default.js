integration.meta = {
	'sectionID' : '125737',
	'siteName' : 'DeTelegraaf - Desktop - (NL BE CH FR)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707729',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1294,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : 'banner, addiv, bannercenter',
	'plr_SideScroll' : false,
	'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".HeaderBlock__body").length == 1) {
		  $("<div id='inskinanchor'></div>").insertAfter(".HeaderBlock__body");
		  integration.base.setCfg({
			plr_AnchorParent: "#inskinanchor"
		  });
		}
		$(".SectionSubheader__contentWrapper").css({"margin": "0 auto", "max-width": "1290px"});
		$(".SectionPage__bannerWrapper--position-0").css({"display": "none"});



		integration.custom.ismScroll();
		$(window).on("scroll", function() {
			integration.custom.ismScroll();
		});

		$("#wrapper").css({
			"margin-top" : "10px"
		});
		$('#adbar_top').css({
			'display' : 'none'
		});
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$("footer, section.top-margin-6.bottom-margin-6.block.clear-float.bg-gray6").css({
			"max-width" : "1294px",
			"margin" : "auto"
		});
		$(".article-page-breadcrumbs").parent().css({
			"margin" : "auto",
			"max-width" : "1294px"
		});
		$(".__header-headroom, .width-max-header").css({
			"max-width" : "1554px" // content width + Pageskin side panels
		});

		$("head").append("<style>div[data-element='SectionSubHeader']{max-width: 1554px !important; margin: auto;}</style>");
		//$("head").append("<style>.usabilla_live_button_container{right: 0px !important}</style>");

		$(".min-height-banner").css({
			"display" : "none"
		});
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch(e) {
			};
		};
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	if ($(document).height() < 1500) {
	} else {
		var contentH = 1500 - integration.custom.FrameTop;
		integration.base.setCfg({
			'plr_ContentH' : contentH
		});
	}
});

integration.custom.ismScroll = function() {
	$(".headroom-wrapper").css({
		"height" : "initial"
	});
}

