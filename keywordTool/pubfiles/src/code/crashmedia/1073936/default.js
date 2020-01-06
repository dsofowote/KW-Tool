integration.meta = {
    'sectionID': '129362',
    'siteName': 'Visordown - Header bidding - ( INT )',
    'platform': 'header bidding'
};

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1073936',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1000,
    'srv_SectionID': '129362',
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
                'plr_ContentW': 1000,
                'plr_PageAlignment': 'center'
            });

            integration.on('adServed', function(){
                var headHeight = $(".desktop-menu").outerHeight();
                console.log(headHeight);
                $(".ism-anchor").css({
                    "top" : headHeight
                });
            });

            /* Add a spacer pixel to the bottom of the content (for content using float positioning) */
            integration._addPixel();
            $("#footer").css({
                "width": "1000px",
                "margin": "0 auto"
            });
            $("#ismIMG").css({
                "height": "1px",
                "max-height": "1px",
                "min-height": "1px"
            });
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1000,
                'plr_PageAlignment': 'center'
            });

            $('body').css({
                "width": "1000px",
                'margin': '0 auto'
            });

            integration.on('adServed', function(){
                var headHeight = $(".desktop-menu").outerHeight();
                $(".ism-anchor").css({
                    "top" : headHeight
                });
            });

            if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
                /* PageSkin Edge specific changes */
                integration.base.setCfg({
                    'plr_PageAlignment': 'left'
                });
                $('body').css({
                    "width": "1000px",
                    'margin-left': '20px'
                });
            }
            integration._addPixel();
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true
            });

            $("html").addClass("inskinLoaded");
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded{padding-right: 75px}';
            stylesCSS += '.inskinLoaded .vd-container{margin-left: -10px}';
            stylesCSS += '</style>'
            $('head').append(stylesCSS);

            integration.on("layoutChange", function (e) {
                integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
                integration.custom.ismorientation();
                $(window).on("resize", function () {
                    integration.custom.ismorientation();
                });
            });

            integration.custom.ismorientation = function () {
                var winWidth = $(window).width() - integration.custom.PageSkinRightPanel - 1;
                $("html").addClass("inskinLoaded");
                var stylesCSS = '<style type="text/css">';
                stylesCSS += '.inskinLoaded .vd-main-col, .inskinLoaded table{max-width: ' + (winWidth - 20) + 'px !important;}';
                stylesCSS += '</style>'
                $('head').append(stylesCSS);
            }

            integration.on("adClose", function (e) {
                $("html").removeClass("inskinLoaded");
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