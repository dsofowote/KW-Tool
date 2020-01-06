integration.meta = {
    'sectionID' : '129374',
    'siteName' : 'ISM_Gentside - (desktop only) - Header Bidding - (FR) (129374 )',
    'platform' : 'header bidding'
};

integration.params = {
    'mf_siteId' : '1074681',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 980,
    'srv_SectionID': '129374',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_Multiwin' : false,
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        desktopIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 980,
                'plr_PageAlignment': 'center'
            });

            if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
                integration.custom.isSuper = true;
            }
            if (integration.custom.isSuper) {
                var width = $(window).width();
                var sideWidth = (width - 984) / 2;
                $(".invite-popin").css({
                    "left": sideWidth + 20
                });
            }
            if ($(".header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter(".header");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                    'plr_PageHeightAdjustment': -64
                });
            }
            $("head").append("<style>.mdc-toolbar--fix{margin-top: 0 !important;}</style>");
            $('.wrapper, .footer').css({
                "max-width": "980px",
                "margin": "0 auto"
            });
            $('#inskinanchor').css({
                "position": "relative",
                "margin-top": 64
            });

            integration.on('adServed', function (e) {
                setTimeout(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 500);
            });
        }

        switch (e.data.device) {
            case 'Desktop':
                desktopIntegration();
                break;
        }
    }
});

