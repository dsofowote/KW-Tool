integration.meta = {
    'sectionID' : '129125',
    'siteName' : 'Grid - Desktop - ( ID )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1057063',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1100,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('.navyblock, .footermenu, .header__wrapper ').css({'max-width':'1100px', 'margin':'0 auto'});
      $('.header__wrapper ').css({'right':'0', 'left':'0'});
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
        var sideWidth = (width - 1110)/2;
        $("body").append("<style> #videoPlaylistPlugId{right: " + sideWidth + "px !important}</style>");
    } else {
      $("body").append("<style> #videoPlaylistPlugId{right: " + sideWidth + "px !important}</style>");
    }
}
