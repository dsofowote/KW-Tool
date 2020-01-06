integration.meta = {
   'sectionID' : '128398',
   'siteName' : 'BabyHome Taiwan - Desktop - ( TW )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1480]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1008842',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1220,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var width = $(window).width();
     var sideWidth = (width - 1220)/2 + 20;
     $(".sec-row, .footer-universal, .ad-span-sky, .personal-cover, #output_selection, .cover-nav.affix, .mboard-nav, .info-nav").css({
       "margin" : "0 auto",
       "width" : "1220px"
     });
     $(".btn-compose.affix, .rapid-menu.affix, #compose-affix").css({
         "right" : sideWidth
     });
     $("#push_image").css({
         "margin-left" : -sideWidth
     });

     $(".ad-span-sky").css({
       "margin-top" : "20px"
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
    integration.custom.InSkinTopNav();
    $( document ).scroll(function() {
        integration.custom.InSkinTopNav();
    });
});

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
        $("#push_image").css({
            "margin-top" : -footermargin + "px"
        });
    } else {
        $("#push_image").css({
            "margin-top" : "0"
        });
    }
}

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if( height < integration.custom.PageSkinTopPanel ){
        var newheight = integration.custom.PageSkinTopPanel - height;
        $(".rapid-menu.affix").css({
            "margin-top" : newheight
        });
    }else{
        $(".rapid-menu.affix").css({
            "margin-top" : "0px"
        });
    }
}
