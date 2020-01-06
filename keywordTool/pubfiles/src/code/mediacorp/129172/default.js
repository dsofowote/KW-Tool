integration.meta = {
    'sectionID' : '129172',
    'siteName' : 'Toggle.sg - (PageLead Only) - Smartphone - ( SG )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1061224',
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
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 401 !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index: 71 !important}';
        stylesCSS += '.inskinLoaded #feedback-callout, #scroll-top-button{z-index: 400 !important}';
        stylesCSS += '.inskinLoaded .nav--quicklinks{z-index: 0 !important}';
        stylesCSS += '.inskinLoaded .ism-close {background: transparent!important; background-image: url("https://cdn.inskinad.com/isfe/4.1/css/img/close_btn_v2.svg")!important;background-size: 25px 25px !important; background-repeat: no-repeat !important; background-position: center !important; padding: 0 !important}';
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
