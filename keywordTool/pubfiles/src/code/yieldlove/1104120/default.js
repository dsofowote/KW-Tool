integration.meta = {
    'sectionID' : '130110',
    'siteName' : 'Korrekturen - Header bidding - ( AT CH DE )',
    'platform' : 'header bidding'
};

integration.params = {
    'mf_siteId' : '1104120',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1280,
    'srv_SectionID': '130110',
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
                'plr_ContentW' : 1280,
                'plr_PageAlignment' : 'center'
            });
            $("#wrappertop, #wrapperfuss").css({"margin": "0 auto", "max-width": "1280px"});
        }

        tabletIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 1280,
                'plr_PageAlignment' : 'center'
            });

            $("#wrappertop, #wrapperfuss").css({"margin": "0 auto", "max-width": "1280px"});
            $("body ").css({"height": "auto"});

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                integration.base.setCfg({
                    plr_PageAlignment : 'left'
                });
                $("body ").css({"max-width": "1280px"});
            }
        }

        smartphoneIntegration = function() {
            integration.base.setCfg({
                'plr_FluidAnchor' : true,
                'plr_Responsive' : true
            });

            $('html').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded {height: auto}';
            stylesCSS += '.inskinLoaded {}';
            stylesCSS += '</style>'
            $('head').append(stylesCSS);
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
