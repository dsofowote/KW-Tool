integration.meta = {
	'sectionID' : '128198',
	'siteName' : 'CNG (RON) - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '988538',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var navh = $('.slicknav_menu').outerHeight();
		if ($(".slicknav_menu").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#cn-wrapper");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -navh,
			});
		}

		$("#inskinanchor").css({
			"top" : navh,
			"position" : "relative"
		});

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .slicknav_menu{border-bottom:none; z-index:9003;}';
		stylesCSS += '.inskinLoaded #div-gpt-ad-mpu1, .inskinLoaded #div-gpt-ad-mpu2, .inskinLoaded #div-gpt-ad-mpu3, .inskinLoaded #div-gpt-ad-mpu4, .inskinLoaded #div-gpt-ad-mpu5 {margin-left: -20px; margin-right: -20px;}';
		stylesCSS += '.inskinLoaded .cnAdzerkDiv {margin-left: -20px !important; margin-right: -20px !important;}';
		stylesCSS += '.inskinLoaded #cn-wrapper {padding-left: 0px; padding-right: 0px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
	var ww = $(window).width();
	var portletw = ww - integration.custom.PageSkinRightPanel - 30;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .cc_banner.cc_container.cc_container--open {width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px);}';
	stylesCSS += '.inskinLoaded .owl-wrapper-outer {width: ' + portletw + 'px; margin-left: -15px; margin-right: -15px;}';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);

	if ($(window).width() < 405) {
		var ww = $(window).width();
		var portletw = ww - integration.custom.PageSkinRightPanel - 10;
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #cn-wrapper {width: 100%;}';
		stylesCSS += '.inskinLoaded .owl-wrapper-outer {width: ' + portletw + 'px; margin-left: -15px; margin-right: -15px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "9002"
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$('#inskinanchor').remove();
});

