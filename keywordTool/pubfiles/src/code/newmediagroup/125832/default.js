integration.meta = {
	'sectionID' : '125832',
	'siteName' : 'WeekendHK - Smartphone - (HK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706392',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -115
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded {padding: 0 74px 0 0 !important;}';
		stylesCSS += '.inskinLoaded #page{overflow: visible !important;}';
		stylesCSS += '.inskinLoaded .header{display: none !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 100);
});

integration.on('adServed', function(e) {
	var headerHeight = $('.post-header').height();
	$('.ism-frame').parent().css({
		"margin-top" : headerHeight,
		"z-index" : "999"
	});
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 100);
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .footer_fixed{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important; z-index: 99 !important;}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
});
