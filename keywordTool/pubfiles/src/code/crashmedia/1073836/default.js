integration.meta = {
    'sectionID': '129361',
    'siteName': 'GolfMagic - (HEADER BIDDING) - Desktop - (INT)',
    'platform': 'header bidding'
};

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1073836',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1000,
    'srv_SectionID': '129361',
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
                'plr_PageAlignment': 'center'
            });

            $('.header.js-header').css({
                'max-width': '980px',
                'margin': 'auto',
                'margin-top': '-9px',
            });

            $('.footer').css({
                'max-width': '980px',
                'margin': 'auto',
                'display': 'block',
                'margin-bottom': '-9px'
            });
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1000,
                'plr_PageAlignment': 'center'
            });

            $('.header.js-header').css({
                'max-width': '980px',
                'margin': 'auto',
                'margin-top': '-9px',
            });

            $('.footer').css({
                'max-width': '980px',
                'margin': 'auto',
                'display': 'block',
                'margin-bottom': '-9px'
            });

            integration.on('adServed', function(){
                var headHeight = $(".menu-bottom").outerHeight();
                $(".ism-anchor").css({
                    "top" : headHeight
                });
            });

            if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
                /* PageSkin Edge specific changes */
                integration.base.setCfg({
                    'plr_PageAlignment': 'left'
                });
                $("#main").css({
                    "max-width": "980px"
                });

                integration.on('adServed', function(){
                    var headHeight = $(".menu-bottom").outerHeight();
                    $(".ism-anchor").css({
                        "margin-top" : headHeight
                    });
                });
            }   
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true
            });


            $("html").addClass("inskinLoaded");
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded {overflow:visible !important;padding-right:75px;}';
            stylesCSS += '.inskinLoaded .header .branding .login{top:33px;right:3px;}';
            stylesCSS += '</style>';
            $('head').append(stylesCSS);

            if ($(".node-type-article").length < 1) {
                integration.base.setCfg({
                    plr_GetContentHeightVersion: 1
                });
            }

            integration.on("adClose", function (e) {
                $("html").removeClass("inskinLoaded");
                //$("#inskinanchor").remove();
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