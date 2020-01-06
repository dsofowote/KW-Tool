integration.meta = {
    'sectionID': '127361',
    'siteName': 'Finanzen100 - Desktop - (DE)',
    'platform': 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '714231',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1300,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_FastInit': true,
    'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".mdl-layout__content ").css({
            "margin-bottom": "450px"
        });
        $(".mdl-layout__container").css({
            "position": "relative"
        });
        $(".f100-search-box").css({
            "right": "30px"
        });
        $("header").css({
            "max-width": "1300px",
            "margin": "0 auto",
            "left": "0",
            "right": "0"
        });
        $(".mdl-navigation").css({
            "position": "absolute",
            "top": "100px"
        });
        $(".mdl-layout__drawer , .mdl-card").css({
            "z-index": "4"
        });
        $(".DESKTOP_BANNER_TOP").css({
            "display": "none"
        });
        $(".mdl-layout__drawer").css({
            "margin-top": "75px"
        });

        $('head').append('<style>.mdl-layout__header{z-index:10000 !important}</style>');
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinTopNav();
    $(document).scroll(function() {
        integration.custom.InSkinTopNav();
    });
    integration.custom.InSkinBottomNav();
    $(document).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if (height < integration.custom.PageSkinTopPanel) {
        var newheight = integration.custom.PageSkinTopPanel - height;
        var headerheight = $("header").height();
        var mdltop = newheight - headerheight;
        $(".mdl-layout__header").css({
            "margin-top": newheight
        });
        $(".mdl-layout__drawer ").css({
            "top": mdltop
        });
    } else {
        $(".mdl-layout__header").css({
            "margin-top": "0px"
        });
        $(".mdl-layout__drawer ").css({
            "top": "-48px"
        });

    }
};

integration.on("adServed", function(e) {
  var headHeight = $('header').height();
    $(".ism-anchor").css({
        "z-index": "10000"
    });
});

// integration.custom.InSkinBottomNav = function(){
//     var docheight = $(document).height();
//     var winheight = $(window).height();
//     var scrolltop = $(document).scrollTop();
//     if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
//         var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight - 150;
// 				$("head").append("<style>.gate.gate--active{margin-bottom:" + footermargin + "px!important;}</style>");
//     } else {
// 			$("head").append("<style>.gate.gate--active{margin-bottom:0px!important;}</style>");
//     }
// }
