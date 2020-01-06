integration.meta = {
    'sectionID': '129472',
    'siteName': 'Presseportal - (HB ALL) - Headerbidding - (DE)',
    'platform': 'header bidding'
};

integration.params = {
    'mf_siteId': '1079109',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1280,
    'srv_SectionID': '129472',
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
                'plr_ContentW': 1280,
                'plr_PageAlignment': 'center'
            });
            var headHeight = $(".header-logo").outerHeight() + 20; //20 Due to us having to use logo size rather than full header

            if ($(".header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter(".header");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                    plr_PageHeightAdjustment: -headHeight
                });
            }

            $("head").append('<style>body{overflow: visible !important;}');

            integration.on('adServed', function () {
                $(".ism-anchor").css({
                    "top": headHeight,
                    "position": "relative"
                });
            });
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1280,
                'plr_PageAlignment': 'center'
            });

            var headHeight = $(".header-logo").outerHeight() + 20; //20 Due to us having to use logo size rather than full header

            if ($(".header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter(".header");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                    plr_PageHeightAdjustment: -headHeight
                });
            }

            integration.on('adServed', function () {
                $(".ism-anchor").css({
                    "top": headHeight,
                    "position": "relative"
                });
            });

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                integration.base.setCfg({
                    plr_PageAlignment: 'left'
                });

                $(".section").css({
                    "margin": "0"
                })
            }
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true
            });
            var headHeight = $(".header-logo").outerHeight() + 20; //20 Due to us having to use logo size rather than full header
            var windowWidth = $(window).width();
            integration.custom.frameSideRight = e.data.plr_FrameSideRight;

            var contentWidth = windowWidth - integration.custom.frameSideRight;

            if ($(".header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter(".header");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                    plr_PageHeightAdjustment: -headHeight
                });
            }

            $("html").addClass("inskinLoaded");
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded{padding-right:75px;}';
            stylesCSS += '.inskinLoaded body{overflow: visible !important}';
            stylesCSS += '.inskinLoaded .story-sharing, .inskinLoaded .alert-area-wrapper-fixed-mobile{max-width:' + contentWidth + 'px;margin-left:0px;}'
            stylesCSS += '</style>';
            $('head').append(stylesCSS);

            integration.on('adServed', function () {
                $(".ism-anchor").css({
                    "top": headHeight,
                    "position": "relative",
                    "z-index" : "800"
                });
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