integration.meta = {
    'sectionID': '129919',
    'siteName': ' GoFeminin - (HB ALL) - Header bidding - (AT CH) ',
    'platform': 'header bidding'
};

integration.params = {
    'mf_siteId': '1095391',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1060,
    'srv_SectionID': '129919',
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
                'plr_ContentW': 1060,
                'plr_PageAlignment': 'center'
            });

            if ($("#header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter("#header");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                    plr_PageHeightAdjustment: -137,
                    plr_StartScrollOnAnchor: true,
                    plr_ScrollAdjustment: 54
                })
            }
            $("#footer").css({
                "max-width": "1060px",
                margin: "0 auto"
            });

            $("#sas_banner").css({
                "height": "0px"
            });
            $('#div-gpt-ad-banner').hide();
            $('.af-banner').hide();
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1060,
                'plr_PageAlignment': 'center'
            });

            $("#head-nav.closed").css({
                "visibility": "visible"
            });
            if ($("#header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter("#header");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor"
                });
            }
            $('#spacer').hide();
            $('#content, footer, #sas_swf, #sub, #sas_banner').css({
                "max-width": "1002px",
                "margin": "0 auto"
            });
            $("#header-content, #main-nav").css({
                "width": "99%"
            });
            /*
            $("#main-nav-container, #header-content, nav#main-nav").css({
                "max-width" : "980px",
                "margin" : "0 auto",
                "left" : "0",
                "right" : "0"
            }); */
            $('head').append('<style type="text/css">#sub {top: 0 !important;}</style>');
            $('head').append('<style type="text/css">#sas_banner {margin-top: 10px !important;}</style>');
            $('head').append('<style type="text/css">.af-block-editorial-big:nth-child(even) {margin-left: 1px !important;}</style>');
            $('#div-gpt-ad-banner').hide();
            $('.af-banner').hide();


            if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
                /* PageSkin Edge specific changes */
                $('#content, #footer, #sas_swf, #sub, #sas_banner').css({
                    "margin": "0"
                });
                $('#content').css({
                    "padding-left": "0"
                });
                $('#head-nav').css({
                    "margin-left": "-20px",
                    "width": "calc(100% + 20px)"
                });
                integration.base.setCfg({
                    'plr_PageAlignment': 'left'
                });
            }
            integration.on("layoutChange", function (e) {
                integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
                integration.custom.InSkinTopNav();
                $(document).scroll(function () {
                    integration.custom.InSkinTopNav();
                });
            });

            integration.custom.InSkinTopNav = function () {
                //var height = $(document).scrollTop();
                if (height < integration.custom.PageSkinTopPanel) {
                    //var newheight = integration.custom.PageSkinTopPanel - height;
                    $("#header-content").css({
                        "margin-top": newheight
                    });
                } else {
                    $("#header-content").css({
                        "margin-top": "0px"
                    });
                }
            }
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true
            });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('html').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded {padding-right: 75px;}';
            stylesCSS += '.inskinLoaded #content{overflow-x: hidden;}';
            stylesCSS += '.inskinLoaded body{overflow: visible;}';
            stylesCSS += '.inskinLoaded #af-scrollspy{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important; z-index: 9999;}';
            var cWidth = $(window).width() - integration.custom.FrameSideRight;
            stylesCSS += '.inskinLoaded .af_colCentre{width: ' + cWidth + 'px !important;}';
            stylesCSS += '.inskinLoaded .spacer{height: 0 !important;}';
            stylesCSS += '.inskinLoaded .af_colCentre .lm_next, .inskinLoaded .af_colCentre .lm_prev{display: none;}';
            stylesCSS += '</style>';
            $('head').append(stylesCSS);

            integration.on("adServed", function (e) {
                var headerHeight = $('header').height();
                $(".ism-frame").parent().css({
                    "margin-top": headerHeight,
                    "z-index": "99999"
                });
                integration.base.setCfg({
                    plr_PageHeightAdjustment: -headerHeight
                });
            });

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