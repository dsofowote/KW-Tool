integration.meta = {
    'sectionID': '128939',
    'siteName': 'TheRoar - PageLead (CREATIVE APPROVAL) - (AU)',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1043077',
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

    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index:50 !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(2){z-index:300 !important}';
        stylesCSS += '.inskinLoaded .js-nav-top, .inskinLoaded .pm-nav-mobile-categories__holder{z-index:99}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);



        // $("document").on('click', 'div.ism-indicator', function(){
        //     console.log("swipe panel interaction");
        //     setTimeout(function () {
        //         if ($(".ism-open").length >= 1) {
        //             stylesCSS += '.inskinLoaded .js-nav-top, .inskinLoaded .pm-nav-mobile-categories__holder{z-index:99}';
        //         } else {
        //             stylesCSS += '.inskinLoaded .js-nav-top, .inskinLoaded .pm-nav-mobile-categories__holder{z-index:199}';
        //         }
        //     }, 500);
        // });

        integration.base.setCfg({
            'plr_FixedTop': true,
            'plr_EnableSwipe': true
        });
    }
});

integration.on('layoutChange', function (e) {
    var plFixed = true;
    var newValue = "";
    var hh1 = $(".po-nav-top__holder").outerHeight();
    var hh2 = $(".pm-nav-mobile-categories__holder").outerHeight();
    var headHeight = hh1 + hh2;

    var stylesCSS = '<style id="inskinPL" type="text/css">';
    if ($(".js-nav-top.is-hidden").length >= 1) {
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + hh2 + 'px !important;}';
    } else {
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + headHeight + 'px !important;}';
    }
    stylesCSS += '</style>';
    $('head').append(stylesCSS);

        $(document).on('scroll', function () {
            var scrollTop = $(document).scrollTop();
            if ($(".js-nav-top.is-hidden").length >= 1 && plFixed) {
                newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + hh2 + 'px !important;}';
                $("#inskinPL").html(newValue);
            } else if (plFixed){
                newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + headHeight + 'px !important;}';
                $("#inskinPL").html(newValue);
            }
        });
    setTimeout(function () {
        plFixed = false;
        newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + headHeight + 'px !important;}';
        $("#inskinPL").html(newValue);
    }, 6000);
});

integration.on('adServed', function (e) {
    $('.ism-frame').parent().css({"z-index" : "initial"});
});

integration.on('adClose', function (e) {
    $('body').removeClass('inskinLoaded');
});
