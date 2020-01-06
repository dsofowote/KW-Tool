integration.meta = {
   'sectionID' : '127129',
   'siteName' : 'Whats On Dubai - Smartphone- (UAE) ',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707071',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
    $('body').addClass('inskinLoaded');
    var stylesCSS = '<style type="text/css">';
    stylesCSS += '.inskinLoaded #wrapper{overflow: visible !important;}';
    stylesCSS += '.inskinLoaded{min-width: 300px !important;}';
    stylesCSS += '</style>';
    $('head').append(stylesCSS);
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
	}
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"margin-top" : "5px"
	});
});
