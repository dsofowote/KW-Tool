integration.meta = {
    'sectionID' : '129930',
    'siteName' : 'Ohmymag - Dekstop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1300]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1097635',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $(".navbar").outerHeight();
      var leftMargin = ($(window).width() - 980)/2;
      var breadcrumb = $(".breadcrumb").outerHeight();
      $("head").append("<style>.mdc-toolbar--fix {margin-top: 0 ;} .home-slide__bg{background-size: auto !important;}</style>");
      $(".wrapper").css({
        "width" : "980px",
        "margin-left" : "auto",
        "margin-right" : "auto"
      });
      $(".breadcrumb").css({"margin-top" : breadcrumb});
      $(".channel-bar").css({"max-width":"980px", "margin":"auto", "top" : headHeight});
      if ($(".navbar").length == 1) {
              $("<div id='inskinanchor'></div>").insertAfter(".navbar");
              integration.base.setCfg({
                  plr_AnchorParent : "#inskinanchor",
              });
          }
    }
});

integration.on("adServed", function(e) {
    var headHeight = $(".navbar").outerHeight();
    $(".ism-frame").parent().css({"top" : headHeight});
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 500);
});
