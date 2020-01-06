integration.meta = {
    'sectionID': '129502',
    'siteName': 'Tagesspiegel - (HB ALL) - Header bidding - ( AT CH DE )',
    'platform': 'header bidding'
};

integration.params = {
    'mf_siteId': '1082645',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1000,
    'srv_SectionID': '129502',
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
                'plr_PageAlignment': 'center',
                "plr_URLKeywords": 2,
                "plr_HideElementsByClass": "",
                "plr_FastInit": true,
                "plr_StartScrollOnAnchor": true,
                "plr_ScrollAdjustment": 45
            });

            window.onunload = function() { try { window.parent.unloadPageskin(); } catch (e) {}};

            $("head").append('<style id="inskinStyle">.ts-page-wrapper, .ts-overview-page{width:1000px;margin:0 auto;}html.ts-menu-open .ts-header~.ts-main-nav{z-index:1000}html,body{overflow-y:visible !important}#PSAOuterWrapper:before{width:100%;position:relative}</style>');
            
            $("#urban-leaderboard").css({
                "position" : "absolute",
                "height" : "1px",
                "width" : "1px",
                "overflow" : "hidden",
                "min-height" : "0px",
                "min-width" : "0px",
                "margin" : "0px",
                "padding" : "0px",
                "background-color" : "initial"
            });
            $('.ts-page-wrapper').css({
                'width': '1000px',
                "margin": "0 auto"
            });
            if ($(".ts-page-wrapper .ts-stage-wrapper").length == 1) {
                $("<div id='inskinanchor'></div>").insertBefore(".ts-page-wrapper .ts-stage-wrapper .ts-stage");
                integration.base.setCfg({
                    "plr_AnchorParent": "#inskinanchor",
                    "plr_PageHeightAdjustment": -45
                });
            }
            top.document.getElementsByTagName('html')[0].className += " ts-centered-small";

            integration.on("layoutChange", function (e) {
                integration.custom.floatingButtons();
                $(window).resize(function () {
                    integration.custom.floatingButtons();

                });
            });

            integration.custom.floatingButtons = function () {
                var width = $(window).width();
                if (width < 4400) {
                    var sideWidth = (width - 1200) / 2;
                    $("head").append("<style> .ts-up-button{top: 631px; left: auto !important; right: calc(" + sideWidth + "px + 102px) !important;}</style>");
                } else {
                    $(".ts-up-button").css({
                        "right": "10px"
                    });
                }
            }
            integration.on("adServed", function (e) {
                $("#inskinanchor").css({
                    "margin-top": "-1px"
                });
            });
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Fluid': true,
                'plr_Responsive' : true,
                'plr_PageAlignment': 'center'
            });

            $('.ts-page-wrapper').css({
                'width': '1000px',
                "margin": "0 auto"
            });
            
            $("#urban-leaderboard").css({
                "position" : "absolute",
                "height" : "1px",
                "width" : "1px",
                "overflow" : "hidden",
                "min-height" : "0px",
                "min-width" : "0px",
                "margin" : "0px",
                "padding" : "0px",
                "background-color" : "initial"
            });

            $("head").append('<style id="inskinStyle">.ts-page-wrapper, .ts-overview-page{width:1000px;margin:0 auto;}html.ts-menu-open .ts-header~.ts-main-nav{z-index:1000}html,body{overflow-y:visible !important}</style>');
        

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                integration.base.setCfg({
                    plr_PageAlignment: 'left'
                });
            }

            integration.on('layoutChange', function (e) {
                integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
                $('.ts-up-button').css({
                    "right": integration.custom.FrameSideRight + 40
                });
                $("head").append('<style>.ts-up-button{left: auto !important;}</style>');
            });

            $('html').addClass('ts-centred-small');
            if ($("body #hcf-zr12qtz-wrapper").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter("body #hcf-zr12qtz-wrapper");
                var pageHeight = -45 - ($("#hcf-zr12qtz-wrapper").outerHeight());
                if ($("#hcf-zr12qtz-wrapper").outerHeight() > 10) {
                    var scrollAdjustment = -205 - $("#hcf-zr12qtz-wrapper").outerHeight();
                } else {
                    var scrollAdjustment = -178;
                }
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                    plr_PageHeightAdjustment: pageHeight,
                    plr_ScrollAdjustment: scrollAdjustment
                });
            }
            $('.hcf-ad-sky, .hcf-ad-bigsize, .ts-zr12qtz-sky-right').hide();
            
            $('#hcf-wrapper').css({
                'width': '1000px'
            });
            $('head').append('<style>#hcf-stage {margin-left: 0px !important;}</style>');
            if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
                integration.base.setCfg({
                    plr_PageAlignment: 'left'
                });
                $('.ts-desktop .ts-content-wrapper, .ts-desktop div[class~=hcf-faux-col], .ts-page-wrapper').css({
                    'width': '990px',
                });
                $('.ts-header, .ts-topics-list').css({
                    'margin-left': '-20px',
                    'width': '1320px'
                });
                $('.ts-header > .ts-stage-wrapper').css({
                    'padding-right': '285px'
                });
                $('.ts-page-wrapper .ts-stage-wrapper .ts-stage').css({
                    'width': '990px',
                });
                $('#UrbanFooterContainer').css({
                    'margin-left': '105px',
                    'width': '1000px'
                });
                $('.ts-page-wrapper .ts-stage-wrapper').css({
                    'padding': '0px'
                });
            } else {
                $('.ts-stage').css({
                    'margin': '0 auto'
                });
                $('.ts-page-wrapper .ts-stage-wrapper').css({
                    'padding': '0'
                });
                $('.ts-desktop .ts-breaking-news-area, .ts-desktop .ts-stage-wrapper, .ts-desktop .ts-breaking-news-stage, .ts-desktop .ts-newsticker-bar, .ts-page-wrapper').css({
                    'margin': '0 auto',
                    'max-width': '1000px',
                    'min-width': '0px'
                });
                $('.ts-header .ts-stage-wrapper').css({
                    'max-width': '1000px',
                    'min-width': '100%',
                    'padding': '0 100px'
                });
                $('#UrbanFooterContainer').css({
                    'margin': '0 auto',
                    'width': '1000px'
                });
            }
            if (integration.params.version) {} else {
                var URL = window.location.href;
                integration.telemetry.recordCustom(URL);
            }

            integration.on("adServed", function (e) {
                setTimeout(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 200);
                $('.ism-frame').parent().css({
                    'z-index': '10002'
                });
                /* Publisher asked for 10px padding between PageSkin and content */
                $('#hcf-wrapper').css({
                    'padding-top': '0px'
                });
                $('#hcf-wrapper').css({
                    'padding-bottom': '10px'
                });
            });
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true
            });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $("body").css({
                "padding-right": integration.custom.FrameSideRight
            });
            $("#urban-leaderboard").css({
                "position" : "absolute",
                "height" : "1px",
                "width" : "1px",
                "overflow" : "hidden",
                "min-height" : "0px",
                "min-width" : "0px",
                "margin" : "0px",
                "padding" : "0px",
                "background-color" : "initial"
            });

            if ($(".page-header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter(".page-header");
                integration.base.setCfg({
                    "plr_AnchorParent": "#inskinanchor",
                    "plr_PageHeightAdjustment": -42
                });
            }
            var headerHeight = $(".page-header").height();
            $("#inskinanchor").css({
                "margin-top": headerHeight
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