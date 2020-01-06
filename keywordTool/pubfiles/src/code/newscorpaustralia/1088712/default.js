integration.meta = {
    'sectionID' : '129804',
    'siteName' : 'GQ.com.au - Header bidding - ( AU )',
    'platform' : 'header bidding'
};

integration.params = {
    'mf_siteId' : '1088712',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1000,
    'srv_SectionID': '129804',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass': '',
    'plr_Multiwin' : false
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        desktopIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 1000,
                'plr_PageAlignment' : 'center'
            });
            if ($(".Header-module-fixedHeader-18-N6--").length == 1) {
                var navHeight = $("[class^='Header-module-logoFullWidth']").height();
                $("<div id='inskinanchor'></div>").insertAfter(".Header-module-fixedHeader-18-N6--");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                    plr_PageHeightAdjustment: -170,
                    plr_ScrollAdjustment: -navHeight
                });
            }
            $("[class^='HorizontalPromoted-module'], [class^='Footer-module']").css({
                "margin": "0 auto",
                "max-width": "1000px"
            });

        }

        tabletIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 1000,
                'plr_PageAlignment' : 'center'
            });
            if ($(".Header-module-fixedHeader-18-N6--").length == 1) {
                var navHeight = $("[class^='Header-module-logoFullWidth']").height();
                $("<div id='inskinanchor'></div>").insertAfter(".Header-module-fixedHeader-18-N6--");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                    plr_PageHeightAdjustment: -170,
                    plr_ScrollAdjustment: -navHeight
                });
            }

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                $(".container").css({"margin-left": "0px"});
                $(".Header-module-fixedHeader-18-N6--").css({"margin-left": "-20px"});
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
            $("<div id='inskinanchor'></div>").insertAfter(".Header-module-fixedHeader-18-N6--");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -70
            });
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