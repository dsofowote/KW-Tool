integration.meta = {
    'sectionID' : '129560',
    'siteName' : 'Over60 - (Pagelead) - Smartphone - (AU)  ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085462',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        integration.custom.headHeight = $("header.fixed-top").outerHeight();
		if ($("header.fixed-top").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header.fixed-top");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -50
			});
		}

        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #o60-public main {margin-top: 60px}';
        stylesCSS += '.inskinLoaded {}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adServed', function(e) {
	$(".ism-anchor").css({
		"margin-top" : integration.custom.headHeight,
		"z-index" : "9999"
    });
    $('.menu-icon').on('click', function() {
        $('.ism-anchor').toggleClass('opened');
      });
      $('head').append('<style type="text/css">.opened {z-index : 9 !important;}</style>');

});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

