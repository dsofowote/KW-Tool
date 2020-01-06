integration.meta = {
    'sectionID' : '129108',
    'siteName' : 'Kompas - Desktop - (ID)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1364]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1055031',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1104,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headerHeight = $('.header').height();
      var headHeight = $('.social').height();
     $('.footer').css({'max-width':'1100px', 'margin':'0 auto'});
     if ($(".header").length == 1) {
       $("<div id='inskinanchor'></div>").insertAfter(".header");
       integration.base.setCfg({
         plr_AnchorParent : "#inskinanchor",
         plr_PageHeightAdjustment: -headerHeight,
         plr_ScrollAdjustment: -headHeight,
       });
     };
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
    if (width >1364 || integration.custom.isSuper) {
        var sideWidth = (width - 1104)/2;
        $("body").append("<style> #videoPlaylistPlugId{right: " + sideWidth + "px !important}</style>");
    } else {
      $("body").append("<style> #videoPlaylistPlugId{right: " + sideWidth + "px !important}</style>");
    }
}
