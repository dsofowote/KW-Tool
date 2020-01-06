integration.meta = {
    'sectionID' : '129825',
    'siteName' : 'THELOOP.CA - DESKTOP - (CA)',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1089388',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1152,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $("#mainheader").height();
      if ($("#mainheader").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#mainheader");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
      $("#inskinanchor").css({
      		"top" : headHeight,
      		"position" : "relative"
      });
      $("#topBlockAdWrapper").css({
        "width" : "1152px",
        "margin" : "0 auto",
        "left" : "0",
        "right" : "0"
      });
      $("#topBlockAd").css({
        "margin-top" : headHeight
      });

    }
});
