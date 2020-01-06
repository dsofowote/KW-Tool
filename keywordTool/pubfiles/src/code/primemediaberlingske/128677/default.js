integration.meta = {
	'sectionID' : '128677',
	'siteName' : 'B.T. - Smartphone - (DK)',
	'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1029511',
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
		integration.custom.FrameTop = e.data.plr_FrameTop;
		$('body').addClass('inskinLoaded clearfix');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded.clearfix{overflow: auto;}';
		stylesCSS += '.inskinLoaded.clearfix::after {content: ""; clear: both; display: table;}';
		stylesCSS += '.inskinLoaded .site-footer, .inskinLoaded .content-wrapper{float: none !important;}';
		stylesCSS += '.inskinLoaded .site-header .main-navigation-desktop>li{margin: 0 5px !important;}';
		stylesCSS += '.inskinLoaded .sitemap__block{top: '+ (-integration.custom.FrameTop) +'px !important;}';
		stylesCSS += '.inskinLoaded .page-title{font-size: 28px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

