integration.meta = {
    'sectionID': '128731',
    'siteName': 'AsiaOne - (PageLead) - Smartphone - ( SG )',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1041179',
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
        var headHeight = $(".nav-mobile").outerHeight();
        $("body").addClass("inskinLoaded");
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .nav-header{z-index:110000}';
        stylesCSS += '.inskinLoaded .nav-header{z-index:110000}';
        stylesCSS += '.inskinLoaded .col-xs-12:nth-of-type(1){display:none !important;}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);

        if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
            integration.base.setCfg({
                'plr_FixedTop': true,
                'plr_EnableSwipe': true
            });
        }
    }
});

integration.on('adServed', function () {
    $('.ism-frame').parent().css({
        'z-index': '100000'
    });
});

integration.on('layoutChange', function (e) {
    var stylesCSS = '<style id="inskinPL" type="text/css">';
    stylesCSS += '</style>';
    $('head').append(stylesCSS);

    var newValue;
    var plFixed = true;
    var headHeight = $(".region-header.header-sticked-processed").outerHeight();
    var b = $(".inskinLoaded .ism-frame:nth-of-type(1)").outerHeight();
    var a = headHeight + b;

    console.log("variable check", headHeight, b, a);
    $(document).on('scroll', function () {
        var scrollTop = $(document).scrollTop();
        if (plFixed) {
            if (scrollTop >= a) {
                newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + headHeight + 'px !important;}';
                $("#inskinPL").html(newValue);
            } else {
                newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:0px !important;}';
                $("#inskinPL").html(newValue);
            }
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