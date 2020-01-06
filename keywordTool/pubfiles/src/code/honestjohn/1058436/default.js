integration.meta = {
    'sectionID': '129146',
    'siteName': 'Honest John - All Devices - (UK)',
    'platform': 'header bidding'
};

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1058436',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1002,
    'srv_SectionID': '129146',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_FastInit': true,
    'plr_Multiwin' : false,
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        desktopIntegration = function () {
            integration.base.setCfg({
                'plr_PageAlignment': 'center',
                'plr_ContentW': 1002,
                'plr_ContentType': 'PAGESKINEXPRESS',
                'plr_UseFullVersion': true,
                'plr_UseCreativeSettings': true,
                'plr_HideElementsByID': '',
                'plr_HideElementsByClass': '',
                'plr_FastInit': true
            });
            console.log("desktop honest john");
            /* Passback Tag */
            window.ISMPassback = function () {
                return "<script>\nwindow.top.postMessage({action:'passback',keyword:'inskin_passback'}, '*');\n<\\script>";
            };
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_PageAlignment': 'center',
                'plr_ContentW': 1002,
                'plr_ContentType': 'PAGESKINEXPRESS',
                'plr_UseFullVersion': true,
                'plr_UseCreativeSettings': true,
                'plr_HideElementsByID': '',
                'plr_HideElementsByClass': '',
                'plr_FastInit': true
            });

            $("body").css({
                "background-image": "none"
            });

            /* format the site for PageSkin Edge */
            if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
                $("#page_template").css({
                    "margin-left": "1px"
                });
                $("#header_bar_inner").css({
                    "margin-left": "1px"
                });
                integration.base.setCfg({
                    plr_PageAlignment: "left"
                });
            } else {
                $('head').append('<style type="text/css"> #page_template {margin:0 auto !important;}</style>');
            }

            /* Passback Tag */
            window.ISMPassback = function () {
                return "<script>\nwindow.top.postMessage({action:'passback',keyword:'inskin_passback'}, '*');\n<\\script>";
            };
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Fluid': true,
                'plr_ContentType': 'PAGESKINEXPRESS',
                'plr_UseFullVersion': true,
                'plr_UseCreativeSettings': true,
                'plr_HideElementsByID': '',
                'plr_HideElementsByClass': '',
                'plr_GetContentHeightVersion': 2,
                "plr_Responsive": true,
                "plr_ShowCloseButton": true,
                'plr_FastInit': true
            });

            var windowWidth = $(window).width();
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $("body").addClass("inskinLoaded");
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded #page_content{padding-top:20px;}';
            stylesCSS += '.inskinLoaded #page_header{position:relative;}';
            stylesCSS += '.inskinLoaded .toptenMainImage{margin-top:50px;}';
            stylesCSS += '.inskinLoaded .reviewImagesBottom.toptenThumbs{margin-left:6px;}';
            stylesCSS += '.inskinLoaded #page_content, .inskinLoaded #page_header, .inskinLoaded #page_footer {max-width:' + (windowWidth - integration.custom.FrameSideRight) + 'px}';
            if (windowWidth < 375) {
                stylesCSS += '.inskinLoaded #page_header img{width:75%;}';
            } else {
                stylesCSS += '.inskinLoaded #page_header img{width:85%;}';
            }
            stylesCSS += '.inskinLoaded{padding-right:74px;}';
            stylesCSS += 'html{padding-right:0px;}';
            stylesCSS += '</style>';
            $('head').append(stylesCSS);

            if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
                integration.base.setCfg({
                    'plr_FixedTop': true,
                    'plr_EnableSwipe': true
                });
            }


            integration.on('layoutChange', function (e) {
                integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
                $("#ChatWindowIcon").css({
                    "right" : integration.custom.FrameSideRight
                });
                $("#mobileNav").css({
                    "top" : "160px"
                });
                integration.custom.laydetect();
                $("head").append("<style>.inskinLoaded #menuButton{right:0px;left:initial}</style>");

                $(window).on('resize', function () {
                    integration.custom.laydetect();
                });
            });

            integration.custom.laydetect = function () {
                /*Ensuring gallery fits within content*/
                var wwidth = $(window).width();
                var wheight = $(window).height();
                var wcontent = wwidth - integration.custom.FrameSideRight
                var gal1 = $(".toptenThumbNumber").width();
                var galwidth = wcontent - gal1;

                if (wwidth > wheight) {
                    $("head").append("<style>.inskinLoaded .reviewImagesBottom.toptenThumbs{width: " + galwidth + "px;}</style>");
                } else {
                    $("head").append("<style>.inskinLoaded .reviewImagesBottom.toptenThumbs{width: " + galwidth + "px;}</style>");
                }
            }
            integration.on("adClose", function (e) {
                $("body").removeClass("inskinLoaded");
                //$("#inskinanchor").remove();
            });

            /* Passback Tag */
            window.ISMPassback = function () {
                return "<script>\nwindow.top.postMessage({action:'passback',keyword:'inskin_banner'}, '*');\nwindow.top.postMessage({action:'passback',keyword:'inskin_floating'}, '*');\n<\\script>";
            };
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