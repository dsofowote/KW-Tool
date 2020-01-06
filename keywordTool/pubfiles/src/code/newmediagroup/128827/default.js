integration.meta = {
	'sectionID' : '128827',
	'siteName' : 'King Of Capture - Smartphone - (HK) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1036003',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("header .header_bg").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header .header_bg");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var hHeight = $('.post-header').height();
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #page{overflow: visible !important;}';
		stylesCSS += '.inskinLoaded{padding: 0px 74px 0px 0px !important;}';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded #page .container{padding-left: 0.71429rem !important;} .gpt_ads_box{margin-left: -10px !important;}}';
		stylesCSS += '.inskinLoaded .footer_fixed{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}

	if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
		integration.base.setCfg({
			'plr_FixedTop' : true,
			'plr_EnableSwipe' : true
		});
	}
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().addClass("inskinanchor");
});

