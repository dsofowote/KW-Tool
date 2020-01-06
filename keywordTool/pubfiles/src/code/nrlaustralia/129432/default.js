integration.meta = {
    'sectionID' : '129432',
    'siteName' : 'NRL Australia - Tablet - AU',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1077452',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1320,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.custom.FrameSide = e.data.plr_FrameSide;
      integration.custom.FrameTop = e.data.plr_FrameTop;
      $('html, body').css({'overflow-x':'visible'});
      $('.navigation').css({'max-width':'138px', 'left': integration.custom.FrameSide});
      var contentWidth = 1719 - $('.navigation').width() - integration.custom.FrameSide;
      $('.l-page').css({'max-width': contentWidth});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            var contentWidth = 1719 - $('.navigation').width() - integration.custom.FrameSideRight;
            $('.l-page').css({'max-width': '1360px'});
            $(".l-page-primary").css({"left": -((integration.custom.FrameSideRight)/2 +24)});
        }
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinTopNav();
    $( document ).scroll(function() {
        integration.custom.InSkinTopNav();
    });
});

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if( height < integration.custom.PageSkinTopPanel ){
        var newheight = integration.custom.PageSkinTopPanel - height;
        $(".navigation").css({
            "margin-top" : newheight
        });
    }else{
        $(".navigation").css({
            "margin-top" : "0px"
        });
    }
}
