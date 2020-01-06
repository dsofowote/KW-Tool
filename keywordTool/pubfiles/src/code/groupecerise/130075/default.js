integration.meta = {
    'sectionID' : '130075',
    'siteName' : 'Ohmymag - Smartphone - CH',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1102137',
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
        var navHeight = $('.navbar').height();
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        stylesCSS += '.inskinLoaded #inskinanchor{top: ' + navHeight + 'px !important; position: relative;}';
        stylesCSS += '.inskinLoaded .mdc-toolbar--fix-bottom{margin-bottom: 0px}';
        stylesCSS += '.inskinLoaded .button-share__button{right: ' + integration.custom.FrameSideRight + 'px !important;}';
        stylesCSS += '.inskinLoaded .invite-brand{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important; right: auto;}';
        stylesCSS += '.inskinLoaded .home-slide__title{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important; right: auto;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".header").length == 1) {
          $("<div id='inskinanchor'></div>").insertAfter(".header");
          integration.base.setCfg({
            'plr_AnchorParent' : '#inskinanchor',
            'plr_PageHeightAdjustment' : -navHeight
          });
        }
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $('body').remove('#inskinanchor');
});