integration.meta = {
	'sectionID' : '128264',
	'siteName' : 'Limburger - Smartphone - ( NL )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '994948',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ServePassbackInIframe' : false
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
		integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
		var wwidth = $(window).width();
		var cwidth = wwidth - integration.custom.PageSkinRightPanel;
		var maxmenuwidth = cwidth - 30;
		var smartbanner = $("#smartbanner").height();
		var headerHeight = $(".site-header").height();
		var channelsHeight = $(".channel-selector").height();
		var headHeight = headerHeight + channelsHeight + smartbanner;
		var hHeight = headerHeight + channelsHeight;
		if ($("main").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("main");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight,
				plr_ScrollAdjustment : -48
			});
		}

		$("#inskinanchor").css({
			"top" : headHeight,
			"position" : "relative"
		});

		var stylesCSS = '<style type="text/css">';
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .site-header{position: fixed!important;}';
		stylesCSS += '.inskinLoaded.off-canvas-masked .off-canvas__content__mask{top: ' + headHeight + 'px; width:' + wwidth + 'px;}';
		stylesCSS += '.inskinLoaded main[role="main"]{margin-top: ' + hHeight + 'px;}';
		stylesCSS += '.inskinLoaded .cookie-banner, .inskinLoaded .social-sticky{width: ' + cwidth + 'px!important; z-index:4;}';
		stylesCSS += '.inskinLoaded .off-canvas__wrap{overflow: visible!important;}';
		stylesCSS += '.inskinLoaded{overflow: visible!important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);

		if ($(".social-sticky").length > 0) {
			var stylesCSS = '<style type="text/css">';
			stylesCSS += '.inskinLoaded main[role="main"]{margin-top: 48px;}';
			stylesCSS += '</style>'
			$('head').append(stylesCSS);
		}
	}
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
	$('#inskinanchor').remove();
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script type=\"text/javascript\">\n\n\n    document.write(\n'<scr' + 'ipt src=\"https://ad.360yield.com/default?li=287781&w=320&h=240&ic='\n+ (window.tokuslid_ic_320x240 || '') + '&sb='\n+ (window.tokuslid_sb_320x240 || '') + '&gd='\n+ (window.tokuslid_gd_320x240 || '') +  '\">'\n+ '</scr' + 'ipt>');\n\n\n<\\script>";
};
