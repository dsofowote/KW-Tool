integration.meta = {
	'sectionID' : '127970',
	'siteName' : 'Ad Hoc News - Smartphone - ( DE )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '958647',
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
		var siteWrapper = document.getElementById("ip_page_wrapper");
		var parentWrapper = siteWrapper.parentNode;
		$(parentWrapper).addClass("topWrapper");

		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .topWrapper{position:relative !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);

	}
});
