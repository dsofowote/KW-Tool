integration.meta = {
    'sectionID' : '129807',
    'siteName' : 'Leader News - (Creative Approval) - Header Bidding - (AU)',
    'platform' : 'header bidding'
};

integration.params = {
    'mf_siteId' : '1088718',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 960,
    'srv_SectionID': '129807',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_Multiwin' : false,
    "plr_GetContentHeightVersion" : 2,
    'plr_ForceFrameBottom' : 0,

};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        // integration._addPixel()
        desktopIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 960,
                'plr_PageAlignment' : 'center',
                // "plr_GetContentHeightVersion" : 2,
            });
            $("#nav--primary__wrap, .footer, #nav--secondary, #nav--secondary__wrap").css({"margin": "0 auto", "max-width": "960px"});
        }

        tabletIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 960,
                'plr_PageAlignment' : 'center',
                // "plr_GetContentHeightVersion" : 2,
            });
            $("#nav--primary__wrap, .footer, #nav--secondary, #nav--secondary__wrap").css({"margin": "0 auto", "max-width": "960px"});

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                $(".main").css({"max-width": "960px"});
                integration.base.setCfg({
                    plr_PageAlignment : 'left',
                });
            }
        }

        smartphoneIntegration = function() {
            integration.base.setCfg({
                'plr_FluidAnchor' : true,
                'plr_Responsive' : true
            });
            $('html').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded {padding: 0px 74px 0px 0px; overflow: visible !important}';
            stylesCSS += '.inskinLoaded #inskinanchor {padding-bottom: 25px}';
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

