integration.meta = {
    'sectionID' : '129726',
    'siteName' : 'Girlstyle HK - (Creative Appr.) - Smartphone - ( HK )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086951',
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
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        stylesCSS += '.inskinLoaded #back-top {right: '+ integration.custom.FrameSideRight +'px !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 1000 !important}';
        stylesCSS += '.inskinLoaded #header {max-width: calc(100% - 74px)}';
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
          $('.top-header__hamburger').on('click', function() {
            $('#header').toggleClass('opened');
          });
          $('head').append('<style type="text/css">.opened {top : 0px !important; max-width: 375px !important}</style>');

    });


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
