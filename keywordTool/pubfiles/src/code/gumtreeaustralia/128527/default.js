integration.meta = {
	'sectionID' : '128527',
	'siteName' : 'Gumtree - (Pagelead) - Smartphone - (AU)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

function setWindow() {
    return currentWindow.top;
  }

integration.params = {
	'mf_siteId' : '1020902',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : false,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FixedTop' : true,
	'plr_EnableSwipe' : false,
	'plr_HideFixedTopAfter' : 5000,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .modal-open{z-index: 99999 !important;}';
		stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1) {z-index: 100 !important}';
		stylesCSS += '.inskinLoaded .header--search-open .header__search-bar, .inskinLoaded .header--search-open{z-index: 99999 !important;}';
		stylesCSS += '.inskinLoaded{overflow: visible !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "99 !important"
	});
});

integration.on('layoutChange', function(e) {
	$('#search-form-wrapper').click(function() {
		$('body').removeClass('inskinLoaded');
	});
});
