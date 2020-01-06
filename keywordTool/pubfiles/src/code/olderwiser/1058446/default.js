integration.meta = {
    'sectionID': '129145',
    'siteName': '50 Connect Header Bidding - (All Devices) - Header bidding - ( UK )',
    'platform': 'header bidding'
};

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1058446',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 990,
    'srv_SectionID': '129145',
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
            //For Everywhere except homepage
            integration.base.setCfg({
                'plr_ContentW': 990,
                "plr_PageAlignment": "center",
                "plr_HideElementsByID": "leaderboard2, mpu2, mpu1, leaderboard, [id^=zzPagePeel46752], lb_ifr",
                "plr_HideElementsByClass": "ad, leaderboard, leaderboard_ads, mpu_ads",
                "plr_FastInit": true,
                "plr_ServePassbackInIframe": true
            });

            $(".wide-skyscraper, .ad.billboard").hide();
            $("body").css({
                "width": "1000px",
                "margin": "0 auto"
            });
            $("#footer").css({
                "margin-bottom" : "20px"
            })

            integration.on("layoutChange", function (e) {
                frtop = e.data.plr_FrameTop;
                $("body").css({
                    "background-position": "0 " + frtop + "px"
                });

            });

            integration.on("adServed", function (e) {
                $(".ism-frame").parent().css({
                    "z-index": "100"
                });
            });
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 990,
                'plr_PageAlignment': 'center'
            });

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                integration.base.setCfg({
                    plr_PageAlignment: 'left'
                });
            }
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true
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