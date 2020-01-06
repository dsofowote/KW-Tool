integration.meta = {
    'sectionID' : '129038',
    'siteName' : 'Gentside - Smartphone - (UK)  ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [350]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1046168',
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
      integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
      setTimeout(function() {
         window.dispatchEvent(new Event('resize'));
       }, 250);
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #inskinanchor{top: '+ headHeight +'px !important; position: relative;}';
        stylesCSS += '.inskinLoaded .button-share__button{right: ' + integration.custom.FrameSideRight + 'px !important;}';
        stylesCSS += '.inskinLoaded .invite-brand{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important; right: auto;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    var headHeight = $(".mdc-top-app-bar").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    setTimeout(function() {
       window.dispatchEvent(new Event('resize'));
     }, 250);
});
