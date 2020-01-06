integration.meta = {
    'sectionID': '130005',
    'siteName': '90min.com - Smartphone (HEADER BIDDING) - (INT)',
    'platform': 'header bidding'
};

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1099031',
    'srv_SectionID': '130005',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_Multiwin' : false
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true,
                'plr_FastInit': true
            });

            integration.on("adServed", function (e) {
                var headHeight = $('#site-header').height() + $('.mobile-nav-main-wrapper').height();
                $(".ism-frame").parent().css({
                    "top": headHeight
                });
                integration.base.setCfg({
                    plr_PageHeightAdjustment: -headHeight
                })
            });
        }

        if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
            integration.base.setCfg({
                'plr_FixedTop': true,
                'plr_EnableSwipe': true,
            });
        }

        switch (e.data.device) {
            case 'Smartphone':
                smartphoneIntegration();
                break;
        }
    }
});