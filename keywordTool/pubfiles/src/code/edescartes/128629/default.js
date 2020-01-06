integration.meta = {
    'sectionID': '128629',
    'siteName': 'Tagsis - Smartphone - (HK)',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1027577',
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
        var contentWidth = $(window).width() - integration.custom.FrameSideRight;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded img.latest-video-image{height:auto}';
        stylesCSS += '.inskinLoaded #home-article-slider > li{width: ' + contentWidth + 'px !important;}';
        stylesCSS += '@media only screen and (max-width: 395px){.inskinLoaded .ads-box.ads-300{margin-left: -15px;}}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }
});

integration.on('adServed', function (e) {
    $('.ism-close').on('click', function() {
        $(".inskinLoaded #header").css({
            "top": "0"
        });
        $(document).off('scroll');
    });
    headAdjustments();
    $(document).scroll(function () {
        headAdjustments();
    });
});

var headAdjustments = function () {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 120) {
        integration.base.setCfg({
            "plr_ScrollAdjustment": 81
        });
        $(".ism-frame").parent().css({
            "z-index": "0"
        });
    } else {
        $("#header").removeClass("fixed-top");
        integration.base.setCfg({
            "plr_ScrollAdjustment": 0
        });
    }
}

integration.on('adClose', function (e) {
    $('body').removeClass('inskinLoaded');
});
