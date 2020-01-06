integration.meta = {
    'sectionID' : '129124',
    'siteName' : 'Free Malaysia Today - Smartphone - ( MY )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1057018',
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
      var windowWidth = $(window).width();
      if ($(".td-header-menu-wrap-full").length == 1) {
                  $("<div id='inskinanchor'></div>").insertAfter(".td-header-menu-wrap-full");
                  integration.base.setCfg({
                      plr_AnchorParent : "#inskinanchor",
                      plr_PageHeightAdjustment : -54
                  });
              };
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #td-outer-wrap {overflow: visible;}';
        stylesCSS += '.inskinLoaded .td-header-menu-wrap-full {width: '+ windowWidth +'px;}';
        stylesCSS += '.inskinLoaded .st-btn {margin-right: 2px !important; padding: 0 !important; }';
        stylesCSS += '.inskinLoaded .st-first {min-width: 90px !important }';
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
