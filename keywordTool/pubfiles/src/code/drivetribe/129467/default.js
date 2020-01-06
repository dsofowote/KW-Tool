integration.meta = {
    'sectionID' : '129467',
    'siteName' : 'DriveTribe - (CREATIVE APPROVAL) - Desktop - (INT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1078638',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1180,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("html").addClass("inskinLoaded");
      var headHeight = $('header').height();
      $('.sc-fepxGN, .hDvtjS').css({'display':'none'});
      if ($("header").length == 1) {
          $("<div id='inskinanchor'></div>").insertAfter("header");
          integration.base.setCfg({
              plr_AnchorParent : "#inskinanchor",
              plr_PageHeightAdjustment : -headHeight
          });
      }
      window.unloadPageskin = function () {
          try {
            integration.destroy();
          } catch (e) {}
        };
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
        $(".sc-bmyXtO").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $(".sc-bmyXtO").css({
            "margin-bottom" : "0"
        });
    }
}
