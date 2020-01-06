integration.meta = {
	'sectionID' : '127973',
	'siteName' : 'What\'s On Netflix - Smartphone - (INT) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '961287',
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
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #content-container > .boxed{width: 99%;}';
		stylesCSS += '.inskinLoaded .column, .inskinLoaded .columns{padding-left: 2%; padding-right: 2%;}';
		stylesCSS += '.inskinLoaded .row .row{margin: 0 auto;}';
		stylesCSS += '.inskinLoaded .slick-track, .inskinLoaded .row.slick-slide.slick-current.slick-active{width: 100% !important;}';
		stylesCSS += '.inskinLoaded .slick-list.draggable{height: auto !important;}';
		stylesCSS += '.inskinLoaded {width: 100%; margin-left: 1px !important; margin-right: 1px !important; padding-left: 0 !important;}';
		stylesCSS += '.inskinLoaded div[class*="vc_custom_"]{padding-left: 0 !important; margin-left: 0 !important; margin-right: 0 !important;}';
		stylesCSS += '.inskinLoaded .adsbygoogle{margin-left: -5px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
