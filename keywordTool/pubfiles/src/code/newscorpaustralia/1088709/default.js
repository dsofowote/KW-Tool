integration.meta = {
    'sectionID': '129801',
    'siteName': 'Delicious - (Creative Approval) - Header Bidding - (AU) ',
    'platform': 'header bidding'
};

integration.params = {
    'mf_siteId': '1088709',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1030,
    'srv_SectionID': '129801',
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
                'plr_ContentW': 1030,
                'plr_PageAlignment': 'center'
            });

            $(".navbar-header-container, header.page-main-header").css({
                "max-width": "1000px",
                "margin": "0 auto"
            });
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1030,
                'plr_PageAlignment': 'center'
            });

            $(".navbar-header-container, header.page-main-header").css({
                "max-width": "1000px",
                "margin": "0 auto"
            });

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                integration.base.setCfg({
                    plr_PageAlignment: 'left'
                });
                $(".navbar-header-container, header.page-main-header, .container").css({
                    "margin-left": "0"
                });

            }
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true
            });
            
            integration.custom.contentWidth = $(window).width() - e.data.plr_FrameSideRight;
            $('html').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded {padding-right:76px !important;}';
            stylesCSS += '.inskinLoaded .list-item-vertical.list-item-main figure figcaption{width: ' + integration.custom.contentWidth + 'px !important;}';
            stylesCSS += '.inskinLoaded .block-article-author-data.author-data {margin-top:30px;position:relative}';
            stylesCSS += '.inskinLoaded main{margin-top:10px}';
            stylesCSS += '</style>';
            $('head').append(stylesCSS);

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