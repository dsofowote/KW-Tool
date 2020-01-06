integration.meta = {
    'sectionID' : '129806',
    'siteName' : 'Kidspot - (Creative Approval) - Header Bidding - (AU)',
    'platform' : 'header bidding'
};

integration.params = {
    'mf_siteId' : '1088717',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1000,
    'srv_SectionID': '129806',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_Multiwin' : false
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        desktopIntegration = function() {
          var stickyHeadHeight = $("#main-header").height();
          var headHeight = $("#header-wrapper").height() + $(".navbar-header-ad").height();
          var marginTop = $(".main-header-content").height() - headHeight;
          integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
            if ($(".main-header-content").length == 1) {
              $('<div id="inskinanchor"></div>').insertAfter(".main-header-content");
              integration.base.setCfg({
                "plr_AnchorParent" : "#inskinanchor"
              });
            }
            $("#inskinanchor").css({
          		"top" : headHeight,
          		"position" : "relative"
          	});
            integration.base.setCfg({
                'plr_ContentW' : 1000,
                'plr_PageAlignment' : 'center',
                'plr_ScrollAdjustment' : stickyHeadHeight
            });
              $("#footer-wrapper").css({
            		"width" : "1000px",
            		"margin" : "0 auto"
            	});
            $(".main-search-box-container").css({
              "margin-top" : integration.custom.PageSkinTopPanel
            });
            $(".billboard-ad").css({
              "margin-top" : integration.custom.PageSkinTopPanel + 20
            });

        }

        tabletIntegration = function() {
          var stickyHeadHeight = $("#main-header").height();
          var headHeight = $("#header-wrapper").height() + $(".navbar-header-ad").height();
          var marginTop = $(".main-header-content").height() - headHeight;
          integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
            if ($(".main-header-content").length == 1) {
              $('<div id="inskinanchor"></div>').insertAfter(".main-header-content");
              integration.base.setCfg({
                "plr_AnchorParent" : "#inskinanchor"
              });
            }
            $("#inskinanchor").css({
              "top" : headHeight,
              "position" : "relative"
            });
            integration.base.setCfg({
                'plr_ContentW' : 1000,
                'plr_PageAlignment' : 'center',
                'plr_PageHeightAdjustment' : -headHeight
            });
            $(".main-header-content.mini-nav").css({
              	"width" : "1000px",
              	"margin" : "0 auto"
            });
            $("#footer-wrapper").css({
              "width" : "1000px",
              "margin" : "0 auto"
            });
            $(".main-search-box-container").css({
              "margin-top" : integration.custom.PageSkinTopPanel
            });
            $(".billboard-ad").css({
              "margin-top" : integration.custom.PageSkinTopPanel + 20
            });
            $(".mini-nav .main-search-box-container").css({
              "margin-top" : "0px"
            });

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                integration.base.setCfg({
                    plr_PageAlignment : 'left'
                });
                $(".main-search-box-container, .page-main-content, .billboard-ad, #footer-wrapper, .main-header-content.mini-nav").css({
                  "margin-left" : "0px"
                });
            }
        }

        smartphoneIntegration = function() {
            integration.base.setCfg({
                'plr_FluidAnchor' : true,
                'plr_Responsive' : true
            });
            $('body').addClass('inskinLoaded');
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            var contentWidth = $(window).width() - integration.custom.FrameSideRight;
            integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
            $('body').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += 'body.inskinLoaded{width: ' + contentWidth + 'px;}';
            stylesCSS += '.inskinLoaded .mobile-menu-open#header-wrapper #mobile-menu{top: ' + integration.custom.PageSkinTopPanel +'px !important; right: ' + integration.custom.FrameSideRight + 'px !important;}';
            stylesCSS += '</style>'
            $('head').append(stylesCSS);
        }

        if(e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
            integration.base.setCfg({'plr_FixedTop' : true,'plr_EnableSwipe' : true,});
            $('body').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += 'body.inskinLoaded{width: ' + $(window).width() + 'px !important;}';
            stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index: 100010 !important}';
            stylesCSS += '</style>'
            $('head').append(stylesCSS);
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
