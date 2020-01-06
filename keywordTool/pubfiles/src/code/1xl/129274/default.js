integration.meta = {
    'sectionID' : '129274',
    'siteName' : 'Iconic News - Smartphone - (UK)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1070208',
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
        $('body').addClass('inskinLoaded');
        integration.custom.PageSkinLeftPanel = e.data.plr_FrameSide;
        var width = $(window).width();
        var cWidth = width - integration.custom.PageSkinLeftPanel;
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .container-fluid .vc_bg_02{width: ' + cWidth + 'px !important;}}';
        stylesCSS += '.inskinLoaded .vc_p0, .inskinLoaded .container-fluid .container{margin-left: -15px !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://uk.ads.justpremium.com/adserve/js.php?zone=66677\"><\\script>";
};
