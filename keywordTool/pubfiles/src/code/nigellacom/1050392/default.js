integration.meta = {
    'sectionID': '129088',
    'siteName': 'Nigella - DESKTOP (Header Bidding) - (INT)',
    'platform': 'header bidding'
};

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1050392',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1200,
    'srv_SectionID': '129088',
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
                'plr_ContentW': 1200,
                'plr_PageAlignment': 'center'
            });

            $("#footer").css({
                "max-width": "1200px",
                "margin": "0 auto"
            });
            $(".ad.billboard.from-desktop").css({
                "display": "none"
            });

            integration.on('adServed', function (e) {
                $(".ism-frame").parent().addClass("injected-advert");
            });
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_Fluid' : true,
                'plr_FluidAnchor': true,
                'plr_Responsive': true,
                "plr_FastInit": true,
                "plr_ShowCloseButton": true,
                //"plr_GetContentHeightVersion" : 2
            });

            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            integration.custom.FrameTop = e.data.plr_FrameTop;
            var windowWidth = $(window).width();
            var contentWidth = windowWidth - integration.custom.FrameSideRight;
            $("body").addClass("inskinLoaded");
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded .container.fixed-column{padding:0px;}';
            stylesCSS += '.inskinLoaded main.container{padding:0px}';
            stylesCSS += '.inskinLoaded nav.main{margin-top: ' + integration.custom.FrameTop + 'px;}';
            stylesCSS += '.inskinLoaded .page-container, .inskinLoaded .footer, body{max-width: ' + contentWidth + 'px;margin:0px}';
            stylesCSS += '.inskinLoaded .recipe.has-image.recipe-image{max-width: ' + (contentWidth - 20) + 'px; margin:0 auto;}';
            stylesCSS += '.inskinLoaded .ad.mobile{display:none;}';
            stylesCSS += '</style>';
            $('head').append(stylesCSS);

            integration.on('adServed', function (e) {
                $(".ism-frame").parent().css({
                    "z-index": "100000"
                });
            });

            integration.on("adClose", function (e) {
                $("body").removeClass("inskinLoaded");
            });

            if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
                integration.base.setCfg({
                    'plr_FixedTop': true,
                    'plr_EnableSwipe': true,
                });
            }

            window.ISMPassback = function() {
                return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\n  googletag.pubads().definePassback('/3595/Nigella_Mobile/Inskins_MOB', [320, 50]).display();\n\n<\\script>"
            }
        }    

        switch (e.data.device) {
            case 'Desktop':
                desktopIntegration();
                break;
            case 'Smartphone':
                smartphoneIntegration();
                break;
        }
    }
});