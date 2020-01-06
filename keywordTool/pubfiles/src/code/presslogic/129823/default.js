integration.meta = {
    'sectionID' : '129823',
    'siteName' : 'Press Logic Holiday - (Publisher Booking) - Smartphone - ( HK )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : []
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1089217',
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
        stylesCSS += '.inskinLoaded #header {max-width: calc(100% - 74px)}';
        stylesCSS += '.inskinLoaded .instagram-media {max-width: 100% !important; min-width: 100% !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);


        window.unloadPageskin = function () {
			try {
                integration.destroy();
                $('body').removeClass('inskinLoaded');
                $('#header').css({"top": "0px"});
			} catch (e) {}
		};
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    $("header").css({ "top": integration.custom.PageSkinTopPanel + "px" });
    $('.ism-close').on('click', function() {
        $(".inskinLoaded #header").css({
            "top": "0"
        });
        $(document).off('scroll');
    });
    integration.custom.InSkinBottomNav();
    $(document).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function() {
    var scrolltop = $(document).scrollTop();
    var headerTop = integration.custom.PageSkinTopPanel - scrolltop;
    if (headerTop > 0) {
        $(".inskinLoaded #header").css({
            "top": headerTop + "px"
        });
    } else {
        $(".inskinLoaded #header").css({
            "top": "0"
        });
    }
}

integration.on("adServed", function(e) {
    $(".ism-anchor").css({"z-index": "31"});
          $('.top-header__hamburger').on('click', function() {
            $('#header').toggleClass('opened');
          });
          $('head').append('<style type="text/css">.opened {top : 0px !important; min-width : 100% !important}</style>');

    });


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});