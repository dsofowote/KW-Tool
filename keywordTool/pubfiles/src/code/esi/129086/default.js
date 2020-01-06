integration.meta = {
    'sectionID': '129086',
    'siteName': 'The Evening Standard - Smartphone - ( UK )',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1049262',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var windowWidth = $(window).width();
        var contentWidth = windowWidth - integration.custom.FrameSideRight;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #full-menu{padding-top:0px}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);

        $(".toggle-menu").click(function () {
            if ($("body").hasClass("full-menu-visible")) {
                integration.base.hideAd();
                $("#full-menu").css({
                    "min-width": windowWidth
                });
            } else {
                integration.base.showAd();
                $("#full-menu").css({
                    "min-width": contentWidth
                });
            }
        });
        if (windowWidth <= 375) {
            $("#mpu0ArticleBody").css({
                "position": "relative",
                "left": "-20px"
            });
        } else if (windowWidth > 375) {
            $("#mpu0ArticleBody").css({
                "margin": "0 auto"
            });
        }
        $("#mpu0ArticleBody iframe").css({
            "width": contentWidth,
            "max-width": contentWidth
        });
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({
            'plr_FixedTop': true,
            'plr_EnableSwipe': true
        });
    }
});

integration.on('adClose', function (e) {
    $('body').removeClass('inskinLoaded');
});