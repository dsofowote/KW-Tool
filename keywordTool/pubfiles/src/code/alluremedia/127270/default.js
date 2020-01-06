integration.meta = {
    'sectionID' : '127270',
    'siteName' : 'Kotaku - Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707971',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_PageHeightAdjustment' : -62,
    'plr_StartScrollOnAnchor' : true,
    'plr_ScrollAdjustment' : 62
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      if ($(".top-stories-container").length == 1) {
          $("<div id='inskinanchor'></div>").insertBefore(".top-stories-container");
          integration.base.setCfg({
              plr_AnchorParent : "#inskinanchor"
          });
      }
      var headerHeight = $('.mobile-navigation').height();
      $("#inskinanchor").css({
          "margin-top" : headerHeight
      });
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .top-stories-container{margin-top: 20px;}';
        stylesCSS += '.inskinLoaded .site-header{top: 0;}';
        stylesCSS += '.inskinLoaded .page-wrapper .main, .inskinLoaded .sidebar .sidebar__content, .inskinLoaded .article-trending .trending-river .trending-river__post, .inskinLoaded .article-trending .trending-river .trending-river__post .trending-river__thumbnail, .inskinLoaded .article-trending .trending-river .trending-river__post .trending-river__content{float: none;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        $(".mobile-leaderboard").hide();
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});


integration.on('layoutChange', function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    integration.custom.laychange();
    $(window).on('resize', function() {
        integration.custom.laychange();
    });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

integration.custom.laychange = function() {
    var windowWidth = $(window).width();
    var contentWidth = windowWidth - integration.custom.FrameSideRight;
    $(".page-wrapper, header, ").css({
        "max-width" : contentWidth
    });

    $(".meta__social").css({
        "z-index" : "4",
        "max-width" : contentWidth

    });

    //extra 15px to account for space made by padding
    $(".main__content").css({
        "max-width" : contentWidth - 30
    });
}
