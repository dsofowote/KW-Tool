integration.meta = {
    'sectionID' : '129307',
    'siteName' : 'Spox - Smartphone - (DE)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1072218',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};


integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#spxmxheader").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#spxmxheader");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -53
			})
		}
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '#div-gpt-ad-interstitial{display: none !important;}';
		stylesCSS += '.inskinLoaded .social.bottom > a > span, .inskinLoaded .social.bottom > div{margin: 0 0.3%;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	$("head").append("<style>.inskinLoaded .lsearch{margin-top: " + (0 - integration.custom.FrameTop) + "px;}</style>");
	integration.custom.socialbtnResize();
	$(window).on("resize", function() {
		integration.custom.socialbtnResize();
	});
});

integration.custom.socialbtnResize = function() {
	if ($(window).width() < 395) {
		$("head").append("<style>.inskinLoaded .aut{margin-top: 38px;}</style>");
		$("head").append("<style id='ismSocialBar'>.inskinLoaded .social.top{top: -20px;}</style>");
	} else {
		$("head").append("<style>.inskinLoaded .aut{margin-top: initial;}</style>");
		$("#ismSocialBar").remove();
	}
}

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});
