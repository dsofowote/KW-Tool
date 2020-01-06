integration.meta = {
	'sectionID' : '128336',
	'siteName' : 'ESPN Cricinfo - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1004092',
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
		stylesCSS += '.inskinLoaded #global-viewport #pane-main{z-index: 1 !important;}';
		stylesCSS += '.inskinLoaded .ad-slot.ad-slot-banner.ad-wrapper{display: none !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
	}
});

integration.on("adServed", function(e) {
	var headerHeight = $("#header-wrapper").height();
	$(".ism-frame").parent().css({
		"top" : headerHeight,
		'z-index' : 2
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
