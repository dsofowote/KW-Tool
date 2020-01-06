integration.meta = {
    'sectionID': '129796',
    'siteName': 'Best Recipes - (Creative Approval) - Header Bidding - (AU)',
    'platform': 'header bidding'
};

integration.params = {
    'mf_siteId': '1088704',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1000,
    'srv_SectionID': '129796',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_Multiwin' : false,
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        desktopIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1000,
                'plr_PageAlignment': 'center'
            });

            if ($("header.page-main-header").length == 1) {
                var navHeight = $("header.page-main-header").outerHeight();
                $("<div id='inskinanchor'></div>").insertAfter("header.page-main-header");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                    plr_PageHeightAdjustment: -navHeight
                });
            }

            $(".page-main-content, footer").css({
                "max-width" : "1000px",
                "margin" : "0 auto"
            });
        }

        tabletIntegration = function () {
            var navHeight = $("header.page-main-header").outerHeight();
            integration.base.setCfg({
                'plr_ContentW': 1000,
                'plr_PageAlignment': 'center',
                'plr_PageHeightAdjustment': -navHeight
            });

            $(".page-main-header").css({
                "height" : "0px",
                "position" : "relative"
            });

            $(".page-main-content, footer").css({
                "width" : "1000px",
                "margin-top" : navHeight,
                "margin-left" : "auto",
                "margin-right" : "auto"
            });

            integration.on('adServed', function(){
                $(".ism-anchor").css({
                    "top" : navHeight,
                    "position" : "relative"
                });
            });

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                integration.base.setCfg({
                    plr_PageAlignment: 'left'
                });
                $(".page-main-content, footer").css({
                    "margin-left" : "0px"
                }); 
            }
        }

        smartphoneIntegration = function () {
            var navHeight = $("header.page-main-header").outerHeight();
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true,
                'plr_PageHeightAdjustment': -navHeight
            });

            $('html').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded {padding-right:76px !important;}';
            stylesCSS += '.inskinLoaded, .inskinLoaded body{overflow:visible !important;}';
            stylesCSS += '.inskinLoaded .footer-social-links{max-width:100% !important;}';
            stylesCSS += '</style>';
            $('head').append(stylesCSS);

            integration.on('adServed', function(){
                $(".ism-anchor").css({
                    "position" : "relative",
                    "top" : navHeight
                });
            });

            integration.on('adClose', function(e) {
                $('html').removeClass('inskinLoaded');
                $("#inskinanchor").remove();
            });
        }

        if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
            integration.base.setCfg({
                'plr_FixedTop': true,
                'plr_EnableSwipe': true,
            });
        }

        switch (e.data.device) {
            case 'Desktop':
                desktopIntegration();
                break;
            case 'Tablet':
                tabletIntegration();
                break;
            case 'Smartphone':
                smartphoneIntegration();
                break;
        }
    }
});