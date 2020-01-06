integration.meta = {
    'sectionID': '128963',
    'siteName': 'DCFever - (Creative Appr./Pagelead) - Smartphone - ( HK )',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1043778',
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
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index:99999 !important;}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(2){z-index:199999 !important;}';
        stylesCSS += '</style>'
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
    var headHeight = $(".nav_level_two_wrapper").outerHeight();
    var newValue = "";
    var scrollTop = $(document).scrollTop();
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    var a = headHeight + integration.custom.FrameSideRight;

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