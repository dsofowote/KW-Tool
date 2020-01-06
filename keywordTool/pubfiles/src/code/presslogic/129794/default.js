integration.meta = {
    'sectionID' : '129794',
    'siteName' : 'Press Logic Holiday - (Creative Appr./Pagelead) - Smartphone - ( HK )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1088547',
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
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 1001 !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index: 31 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        $("#header").addClass("forscroll");
        window.unloadPageskin = function () {
			try {
                integration.destroy();
                $('body').removeClass('inskinLoaded');
                $('#header').removeClass('opened');
                $('#header').removeClass('forscroll');
                $("#header").css({"top": "0px"});
			} catch (e) {}
		};
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});


integration.on('pagelead:layoutChange', function (e) {
    if (e.data.fixedTop == false) {
        $( document ).scroll(function() {
            var scrolltop = $(document).scrollTop();
            var headerTop = 200 - scrolltop;
            if ((headerTop + 35) >  scrolltop ) {
                $(".forscroll").css({"top": headerTop + "px"});
                $(".ism-frame:nth-of-type(1)").css({"margin-top": "0px"});
                $('#page-wrap').css({"padding-top": "112px"})
            } else {

                $(".forscroll").css({"top": "0px"});
                $('#page-wrap').css({"padding-top": "0px"})
            }
        });
    }
    $('.ism-close').on('click', function() {
        $(".inskinLoaded #header").css({
            "top": "0"
        });
        $(document).off('scroll');
    });

    });


integration.on("adServed", function(e) {
          $('.top-header__hamburger').on('click', function() {
            $('#header').toggleClass('opened');
            $('.ism-anchor').toggleClass('opened2');
          });
          $('head').append('<style type="text/css">.opened {top : 0px !important}</style>');
          $('head').append('<style type="text/css">.opened2 {z-index: 1 !important}</style>');



    });


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $('#header').removeClass('opened');
    $('#header').removeClass('forscroll');
});