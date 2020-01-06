integration.meta = {
	'sectionID' : '128548',
	'siteName' : 'Bunte - Smartphone - (AT CH DE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId' : '1021877',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : '-20',
		'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var windowWidth = $(window).width();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var contentWidth = windowWidth - integration.custom.FrameSideRight;

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style id="inskinStyles" type="text/css">';
		stylesCSS += '.inskinLoaded ul.ob-widget-items-container, .inskinLoaded .ob-widget-header, .inskinLoaded .ob-unit{width:' + (contentWidth - 15) + 'px;margin:0 auto}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/40748507/stu_bun_mobile/inskin/fallback', [300, 250]).setTargeting('adkeyword', ['inskin_fallback']).display();<\\script>";
};
