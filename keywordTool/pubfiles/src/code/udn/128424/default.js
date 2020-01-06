integration.meta = {
   'sectionID' : '128424',
   'siteName' : 'UDN (1280) - Desktop - ( TW ) ',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1490]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1012916',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1230,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var width = $(window).width();
     var sideWidth = ((width - 1230)/2) + 20;
     var headHeight = $(".menu").height();
     integration.base.setCfg({
         plr_ScrollAdjustment : headHeight
     });
     $("#toprow, #footer").css({
       "margin" : "0 auto",
       "width" : "1230px"
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
     $("head").append("<style>#header, .menu{margin:0 auto; width: 1230px;}</style>");
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
