integration.meta = {
    'sectionID': '129797',
    'siteName': 'Body & Soul - (Creative Approval) - Header Bidding - (AU)',
    'platform': 'header bidding'
};

integration.params = {
    'mf_siteId': '1088705',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1000,
    'srv_SectionID': '129797',
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

            integration.on('adServed', function(){
                $(".ism-anchor").css({
                    "z-index" : "1000"
                });
            });
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1000,
                'plr_PageAlignment': 'center'
            });

            $("#bottom").css({
                "margin-left" : "auto",
                "margin-right" : "auto"
            });

            $("#footer").css({
                "max-width" : "1000px",
                "margin" : "0 auto"
            });

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                integration.base.setCfg({
                    plr_PageAlignment: 'left'
                });
                $("#footer, #page").css({
                    "margin-left" : "0px"
                });
            }

            integration.on('adServed', function(){
                $(".ism-anchor").css({
                    "z-index" : "1000"
                });
            });
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true
            });
            var navHeight = $("#header-fixed").outerHeight();
            if ($("#header-fixed").length == 1) {
                if (navHeight == 0){
                    //force a value incase user scrolled down and nav is collapsed/height calculated incorrectly
                    navHeight = 75
                }
                $("<div id='inskinanchor'></div>").insertAfter("#header-fixed");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                    plr_PageHeightAdjustment: -navHeight
                });
            }

            integration.on('adServed', function(){
                $(".ism-anchor").css({
                    "top" : navHeight,
                    "position" : "relative"
                });
            });

            $('html').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded {padding-right:76px !important;}';
            stylesCSS += '.inskinLoaded #mobile-nav.show-nav{top:0px;z-index:99}';
            stylesCSS += '.inskinLoaded #footer {padding-bottom:0px;}';
            stylesCSS += '</style>';
            $('head').append(stylesCSS);

            integration.on('adClose', function(e) {
                $('body,html').removeClass('inskinLoaded');
                $("#inskinanchor").remove();
            });

            integration.on('adServed', function(){
                // $(".ism-anchor").css({
                //     "z-index" : "1000"
                // });
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