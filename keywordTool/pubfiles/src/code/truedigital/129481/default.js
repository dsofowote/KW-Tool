integration.meta = {
    'sectionID' : '129481',
    'siteName' : 'TrueID Ent - Desktop - (TH)  ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1420]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1080203',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1160,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = (width - 1160)/2;
      var headHeight = $(".noti-bar").outerHeight();
      if ($(".noti-bar").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".noti-bar");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
      $("#inskinanchor").css({
      		"top" : headHeight,
      		"position" : "relative"
      	});

      $("#back-top").css({
          "z-index" : "4",
          "right" : sideWidth
      });
      $("#menu-trueid-web .main-nav, .navbar, .trueid-section-header, .footer-section, .footer-block, .style__RelatedBox-dgauwd-0, .section-line").css({
          "max-width" : "1160px",
          "margin" : "0 auto"
      });
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
        $("#menu-trueid-web .main-nav").css({
            "position" : "relative"
        });
    }else{
        $("#menu-trueid-web .main-nav").css({
            "position" : "fixed"
        });
    }
}
