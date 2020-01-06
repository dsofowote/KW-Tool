integration.meta = {
    'sectionID' : '129153',
    'siteName' : 'Altchar.com - Desktop - ( INT )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1059699',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $(".navbar").outerHeight();
      if ($(".navbar").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".navbar");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                // plr_ForceFrameBottom: 0
            });
        }
    }
    $("#container").css({"width": "1000px", "margin": "0 auto"});

integration._addPixel();
});

integration.on("adServed", function(e) {
  var headHeight = $(".navbar").outerHeight();
	$("#inskinanchor").css({"margin-top" : headHeight});
});
