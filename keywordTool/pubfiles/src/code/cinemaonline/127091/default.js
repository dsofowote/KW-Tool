integration.meta = {
	'sectionID' : '127091',
	'siteName' : 'Cinema Online - Mobile - (MY)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707550',
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

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var wwidth = $(window).width();
	var widthcalc = wwidth - integration.custom.FrameSideRight + 56;
	$("body").addClass("inskinLoaded");
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded #navbar{width: 100%;} .inskinLoaded .RightBoxWrap{right: ' + integration.custom.FrameSideRight + 'px!important;} .inskinLoaded .MainMenuNav ul{padding: 10px 80px;}';
	stylesCSS += '</style>';
	stylesCSS += '<style type="text/css" id="inskinEventStyles2"> .inskinLoaded #sec_high_slider > div.owl-wrapper-outer.autoHeight > div > div.owl-item {width: ' + widthcalc + 'px !important; padding-right: ' + integration.custom.FrameSideRight + 'px;} </style>';
	$('head').append(stylesCSS);

	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var wwidth = $(window).width();
	var widthcalc = (wwidth - integration.custom.FrameSideRight - 18);
	integration.custom.cssStringII = ".inskinLoaded #sec_high_slider > div.owl-wrapper-outer.autoHeight > div > div.owl-item {width: " + widthcalc + "px !important; padding-right: 0;}";
	document.getElementById('inskinEventStyles2').innerHTML = integration.custom.cssStringII;
}

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #header{padding: 10px 8px 0px;} .inskinLoaded .sec_header{margin-top: 18px;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
		$('head').append('<style type="text/css">[id*="easyXDM"] {max-width: none !important;}</style>');
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

