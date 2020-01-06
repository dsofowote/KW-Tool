integration.meta = {
    'sectionID': '128961',
    'siteName': 'Business Insider SG - (PageLead) - Smartphone - ( SG )',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1043561',
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
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(2){z-index: 10000 !important;}';
        stylesCSS += '.inskinLoaded .td-mobile-content{background-color:white}';
        stylesCSS += '.inskinLoaded .head-adv {display : none}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({
            'plr_FixedTop': true,
            'plr_EnableSwipe': true
        });
    }
});

integration.on('layoutChange', function (e) {
    var plFixed = true;
    var headHeight = $(".td-header-menu-wrap-full").outerHeight();
    var newValue = "";
    var scrollTop = $(document).scrollTop();

    var stylesCSS = '<style id="inskinPL" type="text/css">';
    if (scrollTop >= a && plFixed) {
        newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + headHeight + 'px !important;}';
        $("#inskinPL").html(newValue);
    } else {
        newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:0px !important;}';
        $("#inskinPL").html(newValue);
    }
    stylesCSS += '</style>';
    $('head').append(stylesCSS);

    //a - minus 12 to account for margin
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    var a = headHeight + integration.custom.FrameSideRight;

    $(document).on('scroll', function () {
        scrollTop = $(document).scrollTop();
        if (scrollTop >= a && plFixed) {
            newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + headHeight + 'px !important;}';
            $("#inskinPL").html(newValue);
        } else {
            newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:0px !important;}';
            $("#inskinPL").html(newValue);
        }
    });

    setTimeout(function () {
        plFixed = false;
        newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:0px !important;}';
        $("#inskinPL").html(newValue);
    }, 6000);
});

integration.on('adClose', function (e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5908/AdX_Leaderboard_Mobile_Passback', [[320, 50], [320, 100]]).display();\n<\\script>";
};