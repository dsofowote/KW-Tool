integration.meta = {
    'sectionID' : '129907',
    'siteName' : 'Menelect - (Pub. Booking/Pagelead) - Smartphone - ( HK )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1095014',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};



var myHeader;

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        myHeader = $("#header");
        $('body').addClass('inskinLoaded');
        $('.top-header__hamburger').on('click', function() {
            var scrolltop = $(document).scrollTop();
            if (scrolltop < 200 ) {
                myHeader.toggleClass("topScroll");
                myHeader.toggleClass("middleScroll");
                myHeader.toggleClass("top");
            } else {
                myHeader.removeClass("topScroll");
                myHeader.addClass("middleScroll");
                myHeader.toggleClass("top");
            }
            $('.ism-anchor').toggleClass('opened2');
        });
        $('head').append('<style type="text/css">.opened2 {z-index: 1 !important}</style>');
        $('head').append('<style type="text/css">.topScroll {position: unset !important}</style>');
        $('head').append('<style type="text/css">.middleScroll {position: fixed !important;}</style>');
        $('head').append('<style type="text/css">.top {top: 0px !important}</style>');
        $('head').append('<style type="text/css">.top2 {top: 0px}</style>');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #page-wrap {padding-top: 75px}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        window.unloadPageskin = function () {
            try {
                integration.destroy();
                $('body').removeClass('inskinLoaded');
                myHeader.removeClass('opened2 middleScroll topScroll top top2');
                myHeader.css({"top": "0px"});
                $("#page-wrap").css({"padding-top": "112px"});
            } catch (e) {}
        };
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('pagelead:layoutChange', function (e) {
if (e.data.fixedTop == false) {
    var scrolltop = $(document).scrollTop();
    if (scrolltop < 200 ) {
        myHeader.addClass("topScroll");
        myHeader.removeClass("middleScroll");
        $('#page-wrap').css({"padding-top": "0px"})
    }
    else {
        myHeader.removeClass("topScroll");
        myHeader.addClass("middleScroll");
        myHeader.addClass("top2");
        $('#page-wrap').css({"padding-top": "55px"})
    }
    $( document ).scroll(function() {
        scrolltop = $(document).scrollTop();
        if (scrolltop < 200 ) {
            myHeader.addClass("topScroll");
            myHeader.removeClass("middleScroll");
            $('#page-wrap').css({"padding-top": "0px"})
        } else {
            myHeader.removeClass("topScroll");
            myHeader.addClass("middleScroll");
            myHeader.addClass("top2");
            $('#page-wrap').css({"padding-top": "55px"})
        }
    });
}

});
integration.on("adServed", function(e) {
    $(".ism-anchor").css({"z-index": "9999"});
    $('.ism-close').on('click', function() {
        $(".inskinLoaded #header").css({"top": "0"});
        $(".inskinLoaded #page-wrap").css({"padding-top": "112px"});
        $(document).off('scroll');
        $('.top-header__hamburger').off('click');
        myHeader.removeClass('opened2 middleScroll topScroll top top2');
    });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    myHeader.removeClass('opened2 middleScroll topScroll top top2');
});