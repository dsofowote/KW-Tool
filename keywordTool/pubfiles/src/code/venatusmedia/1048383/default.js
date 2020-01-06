integration.meta = {
    'sectionID' : '129078',
    'siteName' : ' Mobafire - (Header Bidding) - (INT)',
    'platform' : 'header bidding'
};

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1048383',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 960,
    'srv_SectionID': '129078',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        desktopIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 1136,
                'plr_PageAlignment' : 'center',
                'plr_FastInit' : true
            });
            integration.custom.headHeight = $("#collapsing-header").outerHeight() + $("#headerHolder").outerHeight();
            $("body").css({
                "padding-top" : integration.custom.headHeight
            });

            integration.on('adServed', function(){
                $(".ism-frame").parent().css({
                    "z-index" : "100000"
                    // "top" : integration.custom.headHeight,
                    // "position" : "relative"
                });
            });
        }

        tabletIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 1136,
                'plr_PageAlignment' : 'center'
            });

            integration.custom.headHeight = $("#collapsing-header").outerHeight() + $("#headerHolder").outerHeight();
            $("body").css({
                "padding-top" : integration.custom.headHeight
            });

            integration.on('adServed', function(){
                $(".ism-frame").parent().css({
                    "z-index" : "100000"
                    // "top" : integration.custom.headHeight,
                    // "position" : "relative"
                });
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
        //Not responsive therefore not supported
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

