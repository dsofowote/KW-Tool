integration.meta = {
    'sectionID' : '129303',
    'siteName' : 'Ohmymag - (desktop only) - Header Bidding - (ES)',
    'platform' : 'header bidding'
};

integration.params = {
    'mf_siteId' : '1071985',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 980,
    'srv_SectionID': '129303',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_Multiwin' : false,
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        desktopIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 980,
                'plr_PageAlignment': 'center'
            });

            var headHeight = $(".navbar").outerHeight();
            var leftMargin = ($(window).width() - 980) / 2;
            var breadcrumb = $(".breadcrumb").outerHeight();
            $("head").append("<style>.mdc-toolbar--fix {margin-top: 0 ;} .home-slide__bg{background-size: auto !important;}</style>");
            $(".wrapper").css({
                "width": "980px",
                "margin-left": "auto",
                "margin-right": "auto"
            });
            $(".breadcrumb").css({
                "margin-top": breadcrumb
            });
            $(".channel-bar").css({
                "max-width": "980px",
                "margin": "auto",
                "top": headHeight
            });
            if ($(".navbar").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter(".navbar");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                });
            }

            integration.on("adServed", function (e) {
                var headHeight = $(".navbar").outerHeight();
                $(".ism-frame").parent().css({
                    "top": headHeight
                });
                integration.base.setCfg({
                    plr_PageHeightAdjustment: -headHeight
                });
                setTimeout(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 500);
            });
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 980,
                'plr_PageAlignment': 'center'
            });

            integration.custom.FrameSide = e.data.plr_FrameSide;
            var headHeight = $(".navbar").outerHeight();
            var leftMargin = integration.custom.FrameSide;
            var breadcrumb = $(".breadcrumb").outerHeight();

            $("head").append("<style>.mdc-toolbar--fix {margin-top: 0 ;} .home-slide__bg{background-size: auto !important;}</style>");
            $(".wrapper").css({
                "width": "980px",
                "margin-left": "auto",
                "margin-right": "auto"
            });
            $(".wrapper").css({
                "margin-top": "15px"
            });
            $(".breadcrumb").css({
                "margin-top": breadcrumb
            });
            $(".button-share__button").css({
                "right": integration.custom.FrameSide
            });
            $(".channel-bar").css({
                "max-width": "980px",
                "margin": "auto",
                "top": headHeight
            });
            
            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                /* Pageskin Edge specific changes */
                $("head").append("<style>.wrapper{margin-left: 0 !important;}</style>");
                $(".channel-bar").css({
                    "margin-left": 0
                });
                $(".home-slide").css({
                    "margin-left": -20
                });
                $(".home-content").css({
                    "margin-left": 0
                });
                $(".us-container").css({
                    "margin-left": -300
                });
                $(".footer").css({
                    "margin-left": -300
                });
                integration.base.setCfg({
                    'plr_PageAlignment': 'left'
                });
            }
            integration.on("adServed", function (e) {
                var headHeight = $(".navbar").outerHeight();
                $(".ism-frame").parent().css({
                    "top": headHeight
                });
                integration.base.setCfg({
                    plr_PageHeightAdjustment: -headHeight
                });
                setTimeout(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 500);
            });
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true
            });

            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            if ($(".header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter(".header");
                integration.base.setCfg({
                    'plr_AnchorParent': '#inskinanchor',
                    'plr_PageHeightAdjustment': -65
                });
            }
            $('body').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded #inskinanchor{top: 65px !important; position: relative;}';
            stylesCSS += '.inskinLoaded .post{position: relative !important;}';
            stylesCSS += '.inskinLoaded .button-share__button{right: ' + integration.custom.FrameSideRight + 'px !important;}';
            stylesCSS += '.inskinLoaded .invite-brand{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important; right: auto;}';
            stylesCSS += '</style>';
            $('head').append(stylesCSS);

            integration.on('adClose', function (e) {
                $('body').removeClass('inskinLoaded');
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

