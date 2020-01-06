integration.meta = {
    'sectionID' : '128965',
    'siteName' : 'Fitbook - Tablet - ( AT CH DE )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1044124',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1040,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var panelWidth = e.data.plr_FrameSide;
      var headHeight = $("#header--small").outerHeight();
      integration.base.setCfg({
          plr_ScrollAdjustment : headHeight
      });
      $(".after-article").css({
        "max-width" : "1040px",
        "margin" : "0 auto"
      });
      $("#mashfs-main.mashfs-left").css({
        "left" : panelWidth
      });

        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $(".container, .after-article").css({
              "margin-left" : "0"
            });
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
        var newheight = integration.custom.PageSkinTopPanel - height + 300;
        $("#mashfs-main.mashfs-left").css({
            "margin-top" : newheight
        });
    }else{
        $("#mashfs-main.mashfs-left").css({
            "margin-top" : "0px"
        });
    }
}
