integration.meta = {
    'sectionID' : '129528',
    'siteName' : 'Mix Network - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085437',
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
        if ($("#main-body-container").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore("#main-body-container");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -130
            });
        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #main-body-container {padding-top: 0px}';
        stylesCSS += '.inskinLoaded .po-slider-articles,.inskinLoaded .pm-ad-unit--sticky,.inskinLoaded #global-footer, .inskinLoaded .pm-card-portrait .label, .inskinLoaded .pm-card-landscape .content-wrapper .label {z-index: 0}';
        stylesCSS += '.inskinLoaded .pm-card-circular .img-col {z-index: 0}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adServed', function(e) {
	$("#inskinanchor").css({"margin-top": "130px"});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

