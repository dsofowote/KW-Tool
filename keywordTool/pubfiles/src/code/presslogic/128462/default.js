integration.meta = {
    'sectionID' : '128462',
    'siteName' : 'Press Logic - (Pretty/ Creative Appr.) - Smartphone - ( HK )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1084538',
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
        stylesCSS += '</style>'
        $('head').append(stylesCSS);


        window.unloadPageskin = function () {
			try {
				integration.destroy();
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
          $('.top-header__hamburger').on('click', function() {
            $('#header').toggleClass('opened');
          });
          $('head').append('<style type="text/css">.opened {top : 0px !important; max-width: calc(100% - 65px) !important}</style>');

    });


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

