integration.meta = {
    'sectionID': '000123',
    'siteName': 'Network Testing Integration - DO NOT USE',
    'platform': 'ALL',
    'restrictions': ''
};
//For KW testing on Evening Standard
//integration.channelHome = ['/news', '/news/crime', '/sport/football', '/news/london', '/showbiz', '/sport/football/chelsea', '/comment', '/news/politics', '/business', '/sport/football/tottenham', '/'];

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
   // 'BASE_URL' : 'https://techops.inskinmedia.com/~dsofowote/isapdai/isfe/out/min',
    'mf_siteId': '1065547', //Dans Ad Zerk Test Site - 1065547 / Integrations Test ID - 706089
    'plr_PageAlignment': 'center',
    'plr_Fluid': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseCreativeSettings': true,
    //'plr_URLKeywords' : 2,
	//'plr_PageScanExclude' : ' .w103, .w4 , .#footer, .single '
    //'plr_EnableLotame': true,
	//'plr_Multiwin':true, 
   // 'plr_SendInvalidToAdzerk' : true,
    //'plr_AdzerkOnly' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        desktopIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 960,
                'plr_PageAlignment' : 'center',
                'plr_FastInit' : true
            });

            $(".box").css({
                "max-width" : "960px",
                "margin" : "0 auto"
            });

            console.log("test HB");
        }

        tabletIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 960,
                'plr_PageAlignment' : 'center'
            });

            $(".box").css({
                "max-width" : "960px",
                "margin" : "0 auto"
            });

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                integration.base.setCfg({
                    plr_PageAlignment : 'left'
                });
            }
        }

        smartphoneIntegration = function() {
            console.log("si");
            integration.base.setCfg({
                'plr_FluidAnchor' : true,
                'plr_Responsive' : true
            });
        }

        if(e.data.format == 'Pagelead Video') {
            console.log("gr");
            $("html").css({
                "padding-right" : "0px"
            });
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