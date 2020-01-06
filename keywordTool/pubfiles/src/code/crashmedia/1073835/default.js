integration.meta = {
    'sectionID': '129360',
    'siteName': ' Crash - (HEADER BIDDING) - DESKTOP - (INT) ',
    'platform': 'header bidding'
};

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1073835',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1000,
    'srv_SectionID': '129360',
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
                'plr_FastInit': true,
                "plr_ScrollAdjustment": 26,

            });
            if ($(".menu-area").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter(".menu-area");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                    plr_PageHeightAdjustment: -50
                });
            }
            $("head").append("<style>#footer-wrapper{max-width: 1000px !important; margin: auto;}</style>");

            integration.on("adServed", function (e) {
                $(".ism-frame").parent().css({
                    "z-index": "1005"
                });
            });
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1000,
                'plr_PageAlignment': 'center',
                'plr_FastInit': true
            });

            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $("head").append("<style>.mc-modal{right: " + (integration.custom.FrameSideRight + 10) + "px;}</style>");
            if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
                /* Pageskin Edge specific changes */
                integration.base.setCfg({
                    'plr_PageAlignment': 'left'
                });
                $("head").append("<style>#page-wrapper{margin: 0 !important;}</style>");
                $("head").append("<style>.mc-modal{right: " + (integration.custom.FrameSideRight + 30) + "px;}</style>");
            }

            integration.on('layoutChange', function (e) {
                $(".ism-frame").parent().css({
                    "z-index": "99999"
                });
            });
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true,
                'plr_GetContentHeightVersion': 1,
                'plr_FastInit': true,
                "plr_Responsive": true,
                "plr_ShowCloseButton": true
            });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $("body").addClass("inskinLoaded");
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded{padding-right' + integration.custom.FrameSideRight + 'px}';
            stylesCSS += '.inskinLoaded .col-thumb img{width:100%;}';
            stylesCSS += '.inskinLoaded .field-name-comment-body p:first-child, .inskinLoaded .view-display-id-latest_articles_block .views-row{overflow:hidden;word-wrap:break-word;}';
            stylesCSS += '.inskinLoaded #advert-banner-container, #jpx-is-wrapper{min-height:0px;padding:0px;}';
            stylesCSS += '</style>'
            $('head').append(stylesCSS);

            integration.on('layoutChange', function (e) {
                
                var stylesCSS = '<style id="inskinStyles" type="text/css">';
                stylesCSS += '</style>'
                $('head').append(stylesCSS);
                integration.custom.laychange();
                $(window).on('resize', function () {
                    integration.custom.laychange();
                });
            });

            integration.custom.laychange = function () {
                var windowWidth = $(window).width();
                var contentWidth = windowWidth - integration.custom.FrameSideRight;
                var newValue = ".inskinLoaded #main #content{max-width:" + (contentWidth - 30) + "px;} .inskinLoaded #block-system-main{max-width:" + contentWidth + "px;}";
                document.getElementById("inskinStyles").innerHTML = newValue;
            }

            integration.on("adClose", function (e) {
                $("body").removeClass("inskinLoaded");
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