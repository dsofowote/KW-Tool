integration.meta = {
	'sectionID' : '128823',
	'siteName' : 'Rappler - Smartphone - ( ID PH SG US )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1035852',
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
		var hHeight = $('#masthead').height();
		if ($("#masthead").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#masthead");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #page{overflow: visible !important;}';
		stylesCSS += '.inskinLoaded #inskinanchor{top: ' + hHeight + 'px !important; position: relative;}';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .share-button-container{font-size: 18px !important;}}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});

