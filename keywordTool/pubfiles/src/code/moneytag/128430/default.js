integration.meta = {
	'sectionID' : '128430',
	'siteName' : 'Premiere - Smartphone - (FR)  ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1012570',
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
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

		var windowWidth = $(window).width();
		var contentWidth = windowWidth - integration.custom.FrameSideRight;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .widget-related img{margin-left:-20px}';
		stylesCSS += '.inskinLoaded #at-share-dock{z-index:100;max-width:' + contentWidth + 'px}';
		stylesCSS += '.inskinLoaded .dm-items{right:15px}';
		stylesCSS += '.inskinLoaded .footer-middle{margin-top:20px}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "200"
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

