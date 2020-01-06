integration.meta = {
	'sectionID' : '128455',
	'siteName' : 'Mthai - Smartphone - ( TH )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1015205',
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
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		var mpuMargin = $(".columns").css("padding-left");
		var mpuMargin2 = $("#primary").css("padding-left");
		var mpuMargin3 = $("#secondary").css("padding-left");
		stylesCSS += '.inskinLoaded div[id^="MT_HP"]{margin-left: -' + mpuMargin + ';}';
		stylesCSS += '.inskinLoaded div[id^="dfp-inbetween"]{margin-left: -' + mpuMargin2 + ';}';
		stylesCSS += '.inskinLoaded div[id^="google_ads_iframe"]{margin-left: -' + mpuMargin3 + ';}';
		stylesCSS += '.inskinLoaded #responsive-menu{z-index: 10;}';
		stylesCSS += '.inskinLoaded {}';
		stylesCSS += '.inskinLoaded {}';
		stylesCSS += '.inskinLoaded {}';
		stylesCSS += '.inskinLoaded {}';
		stylesCSS += '.inskinLoaded {}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);

		var headHeight = $('#responsive-menu').height();
		integration.base.setCfg({
			plr_PageHeightAdjustment : -headHeight,
			plr_ScrollAdjustment : headHeight
		});
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

