integration.meta = {
    'sectionID' : '129949',
    'siteName' : 'Starts at 60 - Smartphone - (AU) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1098923',
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
      var width = $(window).width();
      var headHeight = $('.header-wrapper').height();
      if ($(".header-wrapper").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".header-wrapper");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment : -headHeight
            });
        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .header-wrapper{width: ' + width + 'px !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        window.unloadPageskin = function() {
          try {
            integration.destroy();
          } catch (e) {
          }
        };
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
    return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/29816\"><\\script>";
};