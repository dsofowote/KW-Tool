integration.meta = {
    'sectionID' : '129820',
    'siteName' : 'Messenger News - (Creative Approval) - Header Bidding - (AU)',
    'platform' : 'header bidding'
};

integration.params = {
    'mf_siteId' : '1088719',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1000,
    'srv_SectionID': '129820',
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
            integration.base.setCfg({
                'plr_ContentW' : 1000,
                'plr_PageAlignment' : 'center'
            });
            $("head").append("<style> body, html {overflow-x: visible !important}</style>");
            var frameTop = $(".tgc-headerv2").outerHeight() + $(".ad-hybrid").outerHeight();
            var scrollAdjust = $(".ad-hybrid").outerHeight();
            if ($(".tgc-headerv2").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter(".tgc-headerv2");
                integration.base.setCfg({
                    plr_AnchorParent : "#inskinanchor",
                    plr_ScrollAdjustment : - scrollAdjust,
                    plr_PageHeightAdjustment : - frameTop
                });
            }
            $(".tgc-footer, [class^='caas-']").css({
                "margin": "0 auto",
                "max-width": "1000px"
            });
            $(".ad-hybrid").css({
                "z-index": "6"
            });
            if ($(".ad-hybrid").length == 1) {
            $("head").append("<style> .ism-anchor {top: "+ frameTop+"px}</style>");
            }
        }

        tabletIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 1000,
                'plr_PageAlignment' : 'center'
            });
            var pageAdjust = $(".tgc-headerv2").outerHeight();
            if ($(".tgc-headerv2").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter(".tgc-headerv2");
                integration.base.setCfg({
                    plr_AnchorParent : "#inskinanchor",
                    plr_PageHeightAdjustment : - pageAdjust
                });
            }
            $("body").css({"overflow": "visible"});
            $(".tgc-footer").css({
                "margin": "0 auto",
                "max-width": "1000px"
            });
            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                $(".tgc-footer, .widget-area-main-content").css({
                    "max-width": "1000px"
                });
                $(".content, .tgc-footer").css({
                    "margin-left": "0"
                });
                integration.base.setCfg({
                    plr_PageAlignment : 'left'
                });
            }
        }

        smartphoneIntegration = function() {
            integration.base.setCfg({
                'plr_FluidAnchor' : true,
                'plr_Responsive' : true
            });
            var pageAdjust = $(".tgc-headerv2").outerHeight();
            if ($(".tgc-headerv2").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter(".tgc-headerv2");
                integration.base.setCfg({
                    plr_AnchorParent : "#inskinanchor",
                    plr_ScrollAdjustment : - 50,
                    plr_PageHeightAdjustment : - pageAdjust
                });
            }
            $('html').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded {padding: 0px 74px 0px 0px; overflow: visible !important}';
            stylesCSS += '.inskinLoaded #inskinanchor {padding-bottom: 25px}';
            stylesCSS += '.inskinLoaded {}';
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