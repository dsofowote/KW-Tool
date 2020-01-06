integration.meta = {
    'sectionID' : '129248',
    'siteName' : 'Your Money - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1068790',
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
        integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .btn-open-survey.tab{right: ' + integration.custom.PageSkinRightPanel + 'px !important;}';
        stylesCSS += '.inskinLoaded .mopinion-survey-content .btn, .inskinLoaded .mopinion-survey-content button{box-shadow: none;}';
        stylesCSS += '.inskinLoaded .td-pb-padding-side{padding-right: 20px;}';
        stylesCSS += '.inskinLoaded .mopinion-survey-content .btn-open-survey.tab{z-index: 9998 !important;}';
        stylesCSS += '.inskinLoaded .td-header-row.td-affix{width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px)!important; margin-left: 0px !important;}';
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
