integration.meta = {
    'sectionID' : '128816',
    'siteName' : 'Game Revolution - Desktop - (INT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072209',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 990,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('head').append('<style>body{margin-top:0px !important}</style>');
      $('#js-site-navigation, .footer').css({'max-width':'990px', 'margin':'0 auto', 'left':'0', 'right':'0'})
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    $("header").css({"top" : integration.custom.PageSkinTopPanel + "px"});
    integration.custom.InSkinBottomNav();
    $(document).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width > 1250 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 990)/2; /* content width divided by 2 */
        $(".scrollup").css({
            "right" : sideWidth,
            "bottom" : "100px"
        });
    } else {
        $(".scrollup").css({
            "right" : sideWidth,
            "bottom" : "100px"
        });
    }
};

integration.custom.InSkinBottomNav = function(){
    var scrolltop = $(document).scrollTop();
    var headerTop = integration.custom.PageSkinTopPanel - scrolltop;
    console.log(headerTop);
    if ( headerTop > 0 ) {
        $("header").css({
            "top" : headerTop + "px"
        });
    } else {
        $("header").css({
            "top" : "0"
        });
    }
}
