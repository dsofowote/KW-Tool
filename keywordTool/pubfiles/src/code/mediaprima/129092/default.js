integration.meta = {
    'sectionID' : '129092',
    'siteName' : 'New Straits Times - Desktop - ( MY )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1495]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1055021',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1235,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("head").append("<style> .for-desktop {display: none !important}</style>");
      $(".region-top").css({"display": "none"});
      $('#navbar, #bottom-wide, .footer').css({'width':'1235px', 'margin': '0 auto'});
      $('body').append('<style>.navbar-wrapper{max-width: 1235px !important; margin:0 auto !important; right:0}</style>');
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        integration.custom.InSkinBottomNav();
        $( document ).scroll(function() {
            integration.custom.InSkinBottomNav();
        });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 1917 || integration.custom.isSuper) {
        var sideWidth = (width - 1235)/2;
        var socialTab = sideWidth + 76;
        $(".ins-share-container").css({"left": socialTab + "px", "top": "120px"});
        $("body").append("<style> .ins-backtotop{right: " + sideWidth + "px !important}</style>");
    } else {
        $(".ins-share-container").css({"left": socialTab + "px", "top": "120px"});
        $("body").append("<style> .ins-backtotop{right: " + sideWidth + "px !important}</style>");
    }
}

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
        $("body").append("<style> .ins-backtotop{bottom: " + footermargin + "px !important}</style>");
    } else {
        $("body").append("<style> .ins-backtotop{bottom: 10px !important}</style>");
    }
}
