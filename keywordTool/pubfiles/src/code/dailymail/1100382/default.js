integration.meta = {
    'sectionID': '130028',
    'siteName': ' Metro Header Bidding - Desktop - ( UK ) ',
    'platform': 'header bidding'
};

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1100382',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 984,
    'srv_SectionID': '130028',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_Multiwin' : false
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        desktopIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 984,
                'plr_PageAlignment': 'center',
                "plr_FastInit": true
            });
        }

        switch (e.data.device) {
            case 'Desktop':
                desktopIntegration();
                break;
        }
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width > 1540 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 984)/2; /* content width divided by 2 */
        $('head').append('<style>#metro_chromeless{right:' + sideWidth + 'px !important}</style>');
    } else {
        $('head').append('<style>#metro_chromeless{right:10px !important}</style>');

    }
}