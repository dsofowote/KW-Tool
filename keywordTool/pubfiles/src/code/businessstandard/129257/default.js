integration.meta = {
    'sectionID' : '129257',
    'siteName' : 'Business Standard - Smartphone - (IN) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1069192',
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
      var headHeight = $(".m-header").outerHeight();
      if ($(".m-header").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter(".m-header");
        integration.base.setCfg({
          plr_AnchorParent : "#inskinanchor",
          // plr_ScrollAdjustment : 4,
          plr_PageHeightAdjustment : -headHeight
        });
      }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #inskinanchor {margin-top: '+ headHeight +'px}';
        stylesCSS += '.inskinLoaded #topdivheader {padding: 0}';
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
