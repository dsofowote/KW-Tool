integration.meta = {
    'sectionID': '000123',
    'siteName': 'Integrations Header Bidding - DO NOT USE',
    'platform' : 'header bidding',
    'restrictions': ''
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1065547', //Dans Ad Zerk Test Site - 1065547,
    'srv_SectionID': '000000',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 960,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseCreativeSettings': true,
    'plr_Multiwin' : false,
    //'BASE_URL' : 'https://techops.inskinmedia.com/~dsofowote/isapdai/isfe/out/min',
    'plr_FastInit' : true
    //'BASE_URL' : 'https://techops.inskinmedia.com/~dsofowote/trackcpm/isfe/out/min/'
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        desktopIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 1020,
                'plr_PageAlignment' : 'center'
            });

            console.log("test HB")
        }

        tabletIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 1020,
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