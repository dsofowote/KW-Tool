integration.meta = {
    'sectionID' : '129821',
    'siteName' : 'Quest Community Papers - (Creative Approval) - Header Bidding - (AU)',
    'platform' : 'header bidding'
};

integration.params = {
    'mf_siteId' : '1088722',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1020,
    'srv_SectionID': '129821',
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
            var headHeight = $(".tgc-headerv2 ").outerHeight();
            if ($(".tgc-headerv2_header").length == 1) {
                  $("<div id='inskinanchor'></div>").insertAfter(".tgc-headerv2_header");
                  integration.base.setCfg({
                      plr_AnchorParent : "#inskinanchor",
                      plr_PageHeightAdjustment : -headHeight,
                      plr_ScrollAdjustment : 0
                  });
              }
              $("#inskinanchor").css({
                  "top" : headHeight,
                  "position" : "relative"
                });
            integration.base.setCfg({
                'plr_ContentW' : 1020,
                'plr_PageAlignment' : 'center'
            });
            $(".reimagine-main > div:nth-child(1)").css({
              "background" : "none"
            });
            $(".tgc-footer_container").css({
              "max-width" : "1020px",
              "margin" : "0 auto"
            });
            $(".reimagine-main").css({
              "margin-top" : integration.custom.PageSkinTopPanel
            });
        }

        tabletIntegration = function() {
          integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
          var headHeight = $(".tgc-headerv2 ").outerHeight();
          if ($(".tgc-headerv2_header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter(".tgc-headerv2_header");
                integration.base.setCfg({
                    plr_AnchorParent : "#inskinanchor",
                    plr_PageHeightAdjustment : -headHeight,
                    plr_ScrollAdjustment : 0
                });
            }
            $("#inskinanchor").css({
                "top" : headHeight,
                "position" : "relative"
              });
          integration.base.setCfg({
              'plr_ContentW' : 1020,
              'plr_PageAlignment' : 'center'
          });
          $(".tgc-footer_container").css({
            "max-width" : "1020px",
            "margin" : "0 auto"
          });
          $(".reimagine-main").css({
            "margin-top" : integration.custom.PageSkinTopPanel
          });

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                integration.base.setCfg({
                    plr_PageAlignment : 'left'
                });
                $(".reimagine-main > .content, .tgc-footer_container").css({
                  "margin-left" : "0"
                });
                $(".tgc-footer_disclaimer").css({
                  "margin-left" : "200px"
                });
                $(".reimagine-main").css({
                  "max-width" : "1000px",
                  "margin-left" : "10px"
                });

            }
        }

        smartphoneIntegration = function() {
            integration.base.setCfg({
                'plr_FluidAnchor' : true,
                'plr_Responsive' : true
            });
            var headHeight = $(".tgc-headerv2").outerHeight();
            if ($(".tgc-headerv2").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter(".tgc-headerv2");
                integration.base.setCfg({
                    plr_AnchorParent : "#inskinanchor",
                    plr_ScrollAdjustment : -50,
                    plr_PageHeightAdjustment : -headHeight
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
