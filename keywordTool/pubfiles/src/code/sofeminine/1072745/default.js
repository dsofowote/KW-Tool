integration.meta = {
    'sectionID' : '129335',
    'siteName' : ' Netmums - (HB ALL) - Headerbidding - (UK)',
    'platform' : 'header bidding'
};

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072745',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1000,
    'srv_SectionID': '129335',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_Multiwin' : false,
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        desktopIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 1000,
                'plr_PageAlignment' : 'center'
            });

            $("footer").css({
                "max-width" : "1000px",
                "margin" : "0 auto"
            });
        }

        tabletIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 1000,
                'plr_PageAlignment' : 'center'
            });

            $("footer").css({
                "max-width" : "1000px",
                "margin" : "0 auto"
            });

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                integration.base.setCfg({
                    plr_PageAlignment : 'left'
                });
                $(".page, footer").css({
                    "margin-left" : "0px"
                });
            }
        }

        smartphoneIntegration = function() {
            integration.base.setCfg({
                'plr_FluidAnchor' : true,
                'plr_Responsive' : true
            });
            
            var windowWidth = $(window).width();
            $('html').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded{padding-right:75px}';
            stylesCSS += '.inskinLoaded .nmg-header{width:' + windowWidth + 'px}';
            stylesCSS += '</style>'
            $('head').append(stylesCSS);

            if ($(".nmg-header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter(".nmg-header");
                integration.base.setCfg({
                    plr_AnchorParent : "#inskinanchor"
                });
    }
            
        }

        if(e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
            integration.base.setCfg({'plr_FixedTop' : true,'plr_EnableSwipe' : true,});
        }

        switch(e.data.device){
            case 'Desktop' :
                desktopIntegration();
                break;
            case 'Tablet' :
                tabletIntegration();
                break;
            case 'Smartphone' :
                smartphoneIntegration();
                break;
        }
    }
});

