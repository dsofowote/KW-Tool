integration.meta = {
    'sectionID': '130029',
    'siteName': 'Metro Header Bidding - Smartphone - ( UK ) ',
    'platform': 'header bidding'
};

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1100383',
    'srv_SectionID': '130029',
    'plr_FluidAnchor': true,
    'plr_Responsive': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_Multiwin': false
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true
            });
        }

        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var headHeight = $("#masthead").outerHeight();
            $('html').addClass('inskinLoaded');
            var stylesCSS = '<style id="inskinStyles" type="text/css">';
            stylesCSS += '.inskinLoaded {padding-right:' + integration.custom.FrameSideRight +'px !important;}';
            stylesCSS += '.ism-anchor {position:relative;top:' + headHeight +'px;z-index:10000}';
            stylesCSS += '.inskinLoaded .ad-slot.ad-slot-small.page-top-leaderboard{display:none}'
            stylesCSS += '</style>';
            $('head').append(stylesCSS);

        switch (e.data.device) {
            case 'Smartphone':
                smartphoneIntegration();
                break;
        }
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({
            'plr_FixedTop': true,
            'plr_EnableSwipe': true,
        });
    }
});