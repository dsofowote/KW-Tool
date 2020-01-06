integration.meta = {
	'sectionID': '128917',
	'siteName': 'Ajax Showtime - Smartphone - ( NL )',
	'platform': 'smartphone'
};

integration.testParams = {
	'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '1042337',
	'plr_FluidAnchor': true,
	'plr_Fluid': true,
	'plr_Responsive': true,
	'plr_ShowCloseButton': true,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	'plr_ServePassbackInIframe': false,
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		integration.custom.PageSkinSidePanel = e.data.plr_FrameSideRight;
		var headerHeight = $(".large_menu").height() + $(".small_menu").height() + $("body > header").height();
		if ($(".large_menu").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
				plr_AnchorParent: "#inskinanchor",
				plr_ScrollAdjustment: -headerHeight,
				plr_PageHeightAdjustment: -headerHeight
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .leaderboard_ad, .inskinLoaded .ablo{width: calc(100% + ' + integration.custom.PageSkinSidePanel + 'px) !important;}';
		stylesCSS += '.inskinLoaded header{width: calc(100% + ' + (integration.custom.PageSkinSidePanel - 30) + 'px) !important;}';
		stylesCSS += '.inskinLoaded #fingerprint{right: ' + integration.custom.PageSkinSidePanel + 'px !important;}';
		stylesCSS += '.inskinLoaded .submenus2{width: 100% !important; position: absolute; z-index: 99;}';
		stylesCSS += '.inskinLoaded .search{width: calc(100% + ' + (integration.custom.PageSkinSidePanel - 15) + 'px) !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}

	if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
		integration.base.setCfg({
			'plr_FixedTop': true,
			'plr_EnableSwipe': true
		});
	}
});

integration.on('adClose', function (e) {
	$('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function () {
	return "<script id=\'inskinPB\'>\r\n\t\tvar pbiframe = window.frameElement;\r\n\t\tpbiframe.style.height = 0;\r\n\t<\/script>"
	//return "<script type=\"text/javascript\">\ndocument.write(\n'<scr' + 'ipt src=\"https://ad.360yield.com/default?li=304025&inskin=1&w=320&h=240&ic='\n+ (window.parent.tokuslid_ic_320x240 || '') + '&sb='\n+ (window.parent.tokuslid_sb_320x240 || '') + '&gd='\n+ (window.parent.tokuslid_gd_320x240 || '') +  '\">'\n+ '</scr' + 'ipt>');\n<\\script>";
};