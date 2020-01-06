integration.meta = {
    'sectionID' : '129810',
    'siteName' : 'Taste.com.au - (Creative Approval) - Header Bidding - (AU)',
    'platform' : 'header bidding'
};

integration.params = {
    'mf_siteId' : '1088723',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1020,
    'srv_SectionID': '129810',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      desktopIntegration = function() {
          integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
          var headHeight = $("header").outerHeight();
          if ($(".page-main-header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter(".page-main-header");
                integration.base.setCfg({
                    plr_AnchorParent : "#inskinanchor",
                    plr_PageHeightAdjustment : -headHeight,
                    plr_ScrollAdjustment : -headHeight
                });
            }
          integration.base.setCfg({
              'plr_ContentW' : 1020,
              'plr_PageAlignment' : 'center'
          });
          $("head").append("<style>.search-parallax.fixed-background-image-parallax {background-position-y: 0px !important;}</style>");
          $("head").append("<style>.dropzone, section.highlight {max-width: 1020px; margin: 0 auto;}</style>");
          $(".search-parallax.fixed-background-image-parallax, footer").css({
               "max-width" : "1020px",
               "margin" : "0 auto"
          });
      }

        tabletIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 1020,
                'plr_PageAlignment' : 'center'
            });
            var headHeight = $(".page-main-header").outerHeight();
            if ($(".page-main-header").length == 1) {
                  $("<div id='inskinanchor'></div>").insertAfter(".page-main-header");
                  integration.base.setCfg({
                      plr_AnchorParent : "#inskinanchor",
                      plr_PageHeightAdjustment : -headHeight,
                      plr_ScrollAdjustment : -headHeight
                  });
              }
              $("head").append("<style>.search-parallax.fixed-background-image-parallax {background-position-y: 0px !important;}</style>");
              $("head").append("<style>.dropzone, section.highlight {max-width: 1020px; margin: 0 auto;}</style>");
              $(".search-parallax.fixed-background-image-parallax, footer").css({
                   "max-width" : "1020px",
                   "margin" : "0 auto"
              });

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                integration.base.setCfg({
                    plr_PageAlignment : 'left'
                });
                $("head").append("<style>.dropzone, section.highlight, .billboard-ad, .top-picks.highlight.standard {margin-left: 0;}</style>");
                $(".search-parallax.fixed-background-image-parallax, footer, .container").css({
                     "margin-left" : "0"
                });
                $(".page-main-header").css({
                     "margin-left" : "-20px"
                });
            }
        }

        smartphoneIntegration = function() {
            integration.base.setCfg({
                'plr_FluidAnchor' : true,
                'plr_Responsive' : true
            });
            var headHeight = $(".page-main-header").outerHeight();
            if ($(".page-main-header").length == 1) {
                  $("<div id='inskinanchor'></div>").insertAfter(".page-main-header");
                  integration.base.setCfg({
                      plr_AnchorParent : "#inskinanchor",
                      plr_PageHeightAdjustment : -headHeight,
                      plr_ScrollAdjustment : -headHeight
                  });
              }
            $('html').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded {padding: 0px 74px 0px 0px; overflow: visible !important;}';
            stylesCSS += '.inskinLoaded #inskinanchor {padding-bottom: 25px;}';
            stylesCSS += '</style>'
            $('head').append(stylesCSS);
        }

        if(e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
            integration.base.setCfg({'plr_FixedTop' : true,'plr_EnableSwipe' : true,});
        }

        switch(e.data.device){
            case 'Desktop' :
                desktopIntegration();
                break;
            case 'Tablet' :
                tabletIntegration();
                break;
            case 'Smartphone' :
                smartphoneIntegration();
                break;
        }
    }
});
