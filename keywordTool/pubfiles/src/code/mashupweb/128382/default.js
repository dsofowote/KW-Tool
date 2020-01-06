integration.meta = {
   'sectionID' : '128382',
   'siteName' : 'Football Addict - Desktop - ( FR )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1007624',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1170,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var width = $(window).width();
     var sideWidth = (width - 1170)/2 + 10;
     integration.base.setCfg({
         plr_PageHeightAdjustment : 140
     });
     $(".navbar, .header-home, .footer, .block-header, .clubs").css({
        "margin" : "0 auto",
        "width" : "1170px"
     });
     $("html").css({
        "overflow-x" : "hidden"
     });
     $('.cc-window.cc-banner').css({
        "margin" : "0 auto",
        "width" : "1170px"
     });
     $("#return-to-top").css({
         "right" : sideWidth
     });
     $("#onesignal-popover-container #onesignal-popover-dialog").css({
        "box-shadow" : "none"
     });
     integration.custom.ismStickyVideo();
     $( document ).scroll(function() {
         integration.custom.ismStickyVideo();
     });
     $("head").append("<style>.navbar{margin: 0 auto !important;}</style>");
     $("head").append('<style>[aria-label="cookieconsent"]{width: 1170px !important; margin: 0 auto!important;}</style>');
   }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinTopNav();
    $( document ).scroll(function() {
        integration.custom.InSkinTopNav();
    });
});

integration.custom.ismStickyVideo = function() {
    var width = $(window).width();
    var sideWidth = ((width - 1170) / 2) + 10;
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    var videoBottom = 0;
    if (docheight - integration.custom.PageSkinBottomPanel < winheight + scrolltop) {
        videoBottom = ((winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight) + 2;
    }
    $("#ismStickyVideo").html('.impactify-AM-player.desktop.impactify-skin-flat.impactify-in.impactify-cont-in{right: ' + sideWidth + 'px !important; bottom: ' + videoBottom + 'px !important;} .cc-window.cc-banner{bottom: ' + videoBottom + 'px !important;}');
}

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if( height < integration.custom.PageSkinTopPanel ){
        var newheight = integration.custom.PageSkinTopPanel - height;
        $("#onesignal-popover-container").css({
            "margin-top" : newheight
        });
    }else{
        $("#onesignal-popover-container").css({
            "margin-top" : "0px"
        });
    }
}
