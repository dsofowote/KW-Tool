integration.meta = {
    'sectionID' : '129954',
    'siteName' : 'Zee5 - ((Pagelead)) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

function setWindow() {
    return currentWindow.top;
}

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1098928',
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


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor"
			});
        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #header .dup-navwrap {margin-bottom: 0px}';
        stylesCSS += '.inskinLoaded .ism-anchor {z-index: 31}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    $(".ism-anchor").addClass("closed");
          $('.button-mobile').on('click', function() {
            $('.ism-anchor').toggleClass('closed');
          });
          $('head').append('<style type="text/css">.closed {z-index : 9999 !important;}</style>');

    });

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

