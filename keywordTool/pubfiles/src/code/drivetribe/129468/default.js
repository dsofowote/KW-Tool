integration.meta = {
    'sectionID' : '129468',
    'siteName' : 'DriveTribe - (CREATIVE APPROVAL) -Tablet - (INT)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1078639',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1180,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $('header').height();
      integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
      $('.sc-bmyXtO').css({'bottom': integration.custom.PageSkinBottomPanel});
      $('.sc-fepxGN, .sc-kEmuub ').css({'display':'none'});
      if ($("header").length == 1) {
          $("<div id='inskinanchor'></div>").insertAfter("header");
          integration.base.setCfg({
              plr_AnchorParent : "#inskinanchor",
              plr_PageHeightAdjustment : -headHeight
          });
          window.unloadPageskin = function () {
              try {
                integration.destroy();
              } catch (e) {}
            };
      }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.PageSkinFrameSide = e.data.plr_FrameSideRight;
            $('article').css({'margin-left': - integration.custom.PageSkinFrameSide});
        }
    }

});
