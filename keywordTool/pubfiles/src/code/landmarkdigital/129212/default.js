integration.meta = {
    'sectionID' : '129212',
    'siteName' : ' Echo Live - Desktop - (IRE)  ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1063923',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_CheckOptOut' : true,
	'plr_ConsentString' : 'BOiIvSAOiIvSAAKABBENBxoAAAAiCAKAAWABcAEAAMgAiABHgCcAJ4AlgCEAGBA'
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $(".header1").outerHeight() + $(".header1 + .content-wrapper").outerHeight();
      if ($(".header1 + .content-wrapper").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".header1 + .content-wrapper");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
      $("#inskinanchor").css({
      		"top" : headHeight,
      		"position" : "relative"
      });
      $(".header1").css({
        "position" : "fixed",
        "width" : "100%"
      });
      $(".top-bar, footer #main-content").css({
        "margin" : "0 auto",
        "width" : "1000px"
      });
      $("footer #main-content.base_layout").css({
        "margin-bottom" : "100px"
      });
      $("#main-content").css({
          "margin-top" : "75px"
      });
      $("#news-content .content-wrapper").css({
          "top" : "40px"
      });
    }
});

integration.on("adServed", function(e) {
    var headHeight = $(".header1").outerHeight() + $(".header1 + .content-wrapper").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
});
