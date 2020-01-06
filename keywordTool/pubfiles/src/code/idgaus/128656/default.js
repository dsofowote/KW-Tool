integration.meta = {
    'sectionID' : '128656',
    'siteName' : 'Goodgearguide.com - Desktop - ( AU NZ )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1340]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1028944',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1080,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('#header, .lo-toppromos, #footer_idg, .footerbar').css({
        "max-width" : "1080px",
        "margin" : "0 auto"
      });
      $('#header').css({
        "min-width" : "1080px"
      });
      $('#header .logo a, #header h2 a').css({
        "margin-left" : "20px"
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
        $(".footerbar").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $(".footerbar").css({
            "margin-bottom" : "0"
        });
    }
}
