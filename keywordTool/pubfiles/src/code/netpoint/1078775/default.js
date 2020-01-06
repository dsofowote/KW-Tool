integration.meta = {
    'sectionID': '129471',
    'siteName': 'Abendzeitung Muenchen - (HB ALL) - Headerbidding - (DE)',
    'platform': 'header bidding'
};

integration.params = {
    'mf_siteId': '1078775',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1040,
    'srv_SectionID': '129471',
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
                'plr_ContentW': 1040,
                'plr_PageAlignment': 'center'
            });

            $(".site.ressort, .site.article").css({
                "margin": "0 auto",
                "padding": "0px"
            });

            if ($(".header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter(".header");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor"
                });
            }
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1040,
                'plr_PageAlignment': 'center'
            });

            $(".site.ressort, .site.article, .article-social-bar, .site.topics").css({
                "margin": "0 auto",
                "max-width": "1040px",
                "padding": "0px"
            });

            $(".article-social-bar").css({
                "left": "0",
                "right": "0",
            });

            $(".main-nav-wrapper").css({
                "max-width": "1040px"
            });

            integration.on('adServed', function () {
                $(".ism-anchor").css({
                    "z-index": "800"
                });
            });

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                integration.base.setCfg({
                    plr_PageAlignment: 'left'
                });

                $(".site.ressort, .site.article, .article-social-bar, .site.topics").css({
                    "margin-left": "0",
                });
            }
        }

        smartphoneIntegration = function () {
            var headHeight = $(".main-nav-wrapper").outerHeight() + 20; //20 Due to us having to use logo size rather than full header
            var windowWidth = $(window).width();
            integration.custom.frameSideRight = e.data.plr_FrameSideRight;

            var contentWidth = windowWidth - integration.custom.frameSideRight;

            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true,
                'plr_ScrollAdjustment' : headHeight
            });           

            $("html").addClass("inskinLoaded");
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded{padding-right:75px;}';
            stylesCSS += '.inskinLoaded body{overflow: visible !important}';
            stylesCSS += '.inskinLoaded .article-social-bar, .inskinLoaded .alert-area-wrapper-fixed-mobile{max-width:' + contentWidth + 'px;margin-left:0px;}'
            stylesCSS += '.inskinLoaded .fb_iframe_widget iframe{min-width:' + (contentWidth - 30) + 'px !important;width:' + (contentWidth - 30) + 'px !important;}'
            stylesCSS += '</style>';
            $('head').append(stylesCSS);

            integration.on('adServed', function () {
                $(".ism-anchor").css({
                    "z-index": "800"
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