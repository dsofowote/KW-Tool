integration.meta = {
    'sectionID': '129319',
    'siteName': 'Doctissimo - (HB ALL) - Headerbidding - (FR)',
    'platform': 'header bidding'
};

integration.params = {
    'mf_siteId': '1072265',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1020,
    'srv_SectionID': '129319',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_FastInit' : true,
    'plr_Multiwin' : false,
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        desktopIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1020,
                'plr_PageAlignment': 'center'
            });
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1020,
                'plr_PageAlignment': 'center'
            });

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                integration.base.setCfg({
                    plr_PageAlignment: 'left'
                });
                $("#doc-menu-mobile-wrapper").css({
                    "margin": "0"
                });
            }
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true
            });
            integration.custom.frameSideRight = e.data.plr_FrameSideRight;
            var windowWidth = $(window).width();
            var contentWidth = windowWidth - integration.custom.frameSideRight;
            
            $('html').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded{padding-right:' + integration.custom.frameSideRight + 'px}';
            stylesCSS += '.inskinLoaded .img-slideshow {max-width:' + contentWidth + 'px}';
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