integration.meta = {
   'sectionID' : '128423',
   'siteName' : ' UDN (1024) - Desktop - (TW)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1284]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1011882',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1024,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var width = $(window).width();
     var sideWidth = ((width - 1024)/2) + 20;
     var headHeight = $(".menu").height();
     integration.base.setCfg({
         plr_ScrollAdjustment : headHeight
     });
     $("#toprow, #footer").css({
       "margin" : "0 auto",
       "width" : "1024px"
     });
     $("#gotop, #story_related #prev").css({
         "right" : sideWidth
     });
     $("#story_related #next").css({
         "left" : sideWidth
     });
     $("html").css({
       "overflow-x" : "hidden"
     });
     $("#footer .sitemap_wrapper dt").css({
       "margin" : "0px 24px 0 0"
     });
     $("head").append("<style>#header, .menu{margin:0 auto; width: 1024px;}</style>");
   }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
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
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
        $("#gotop").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $("#gotop").css({
            "margin-bottom" : "0"
        });
    }
}
