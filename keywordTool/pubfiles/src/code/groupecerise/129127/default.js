integration.meta = {
    'sectionID' : '129127',
    'siteName' : 'Gentside - Smartphone - (BR)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [350]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1057146',
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
      var headHeight = $(".mdc-toolbar__row").outerHeight();
      if ($(".header").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter(".header");
        integration.base.setCfg({
          'plr_AnchorParent' : '#inskinanchor',
          'plr_PageHeightAdjustment' : -headHeight
        });
      }
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

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

