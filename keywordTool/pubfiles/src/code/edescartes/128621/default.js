integration.meta = {
    'sectionID' : '128621',
    'siteName' : 'Tagpopular - Desktop - (HK)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1420]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1027575',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1160,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var width = $(window).width();
        var sideWidth = (width - 1160)/2 + 20;
        $("#header, #main_container, #footer, .banner-container").css({
            "max-width" : "1160px",
            "margin" : "0 auto"
        });
        $("body").css({
            "overflow-x" : "hidden"
        });
        $("head").append("<style>#top_banner.loaded #home-banner:after{background:none}</style>");
        $("head").append("<style>#header.fixed-top{left:0px; right:0px;}</style>");
        $("#totop").css({
            "right" : sideWidth
        });
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
        $("#totop").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $("#totop").css({
            "margin-bottom" : "0"
        });
    }
}
