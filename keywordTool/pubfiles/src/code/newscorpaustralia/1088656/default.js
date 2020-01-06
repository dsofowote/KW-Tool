integration.meta = {
    'sectionID': '129776',
    'siteName': 'News.com.au - (Creative Approval) - Header Bidding - (AU)',
    'platform': 'header bidding'
};

integration.params = {
    'mf_siteId': '1088656',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1000,
    'srv_SectionID': '129776',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_Multiwin': false,
    //'plr_FastInit': true
};

integration.on('parametersSet', function () {
    //To support two different layout widths
    var contentWidth = document.getElementById("page").clientWidth;
    integration.params.plr_ContentW = contentWidth;
});

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        desktopIntegration = function () {
            integration.base.setCfg({
                'plr_PageAlignment': 'center'
            });

            $("header, body").css({
                "margin-top": "0px"
            });

            $(".ad-billboard").hide();

            integration.on('adServed', function () {
                //remove for live integration
                $("#header-ads-container").css({
                    "display": "none"
                });
                if ($("body.articlepage").length == 1) {
                    var navHeight = $("#header").outerHeight() + $("#network-bar").outerHeight() + $("nav").outerHeight();
                    $(".ism-anchor, #page").css({
                        "position": "relative",
                        "top": navHeight
                    });
                }

                var styles = "<style id='inskinStyles'></style>";
                $("head").append(styles);
                var headerFix = function () {
                    integration.custom.frameTop = e.data.plr_FrameTop;
                    var scrollPos = $(window).scrollTop();

                    var headHeight = $("#header").outerHeight();
                    var nbarHeight = $("#network-bar").outerHeight();
                    var belowHeader = integration.custom.frameTop + headHeight;
                    console.log(scrollPos, nbarHeight);
                    if ($("body.home").length == 1) {
                        if (scrollPos <= belowHeader) {
                            $("#inskinStyles").html("#nav{top:0px !important;position:relative !important;}");
                        } else {
                            $("#inskinStyles").html("#nav{top:0px !important;position:fixed !important}");
                        }
                    } else if ($("body.home").length == 0 && $("body.category").length == 0) {
                        if (scrollPos <= belowHeader) {
                            $("#inskinStyles").html("#header{top:0px !important;position:relative !important;}body nav{top:10px !important;}#header,body nav, #network-bar{position:relative !important;}");
                        } else {
                            $("#inskinStyles").html("#header{top:" + nbarHeight + "px !important;position:fixed !important}body nav{top:" + (headHeight + nbarHeight) + "px !important;}#header,body nav, #network-bar{position:fixed !important;}nav.animate{transform: translate(0," + (-headHeight - nbarHeight) + "px) !important;}#network-bar{z-index:100 !important}");
                        }
                    }
                };
                headerFix();

                $(window).on('scroll', function () {
                    headerFix();
                });

            });
        }

        tabletIntegration = function () {
            var navHeight = $("header.page-main-header").outerHeight();
            integration.base.setCfg({
                'plr_ContentW': integration.custom.siteWidth,
                'plr_PageAlignment': 'center',
                'plr_PageHeightAdjustment': -navHeight
            });

            $(".page-main-header").css({
                "height": "0px",
                "position": "relative"
            });

            $(".page-main-content, footer").css({
                "width": "1000px",
                "margin-top": navHeight,
                "margin-left": "auto",
                "margin-right": "auto"
            });

            integration.on('adServed', function () {
                $(".ism-anchor").css({
                    "top": navHeight,
                    "position": "relative"
                });
            });

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                $(".page-main-content, footer,#page").css({
                    "margin-left": "0"
                });
                integration.base.setCfg({
                    'plr_PageAlignment': 'left',
                });
            }


        };
        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true
            });
            integration.on('adClose', function (e) {
                $('body').removeClass('inskinLoaded');
                $("#inskinanchor").remove();
            });
            var headHeight = $("#header-fixed").outerHeight();
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            if ($("#header-fixed").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter("#header-fixed");
                integration.base.setCfg({
                    'plr_AnchorParent': '#inskinanchor',
                    'plr_PageHeightAdjustment': -65
                });
            }
            $('body').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded{padding-right: ' + integration.custom.FrameSideRight + 'px;}';
            stylesCSS += '.inskinLoaded #inskinanchor{top: ' + headHeight + 'px !important; position: relative;}';
            stylesCSS += '</style>';
            $('head').append(stylesCSS);
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