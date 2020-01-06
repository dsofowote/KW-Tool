integration.meta = {
	'sectionID' : '128624',
	'siteName' : 'Navarra.com - Smartphone - (ES)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1027674',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit": true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .scrolled-utilities.is-stick, .inskinLoaded .go-top{right: ' + integration.custom.FrameSideRight + 'px !important}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	var hHeight = $('.header-wrapper').height();
	var TotalHeight = integration.custom.FrameTop + hHeight;
	$(window).bind('scroll', function() {
		if ($(window).scrollTop() > TotalHeight) {
			integration.base.setCfg({
				'plr_ScrollAdjustment' : 50
			});
		} else {
			integration.base.setCfg({
				'plr_ScrollAdjustment' : 0
			});
		}
	});
});
