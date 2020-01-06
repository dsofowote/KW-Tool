integration.meta = {
    'sectionID' : '130100',
    'siteName' : 'Macworld - Smartphone - (NL) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1102704',
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
        if ($("#header>.mobile").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header>.mobile");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
			});
        }
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded {width: unset}';
        stylesCSS += '.inskinLoaded #header .mobile {z-index: 4}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
	var headHeight = $("#mainMenu-mob").height();
      $(".ism-frame").parent().css({"top" : headHeight});
      integration.base.setCfg({
            plr_PageHeightAdjustment : -headHeight
        })
});

integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
});

