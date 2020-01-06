integration.meta = {
    'sectionID' : '130011',
    'siteName' : 'Fanpiece - Smartphone - (HK) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1100321',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_GetContentHeightVersion' : '2',
    'plr_ForceFrameBottom' : 0,
    'plr_ScrollAdjustment' : 50
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded {overflow: visible !important}';
        stylesCSS += '.inskinLoaded .mm-slideout {z-index: 9}';
        stylesCSS += '.inskinLoaded .mm-offcanvas {z-index: 10}';
        stylesCSS += '.inskinLoaded #mm-blocker {z-index: 99}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor"
			});
        }
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
        $('head').append('<style type="text/css"> .ism-anchor {z-index: 999}</style>');
        $('head').append('<style type="text/css"> .ism-frame:nth-of-type(1) {top: 50px !important}</style>');


    }
});

integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
});

