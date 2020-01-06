integration.meta = {
    'sectionID' : '130161',
    'siteName' : 'BusinessFocus - (Creative Appr.) - PageLead - (HK)  ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1105061',
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


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded  {}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
    window.unloadPageskin = function () {
        try {
            integration.destroy();
        } catch (e) {}
    };
});

integration.on("layoutChange", function(e) {
    $('.ism-close').on('click', function() {
        $(document).off('scroll');
    });
    $(".ism-anchor").css({"z-index" : "1000000"});
      $('.top-header__hamburger').on('click', function() {
        $('.ism-anchor').toggleClass('opened');
        $('#header').toggleClass('opened2');
      });
      $('head').append('<style type="text/css">.opened {z-index : 2 !important;}</style>');
      $('head').append('<style type="text/css">.opened2 {top : 0 !important}</style>');

});

integration.on('pagelead:layoutChange', function (e) {
    var topFrame = $(".ism-frame:nth-of-type(1)").outerHeight();
    $(".inskinLoaded #header").css({"top": "0"});
    $(document).scroll(function() {
        var scrolltop = $(document).scrollTop();
        var headerTop = topFrame - scrolltop;
        if (scrolltop > 200) {
            $(".inskinLoaded #header").css({
                "top": "0"
            });
        } else {
            $(".inskinLoaded #header").css({
                "top": headerTop + "px"
            });
        }
    });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

