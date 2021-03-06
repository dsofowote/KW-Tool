integration.meta = {
    'sectionID' : '129147',
    'siteName' : 'Finanznachrichten Headerbidding - (HB ALL) - Desktop - (DE)',
    'platform' : 'header bidding'
};

integration.params = {
    'mf_siteId' : '1058628',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 960,
    'srv_SectionID': '129147',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_CheckOptOut' : false,
    'plr_Multiwin' : false,
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        desktopIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 960,
                'plr_PageAlignment' : 'center'
            });
        }

        tabletIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 960,
                'plr_PageAlignment' : 'center'
            });

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                integration.base.setCfg({
                    plr_PageAlignment : 'left'
                });
            }
        }

        smartphoneIntegration = function() {
            integration.base.setCfg({
                'plr_FluidAnchor' : true,
                'plr_Responsive' : true
            });
            //Site not responsive, this integration will not support smartphone
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

